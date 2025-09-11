const { DynamicTool } = require("langchain/tools");
const { z } = require("zod");

const HashtagsResponseSchema = z.array(z.string().min(1));

const hashtagsTool = new DynamicTool({
    name: "HashTagGen",
    description: "Ferramenta para gerar hashtags para posts de acordo com o tema",
    responseFormat: HashtagsResponseSchema,
    verbose: true,
    async func(value) {
        return value;
    },
});

module.exports = { hashtagsTool };