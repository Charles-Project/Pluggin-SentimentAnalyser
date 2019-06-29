const Sentiment = require("sentiment");

const testingSentiment = new Sentiment();
const wordToTest = testingSentiment.analyze("I hate u more");

if (wordToTest.positive.length > wordToTest.negative.length) {
  console.log("positive statement");
} else if (wordToTest.positive.length < wordToTest.negative.length) {
  console.log("negative statement");
} else {
  console.log("neutral statement");
}
