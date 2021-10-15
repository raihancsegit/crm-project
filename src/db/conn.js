var MongoClient = require("mongodb").MongoClient;

var URL =
  "mongodb+srv://raihanCse:raihanCse@cluster0.pqveb.mongodb.net?retryWrites=true&w=majority";

var config = { useUnifiedTopology: true };

MongoClient.connect(URL, config, function (error, MyMongoClinet) {
  if (error) {
    console.log("Connection Fail");
  } else {
    console.log("Connection Success");
  }
});
