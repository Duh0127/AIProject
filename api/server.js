const express = require("express");
const cors = require("cors"); // ✅ corrigido
const dotenv = require("dotenv");
const postsRoutes = require("./routes/posts.routes.js"); // ✅ CommonJS aceita .js na importação

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/posts", postsRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`✅ Server rodando na porta ${PORT}`);
});
