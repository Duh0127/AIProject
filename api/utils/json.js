exports.extractJsonFromText = (text) => {
    if (typeof text !== "string") return null;
    const firstBrace = text.indexOf("{");
    const firstBracket = text.indexOf("[");
    let start = -1, openChar, closeChar;
    if (firstBracket === -1 && firstBrace === -1) return null;
    if (firstBracket === -1 || (firstBrace !== -1 && firstBrace < firstBracket)) {
        start = firstBrace; openChar = "{"; closeChar = "}";
    } else {
        start = firstBracket; openChar = "["; closeChar = "]";
    }

    let depth = 0;
    for (let i = start; i < text.length; i++) {
        const ch = text[i];
        if (ch === openChar) depth++;
        else if (ch === closeChar) {
            depth--;
            if (depth === 0) {
                return text.slice(start, i + 1);
            }
        }
    }
    return null;
}

exports.safeParseJson = async (maybeString) => {
    if (typeof maybeString !== "string") return maybeString;
    try { return JSON.parse(maybeString); }
    catch (e) {
        const extracted = exports.extractJsonFromText(maybeString);
        if (!extracted) throw new Error("Não foi possível extrair JSON válido.");
        return JSON.parse(extracted);
    }
}