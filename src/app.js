const express = require("express");
require("./db/conn");
const Contact = require("./model/contact");
const app = express();

const port = process.env.PORT || 9000;

// Mideleware
app.use(express.json());

// Create Restfull Api
app.post("/add-contact", (req, res) => {
  console.log(req.body);
  const contactInfo = new Contact(req.body);
  contactInfo.save().then(()=> {
    res.status(201).send(contactInfo);
  }).catch((e) =>{
    res.status(400).send(e);
  })
  //res.send("hello");
});

app.listen(port, () => {
  console.log(`connection done Port ${port}`);
});
