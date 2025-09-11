const { ChatOpenAI } = require("@langchain/openai");
const { MemorySaver } = require("@langchain/langgraph");
const { createReactAgent } = require("@langchain/langgraph/prebuilt");
const { hashtagsTool } = require("./tools.service");

const agentMemory = new MemorySaver();

const agentModel = new ChatOpenAI({
    apiKey: process.env.OPENAI_API_KEY,
    model: "gpt-4o-mini",
    temperature: 0.6,
    // verbose: true,
});

const agent = createReactAgent({
    llm: agentModel,
    tools: [],
    checkpointer: agentMemory,
})

module.exports = { agent, agentMemory, agentModel };