/**
 * Converte uma string HTML para Markdown, pausando conversão dentro de blocos <code>, <pre><code> e blocos de código Markdown (```).
 * @param {string} html - O conteúdo HTML a ser convertido.
 * @returns {string} - O conteúdo convertido em Markdown.
 */
export function convertHtmlToMarkdown(html) {
    if (!html) return '';

    // Divide em segmentos: blocos Markdown ```...```, trechos de código HTML (<pre><code> e <code>), e demais conteúdos
    const segments = html.split(/(```[\s\S]*?```|<pre[^>]*>[\s\S]*?<\/pre>|<code[^>]*>[\s\S]*?<\/code>)/gi);
    let result = '';

    segments.forEach(segment => {
        // Detecta bloco de código Markdown ```...```
        if (/^```[\s\S]*```$/i.test(segment.trim())) {
            // Preserva o bloco exatamente como está
            result += `\n\n${segment.trim()}\n\n`;
        }
        // Detecta bloco de código HTML <pre><code>...</code></pre>
        else if (/^<pre[^>]*>[\s\S]*<\/pre>$/i.test(segment)) {
            const codeMatch = /<pre[^>]*>\s*<code[^>]*>([\s\S]*?)<\/code>\s*<\/pre>/i.exec(segment);
            const codeContent = codeMatch ? codeMatch[1] : '';
            result += `\n\n\`\`\`\n${codeContent.trim()}\n\`\`\`\n\n`;
        }
        // Detecta código inline HTML <code>...</code>
        else if (/^<code[^>]*>[\s\S]*<\/code>$/i.test(segment)) {
            const inlineMatch = /<code[^>]*>([\s\S]*?)<\/code>/i.exec(segment);
            const inlineContent = inlineMatch ? inlineMatch[1] : '';
            result += `\`${inlineContent.trim()}\``;
        }
        else {
            // Conteúdo fora de qualquer bloco de código
            let text = segment;
            text = convertTables(text);
            text = convertBrAndHr(text);
            text = convertParagraph(text);
            text = convertHeaders(text);
            text = convertBlockquotes(text);
            text = convertLists(text);
            text = convertIframes(text);
            text = convertVideos(text);
            text = convertImages(text);
            text = convertLinks(text);
            text = convertTextFormatting(text);
            text = convertCheckboxes(text);
            text = removeSpanAndClasses(text);
            text = removeRemainingTags(text);
            result += text;
        }
    });

    return result.trim();
}

/**
 * Converte tabelas HTML em Markdown.
 * @param {string} html
 * @returns {string}
 */
function convertTables(html) {
    return html.replace(/<table[^>]*>([\s\S]*?)<\/table>/gi, (_, tableContent) => {
        const rows = [];
        const rowMatches = [...tableContent.matchAll(/<tr[^>]*>([\s\S]*?)<\/tr>/gi)];

        for (let i = 0; i < rowMatches.length; i++) {
            const rowHtml = rowMatches[i][1];
            const cells = [];

            const cellTag = i === 0 ? 'th' : 'td';
            const cellRegex = new RegExp(`<${cellTag}[^>]*>(.*?)<\/${cellTag}>`, 'gi');
            let match;

            while ((match = cellRegex.exec(rowHtml)) !== null) {
                const cellContent = match[1].replace(/<[^>]+>/g, '').trim();
                cells.push(cellContent);
            }

            rows.push(`| ${cells.join(' | ')} |`);
            if (i === 0) {
                rows.push(`| ${cells.map(() => '---').join(' | ')} |`);
            }
        }

        return rows.join('\n');
    });
}

/**
 * Converte quebras de linha e separadores em Markdown.
 * @param {string} html
 * @returns {string}
 */
function convertBrAndHr(html) {
    return html
        .replace(/<br\s*\/?>(\n)?/gi, '\n')
        .replace(/<hr\s*\/?>(\n)?/gi, '\n---\n');
}

/**
 * Converte parágrafos em Markdown.
 * @param {string} html
 * @returns {string}
 */
function convertParagraph(html) {
    return html.replace(/<p[^>]*>([\s\S]*?)<\/p>/gi, (_, content) => {
        return content.trim() ? `\n\n${content.trim()}\n\n` : '';
    });
}

/**
 * Converte cabeçalhos HTML (h1-h6) em Markdown.
 * @param {string} html
 * @returns {string}
 */
function convertHeaders(html) {
    for (let i = 6; i >= 1; i--) {
        const regex = new RegExp(`<h${i}[^>]*>(.*?)<\/h${i}>`, 'gi');
        html = html.replace(regex, (_, content) => `\n\n${'#'.repeat(i)} ${content.trim()}\n\n`);
    }
    return html;
}

/**
 * Converte citações em bloco (<blockquote>) em Markdown.
 * @param {string} html
 * @returns {string}
 */
