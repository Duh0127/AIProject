const { HumanMessage } = require("@langchain/core/messages");
const { agent } = require("../services/agent.service");
const { generatePrompt } = require("../services/prompt.service");
const { companyTool, competitorTool } = require("../services/tools.service");
const { safeParseJson } = require("../utils/json");
const { formatWebSearchResults } = require("../utils/loops");

exports.findCompetitors = async (req, res) => {
    const { company, niche, threadId } = req.body;
    if (!company || !niche) return res.status(400).json({ error: "Empresa e Nicho são obrigatórios" });

    try {
        const [companyDataRaw, competitorRawResults] = await Promise.all([
            companyTool.func(company),
            Promise.all([
                competitorTool.func(`${company} concorrentes diretos`),
                competitorTool.func(`${niche} concorrentes`),
                competitorTool.func(`empresas similares a ${company} no nicho ${niche}`),
                competitorTool.func(`${company} empresas concorrentes ${niche}`)
            ])
        ]);

        const formattedResults = await formatWebSearchResults(competitorRawResults)
        const topSearchResults = formattedResults.slice(0, 15);
        const companyData = await safeParseJson(companyDataRaw);
        
        const prompt = await generatePrompt({
            niche,
            company,
            company_data: JSON.stringify(companyData),
            search_results: JSON.stringify(topSearchResults),
        });

        const newMessage = new HumanMessage(prompt);
        const threadIdFallback = threadId ?? `${Date.now()}-${Math.floor(Math.random() * 1000000)}`;

        const response = await agent.invoke(
            { messages: [newMessage] },
            { configurable: { thread_id: threadIdFallback } }
        );

        const last = response.messages[response.messages.length - 1];
        return res.status(200).json({ message: "Análise feita", response: last?.content });
    } catch (err) {
        console.error("Erro ao analisar concorrentes:", err);
        return res.status(500).json({ error: err.message });
    }
};
