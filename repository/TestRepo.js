const Test = require("../model/Test");
const Question = require("../model/questtion");
const { v4: uuidv4 } = require("uuid");

exports.addTest = (req, res) => {
  const name = req.body.name;
  const testId = req.body.testId;
  const test = new Test(testId, name);
  test.save();
  res.send({
    newTest: test,
    success: true,
    msg: "Question data added successfully",
  });
};

exports.updateTest = (req, res) => {
  const testId = req.body.testId;
  const getData = req.body;
  const data = Test.getAll((tests) => {
    const updateTest = data.filter((test) => test.testId !== testId);
    updateTest.push(getData);
    Test.save(updateTest);
    res.send({ success: true, msg: "Test updated successfully" });
  });
};

exports.removeTest = (req, res) => {
  const testId = req.params.testId;
  const data = Test.getAll((tests) => {
    const t = data.filter((test) => test.testId !== testId);
    Test.save(t);
    res.send({ success: true, message: "Test removed successfully" });
  });
};