function convertBlockquotes(html) {
    return html.replace(/<blockquote[^>]*>([\s\S]*?)<\/blockquote>/gi, (_, content) => {
        return `\n> ${content.trim().replace(/\n/g, '\n> ')}\n`;
    });
}

/**
 * Converte blocos de código (<pre><code>) em Markdown.
 * @param {string} html
 * @returns {string}
 */
function convertCodeBlocks(html) {
    return html.replace(/<pre[^>]*><code[^>]*>([\s\S]*?)<\/code><\/pre>/gi, (_, content) => {
        return `\n\n\
\`\`\`\n${content.trim()}\n\`\`\`\n\n`;
    });
}

/**
 * Converte código inline (<code>) em Markdown.
 * @param {string} html
 * @returns {string}
 */
function convertInlineCode(html) {
    return html.replace(/<code[^>]*>(.*?)<\/code>/gi, (_, content) => `\`${content.trim()}\``);
}

/**
 * Converte listas ordenadas e não ordenadas em Markdown.
 * @param {string} html
 * @returns {string}
 */
function convertLists(html) {
    html = html.replace(/<ol[^>]*>([\s\S]*?)<\/ol>/gi, (_, content) => {
        const items = [...content.matchAll(/<li[^>]*>([\s\S]*?)<\/li>/gi)];
        return items.map((item, i) => `${i + 1}. ${item[1].trim()}`).join('\n');
    });

    html = html.replace(/<ul[^>]*>([\s\S]*?)<\/ul>/gi, (_, content) => {
        const items = [...content.matchAll(/<li[^>]*>([\s\S]*?)<\/li>/gi)];
        return items.map(item => `- ${item[1].trim()}`).join('\n');
    });

    return html;
}

/**
 * Converte iframes de vídeo em Markdown.
 * @param {string} html
 * @returns {string}
 */
function convertIframes(html) {
    return html.replace(/<iframe[^>]*src=["']([^"']+)["'][^>]*><\/iframe>/gi, (_, src) => {
        if (src.includes('youtube.com') || src.includes('youtu.be') || src.includes('vimeo.com')) {
            return `[Video](${src})`;
        }
        return '';
    });
}

/**
 * Converte elementos de vídeo em Markdown.
 * @param {string} html
 * @returns {string}
 */
function convertVideos(html) {
    return html
        .replace(/<video[^>]*>[\s\S]*?<source[^>]*src=["']([^"']+)["'][^>]*>[\s\S]*?<\/video>/gi, '[Video]($1)')
        .replace(/<video[^>]*src=["']([^"']+)["'][^>]*>(.*?)<\/video>/gi, '[Video]($1)')
        .replace(/<video[^>]*src=["']([^"']+)["'][^>]*\/?>(\n)?/gi, '[Video]($1)');
}

/**
 * Converte imagens em Markdown.
 * @param {string} html
 * @returns {string}
 */
function convertImages(html) {
    return html
        .replace(/<img[^>]*src=["']([^"']+)["'][^>]*alt=["']([^"']*)["'][^>]*>/gi, '![$2]($1)')
        .replace(/<img[^>]*alt=["']([^"']*)["'][^>]*src=["']([^"']+)["'][^>]*>/gi, '![$1]($2)')
        .replace(/<img[^>]*src=["']([^"']+)["'][^>]*>/gi, '![]($1)');
}

/**
 * Converte links em Markdown.
 * @param {string} html
 * @returns {string}
 */
function convertLinks(html) {
    return html.replace(/<a[^>]*href=["']([^"']+)["'][^>]*>(.*?)<\/a>/gi, '[$2]($1)');
}

/**
 * Converte tags de formatação de texto (<strong>, <em>, <b>, <i>) em Markdown.
 * @param {string} html
 * @returns {string}
 */
function convertTextFormatting(html) {
    return html
        .replace(/<strong[^>]*>(.*?)<\/strong>/gi, '**$1**')
        .replace(/<b[^>]*>(.*?)<\/b>/gi, '**$1**')
        .replace(/<em[^>]*>(.*?)<\/em>/gi, '_$1_')
        .replace(/<i[^>]*>(.*?)<\/i>/gi, '_$1_');
}

/**
 * Converte checkboxes em Markdown de lista de tarefas.
 * @param {string} html
 * @returns {string}
 */
function convertCheckboxes(html) {
    return html
        .replace(/<input[^>]*type=["']checkbox["'][^>]*checked[^>]*>/gi, '[x] ')
        .replace(/<input[^>]*type=["']checkbox["'][^>]*>/gi, '[ ] ');
}

/**
 * Remove tags <span>, <div> e classes.
 * @param {string} html
 * @returns {string}
 */
function removeSpanAndClasses(html) {
    return html
        .replace(/ class=["'][^"']*["']/gi, '')
        .replace(/<\/?(span|div)[^>]*>/gi, '');
}

/**
 * Remove quaisquer outras tags HTML restantes.
 * @param {string} html
 * @returns {string}
 */
function removeRemainingTags(html) {
    return html.replace(/<[^>]+>/g, '');
}