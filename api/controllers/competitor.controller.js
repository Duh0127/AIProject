const { HumanMessage } = require("@langchain/core/messages");
const { agent } = require("../services/agent.service");
const { generatePrompt } = require("../services/prompt.service");
const { companyTool, competitorTool } = require("../services/tools.service");
const { safeParseJson } = require("../utils/json");

exports.findCompetitors = async (req, res) => {
    const { company, niche, threadId } = req.body;
    if (!company || !niche) return res.status(400).json({ error: "company e niche são obrigatórios" });

    try {
        const companyDataRaw = await companyTool.func(company);
        const companyData = await safeParseJson(companyDataRaw);

        const queries = [
            `${company} concorrentes diretos`,
            `${niche} concorrentes`,
            `empresas similares a ${company} no nicho ${niche}`,
            `${company} empresas concorrentes ${niche}`
        ];

        const merged = [];
        const seenLinks = new Set();

        for (const q of queries) {
            const raw = await competitorTool.func(q);
            let arr = [];
            try { arr = await safeParseJson(raw); } catch (e) { arr = []; }
            for (const item of arr) {
                const link = item.link || item.url || item.link;
                if (link && !seenLinks.has(link)) {
                    seenLinks.add(link);
                    merged.push(item);
                } else if (!link) {
                    const key = item.title || item.title;
                    if (key && !seenLinks.has(key)) {
                        seenLinks.add(key);
                        merged.push(item);
                    }
                }
            }
        }

        const topSearchResults = merged.slice(0, 20);
        const searchResultsStr = JSON.stringify(topSearchResults);

        const prompt = await generatePrompt({
            niche,
            company,
            company_data: JSON.stringify(companyData),
            search_results: searchResultsStr,
        });
        const newMessage = new HumanMessage(prompt);

        const threadIdFallback = threadId ?? `${Date.now()}-${Math.floor(Math.random() * 1000000)}`;
        const response = await agent.invoke(
            { messages: [newMessage] },
            { configurable: { thread_id: threadIdFallback } }
        )

        const last = response.messages[response.messages.length - 1];
        let rawContent = last?.content;

        // const parsed = JSON.parse(rawContent);
        return res.status(200).json({ message: "Analise feita", response: rawContent });
    } catch (err) {
        console.error("Erro ao analisar concorrentes:", err);
        return res.status(500).json({ error: err.message });
    }
};