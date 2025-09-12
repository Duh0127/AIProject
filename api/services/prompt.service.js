const { PromptTemplate } = require("@langchain/core/prompts");

exports.generatePrompt = async ({ niche, company, company_data, search_results }) => {
  const template = `
    Você é um especialista sênior em marketing digital e análise competitiva.
    Com base no contexto fornecido, gere um RELATÓRIO DE CONCORRENTES em JSON puro (apenas um array de objetos).
    Não inclua nenhuma explicação, marcações ou texto adicional — apenas o JSON válido.

    Contexto:
    - Empresa alvo: "{company}"
    - Nicho: "{niche}"
    - Company data (informações públicas coletadas): {company_data}
    - Search results (resultados de busca relevantes): {search_results}

    Formato JSON OBRIGATÓRIO (cada objeto deve ter as chaves exatamente assim):
    [
      {{
        "nome_empresa": "Nome do concorrente (string)",
        "url_site": "URL do concorrente (string)",
        "resumo": "Resumo curto sobre o concorrente (string)",
        "pontos_fortes": ["ponto forte 1", "ponto forte 2"],
        "pontos_fracos": ["ponto fraco 1", "ponto fraco 2"],
        "como_compete": "Como este concorrente compete no mercado (preço, tecnologia, distribuição) (string)",
        "observacoes": "Informações adicionais relevantes (string)"
      }}
    ]

    Regras:
    1) Retorne **somente** o array JSON com até 10 concorrentes, ordenados do mais relevante para o menos relevante.
    2) Se um campo não existir, use string vazia "" ou array vazio [] — nunca null.
    3) Seja objetivo, conciso e liste evidências curtas no "snippet" baseadas nos dados fornecidos.
    4) Utilize "company_data" e "search_results" para fundamentar as informações.
    5) Garanta que o JSON seja estritamente válido (parseável por JSON.parse).
    6) Retorne o conteudo em Portugues - Brasil

    Apenas JSON — nada mais.
  `;

  const prompt = new PromptTemplate({
    template,
    inputVariables: ["niche", "company", "company_data", "search_results"],
  });

  return prompt.format({ niche, company, company_data, search_results });
};


