const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const competitorsRoutes = require("./routes/competitor.routes.js");

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/competitors", competitorsRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`✅ Server rodando na porta ${PORT}`);
});
