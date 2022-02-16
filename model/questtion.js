class question {
  constructor(Title, desc, topic) {
    this.Title = Title;
    this.description = desc;
    this.topic = topic ? topic : [];
  }
}
module.exports = question;
