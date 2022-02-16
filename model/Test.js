const fs = require("fs");
const path = require("path");
const { v4: uuidv4 } = require("uuid");

const p = path.join(
  path.dirname(process.mainModule.filename),
  "data",
  "test.json"
);

const getTestFromFile = (cb) => {
  fs.readFile(p, (err, fileContent) => {
    if (err) {
      cb([]);
    } else {
      cb(JSON.parse(fileContent));
    }
  });
};

module.exports = class Test {
  constructor(
    testId,
    name
  ) {
    this.testId = testId;
    this.name = name;
  }

  save() {
    this.testId = uuidv4().toString();
    getTestFromFile((tests) => {
      tests.push(this);
      fs.writeFile(p, JSON.stringify(tests), (err) => {
        console.log(err);
      });
    });
  }

  static getAll() {
    getTestFromFile(cb);
  }

  static findById(testId, cb) {
    getProductsFromFile((tests) => {
      const test = tests.find((p) => p.testId === testId);
      cb(test);
    });
  }
}

