const rep = require("../repository/question");
const express = require("express");
const router = express.Router();
const asyncHandler = require("../helper/asyncHandelr");
const question = require("../model/questtion");
const { v4: uuidv4 } = require("uuid");
const Topic = require("../model/topic");
const { findById } = require("../repository/question");
router.post(
  "/Question/add",
  asyncHandler(async (req, res) => {
    const data = await rep.getQestionData();

    const newQuestion = req.body;
    const topicF = new Topic.name();

    data.push({ ...newQuestion, id: uuidv4() });
    rep.saveQustionData(data);
    res.send({
      newQuestion: data,
      success: true,
      msg: "Question data added successfully",
    });
  })
);
// findById(id) {
//    getProductsFromFile((qestion) => {
//      const qestion = qestion.find((q) => q.questionId === id);
//      return qestion;
//    });
//
//  }
router.get(
  "/Question/list",
  asyncHandler(async (req, res) => {
    const questions = await rep.getQestionData();
    res.json(questions);
  })
);

router.patch(
  "/Question/update/:id",
  asyncHandler(async (req, res) => {
    const id = req.params.id;
    //get the update data
    const getData = req.body;
    //get the existing Question data
    const data = await rep.getQestionData();

    //filter the data
    const updateQuestion = data.filter((question) => question.id !== id);
    //push the updated data
    updateQuestion.push(getData);
    // save it
    rep.saveQustionData(updateQuestion);
    res.send({ success: true, msg: "Question data updated successfully" });
  })
);

router.delete(
  "/Question/delete/:Title",
  asyncHandler(async (req, res) => {
    const Title = req.params.Title;
    const data = await rep.getQestionData();
    const qqq = data.filter((question) => question.Title !== Title);

    router.saveQustionData(qqq);
    res.send({ success: true, msg: "Question removed successfully" });
  })
);
module.exports = router;
