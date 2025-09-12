const axios = require("axios");
const { DynamicTool } = require("@langchain/core/tools");


const competitorTool = new DynamicTool({
    name: "CompetitorFinder",
    description: "Busca concorrentes relevantes na web de acordo com a query.",
    responseFormat: "json",
    async func(query) {
        try {
            const { data } = await axios.post(
                "https://google.serper.dev/search",
                { q: query },
                {
                    headers: {
                        "X-API-KEY": process.env.SERP_API_KEY,
                        "Content-Type": "application/json",
                    },
                }
            );

            const results = (data.organic || []).map((r) => ({
                title: r.title || "",
                link: r.link || "",
                snippet: r.snippet || "",
                date: r.date || "",
                position: r.position || null,
            }));

            return JSON.stringify(results);
        } catch (err) {
            console.error("Erro competitorTool:", err?.message || err);
            return JSON.stringify([]);
        }
    },
});

const companyTool = new DynamicTool({
    name: "CompanyInfoFinder",
    description: "Busca informações públicas (site, perfil, resumo) sobre a empresa informada.",
    responseFormat: "json",
    async func(companyName) {
        try {
            const { data } = await axios.post(
                "https://google.serper.dev/search",
                { q: `${companyName}` },
                {
                    headers: {
                        "X-API-KEY": process.env.SERP_API_KEY,
                        "Content-Type": "application/json",
                    },
                }
            );

            const results = (data.organic || []).map((r) => ({
                title: r.title || "",
                link: r.link || "",
                snippet: r.snippet || "",
                date: r.date || "",
                position: r.position || null,
            }));

            return JSON.stringify(results);
        } catch (err) {
            console.error("Erro companyTool:", err?.message || err);
            return JSON.stringify([]);
        }
    },
});

module.exports = { competitorTool, companyTool };