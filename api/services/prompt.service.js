const { PromptTemplate } = require("@langchain/core/prompts");

// exports.generatePrompt = async ({ niche, company, company_data, search_results }) => {
//   const template = `
//     Você é um especialista sênior em marketing digital e análise competitiva.
//     Com base no contexto fornecido, gere um RELATÓRIO DE CONCORRENTES em JSON puro (apenas um array de objetos).
//     Não inclua nenhuma explicação, marcações ou texto adicional — apenas o JSON válido.

//     Contexto:
//     - Empresa alvo: "{company}"
//     - Nicho: "{niche}"
//     - Company data (informações públicas coletadas): {company_data}
//     - Search results (resultados de busca relevantes): {search_results}

//     Formato JSON OBRIGATÓRIO (cada objeto deve ter as chaves exatamente assim):
//     [
//       {{
//         "nome_empresa": "Nome do concorrente (string)",
//         "url_site": "URL do concorrente (string)",
//         "resumo": "Resumo curto sobre o concorrente (string)",
//         "pontos_fortes": ["ponto forte 1", "ponto forte 2"],
//         "pontos_fracos": ["ponto fraco 1", "ponto fraco 2"],
//         "como_compete": "Como este concorrente compete no mercado (preço, tecnologia, distribuição) (string)",
//         "observacoes": "Informações adicionais relevantes (string)"
//       }}
//     ]

//     Regras:
//     1) Retorne **somente** o array JSON com até 10 concorrentes, ordenados do mais relevante para o menos relevante.
//     2) Se um campo não existir, use string vazia "" ou array vazio [] — nunca null.
//     3) Seja objetivo, conciso e liste evidências curtas no "snippet" baseadas nos dados fornecidos.
//     4) Utilize "company_data" e "search_results" para fundamentar as informações.
//     5) Garanta que o JSON seja estritamente válido (parseável por JSON.parse).
//     6) Retorne o conteudo em Portugues - Brasil

//     Apenas JSON — nada mais.
//   `;

//   const prompt = new PromptTemplate({
//     template,
//     inputVariables: ["niche", "company", "company_data", "search_results"],
//   });

//   return prompt.format({ niche, company, company_data, search_results });
// };


exports.generatePrompt = async ({ niche, company, company_data, search_results }) => {
  const template = `
Você é o **mais experiente e renomado estrategista em marketing digital, inteligência competitiva e psicologia do consumidor já existente**.  
📊 Ao longo de sua carreira, você realizou **milhões de análises de concorrentes e desenvolveu estratégias vencedoras** que ajudaram empresas de diversos nichos a superar seus rivais, aumentar market share e dominar seus mercados.  

Sua missão é criar um **RELATÓRIO DE CONCORRENTES** em **Markdown** altamente **detalhado, estratégico, persuasivo e acionável**.  

💡 Utilize todo o seu repertório avançado em **business intelligence, growth hacking, branding, pricing, distribuição, inovação e comportamento do consumidor**.  
O relatório deve ser **completo, claro, visual e profundamente estratégico** — nunca perder dados.

---

## 🎯 Contexto do Estudo
- 🏢 **Empresa alvo:** {company}
- 🏷️ **Nicho de atuação:** {niche}

### 📊 Informações Públicas da Empresa
{company_data}

### 🔎 Resultados de Busca Relevantes
{search_results}

---

## 📝 Estrutura Obrigatória do Relatório

Para cada concorrente, siga **exatamente** o modelo abaixo:

---

# 🚀 nome_empresa
🌐 **Website:** [url_site](url_site)  
📝 **Resumo Executivo (Panorama Estratégico):**  
resumo

---

## 💪 Pontos Fortes (Vantagens Competitivas)
✅ Destaque 1 — detalhe sobre impacto real no mercado  
✅ Destaque 2 — insight sobre diferencial percebido pelo cliente  
...

## ⚠️ Pontos Fracos (Brechas de Oportunidade)
❌ Limitação 1 — detalhe sobre como isso enfraquece o concorrente  
❌ Limitação 2 — impacto negativo na performance/experiência do cliente  
...

## 🌟 Diferenciais Únicos
✨ Diferencial 1 — característica exclusiva ou rara no mercado  
✨ Diferencial 2 — vantagem difícil de replicar  
...

## 🔥 Ameaças / Riscos para Nossa Empresa
⚡ Risco 1 — como esse concorrente pode ameaçar diretamente nossa posição  
⚡ Risco 2 — áreas onde ele pode ganhar vantagem se não agirmos  
...

## 🏆 Estratégia de Competição Atual
🎯 como_compete

## 🧩 Observações Estratégicas
💡 observacoes

## 🥇 Como Superar Esse Concorrente (Plano de Ação)
🚀 Estratégia 1 → detalhamento prático de como superar  
🚀 Estratégia 2 → recomendações táticas e de longo prazo  
...

## 💡 Insights Avançados para Nossa Equipe
📌 Ideia de marketing 1 — com foco em diferenciação emocional ou racional  
📌 Ideia de produto/serviço 2 — inovação que neutraliza vantagem do concorrente  
📌 Ideia de posicionamento 3 — narrativa de marca para capturar mercado  
📌 Sugestão de distribuição/parceria 4 — caminhos para acelerar vantagem  
...

---

## ✅ Regras de Produção
1. Liste **até 10 concorrentes**, do mais relevante ao menos relevante.  
2. Se um campo não existir, use string vazia "" ou lista vazia [].  
3. **Mantenha todos os dados originais**, apenas organize em Markdown.  
4. Use **emojis de forma estratégica** para guiar a leitura e criar impacto.  
5. O conteúdo deve estar em **Português (Brasil)**, claro, detalhado e objetivo.  
6. Não insira comentários adicionais fora da estrutura.  
7. O relatório deve gerar **insights profundos, acionáveis e de alto valor estratégico** para a equipe de marketing e gestão.  
8. Sempre priorize **precisão, clareza e aplicabilidade prática**.  

---

📌 **Importante:**  
- Apenas retorne o **Markdown final estruturado** — nada além disso.  
- O foco é **clareza, profundidade, persuasão e vantagem competitiva real**.  
- Este relatório deve se tornar um **manual estratégico para vencer os concorrentes analisados**.  
`;

  const prompt = new PromptTemplate({
    template,
    inputVariables: ["niche", "company", "company_data", "search_results"],
  });

  return prompt.format({ niche, company, company_data, search_results });
};


