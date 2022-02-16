const rep = require("../repository/Topic");
const express = require("express");
const router = express.Router();
const asyncHandler = require("../helper/asyncHandelr");

router.post(
  "/Topic/add",
  asyncHandler(async (req, res) => {
    const data = await rep.getQestionData();

    const newTopic = req.body;
    if (newTopic.name == null) {
      return res.status(401).send({ error: true, msg: "Topic data missing" });
    }
    const biggestId = Math.max.apply(
      Math,
      data.map((Topic) => Topic.Id)
    );
    const newTo = { topicId: biggestId + 1, name: newTopic.name };
    data.push(newTo);
    rep.saveQustionData(data);
    res.send({
      newTopic: data,
      success: true,
      msg: "Topic data added successfully",
    });
  })
);
router.get(
  "/Topic/list",
  asyncHandler(async (req, res) => {
    const Topics = await rep.getQestionData();
    res.json(Topics);
  })
);
router.patch(
  "/Topic/update/:name",
  asyncHandler(async (req, res) => {
    const name = req.params.name;
    //get the update data
    const getData = req.body;
    //get the existing Topic data
    const data = await rep.getQestionData();

    //filter the data
    const updateTopic = data.filter((Topic) => Topic.name !== name);
    //push the updated data
    updateTopic.push(getData);
    // save it
    rep.saveQustionData(updateTopic);
    res.send({ success: true, msg: "Topic data updated successfully" });
  })
);
router.delete(
  "/Topic/delete/:name",
  asyncHandler(async (req, res) => {
    const name = req.params.name;
    const data = await rep.getQestionData();
    const qqq = data.filter((Topic) => Topic.name !== name);

    router.saveQustionData(qqq);
    res.send({ success: true, msg: "Topic removed successfully" });
  })
);
module.exports = router;
