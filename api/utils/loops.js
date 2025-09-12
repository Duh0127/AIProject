
async function formatWebSearchResults(webResults) {
    const formatted = [];
    const seen = new Set();

    for (const raw of webResults) {
        let arr = [];
        try { arr = await safeParseJson(raw); } catch (e) { arr = []; }

        for (const item of arr.slice(0, 5)) {
            const key = item.link || item.url || item.title;
            if (key && !seen.has(key)) {
                seen.add(key);
                formatted.push({
                    title: item.title,
                    link: item.link || item.url,
                    snippet: item.snippet || ""
                });
            }
        }
    };

    return formatted;
}

module.exports = { formatWebSearchResults };