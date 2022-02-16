const express = require("express");
const testRepo = require("../repository/TestRepo");

const router = express.Router();

router.post("/addTest", testRepo.addTest);
router.patch("/updateTest", testRepo.updateTest);
router.delete("/removeTest", testRepo.removeTest);


module.exports = router;
