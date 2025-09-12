const { Router } = require("express");
const CompetitorController = require("../controllers/competitor.controller");

const router = Router();

router.post("/find_by_niche", CompetitorController.findCompetitors);

module.exports = router;