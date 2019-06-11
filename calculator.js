//jshint esversion:6
const bodyParser = require("body-parser");
const express    = require("express");
const app        = express();

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
  res.sendFile(__dirname + "/index.html");
});
app.post("/", function(req, res){
  let num1 = Number(req.body.num1),
      num2 = Number(req.body.num2),
      result = num1 + num2;
  res.send("The result of the calculation is " + result);
});

//BMI Calculator
app.get("/bmicalculator", function(req, res){
  res.sendFile(__dirname + "/bmiCalculator.html");
});
app.post("/bmicalculator", function(req, res){
  let weight = parseFloat(req.body.weight),
      height = parseFloat(req.body.height),
      n = weight / (height * height);
  res.send("Your BMI is " + n);
});

app.listen("3000", function(){
  console.log("We UP!");
});
