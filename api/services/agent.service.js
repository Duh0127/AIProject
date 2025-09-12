const { ChatOpenAI } = require("@langchain/openai");
const { MemorySaver } = require("@langchain/langgraph");
const { createReactAgent } = require("@langchain/langgraph/prebuilt");
const { competitorTool, companyTool } = require("./tools.service");

const agentMemory = new MemorySaver();

const agentModel = new ChatOpenAI({
    apiKey: process.env.OPENAI_API_KEY,
    model: "gpt-4o-mini",
    temperature: 0.3,
    // verbose: true,
});

const agent = createReactAgent({
    llm: agentModel,
    tools: [competitorTool, companyTool],
    checkpointer: agentMemory,
})

module.exports = { agent, agentMemory, agentModel };