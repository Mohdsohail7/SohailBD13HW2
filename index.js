let express = require("express");
let app = express();

// Question 1:
// Calculate a person’s BMI category given weight (kilograms) and height(meters)
app.get('/check-bmi', (req, res) => {
  let weight = parseFloat(req.query.weight);
  let height = parseFloat(req.query.height);
  let result;
  
  let bmi = weight / (height * height);
  if (bmi < 18.5) {
    result = "underweight";
  } else if (bmi < 29.4) {
    result = "normal weight";
  } else if (bmi < 29.9) {
    result = "overweight";
  } else {
    result = "obesse";
  }

  res.send("BMI category is " + result);
});

// Question 2:
// Calculate a student’s academic performance based on their grade
app.get('/check-performance', (req, res) => {
  let grade = parseFloat(req.query.grade);
  let result;

  if (grade >= 90) {
    result = "excellent";
  } else if (grade >= 75) {
    result = "good";
  } else if (grade >= 50) {
    result = "average";
  } else {
    result = "poor";
  }

  res.send("Academic performance is " + result);
});

// Question 3:
// Calculate a person’s age group given their age
app.get('/check-age-group', (req, res) => {
  let age = parseInt(req.query.age);
  let result;

  if (age <= 12) {
    result = "child";
  } else if (age <= 17) {
    result = "teenager";
  } else if (age <= 64) {
    result = "adult";
  } else {
    result = "senior";
  }

  res.send("Age group is " + result);
});

// Question 4:
// Calculate a person’s loan eligibility given creditScore
app.get('/check-loan-eligibility', (req, res) => {
  let creditScore = parseFloat(req.query.creditScore);
  let result;

  if (creditScore >= 750) {
    result = "high";
  } else if (creditScore >= 650) {
    result = "medium";
  } else {
    result = "low";
  }

  res.send("Loan eligibility is " + result);
});

// Question 5:
// Given a person’s income calculate the tax bracket they fall in
app.get('/check-tax-bracket', (req, res) => {
  let income = parseFloat(req.query.income);
  let result;

  if (income <= 500000) {
    result = "10% tax bracket";
  } else if (income <= 1000000) {
    result = "15% tax bracket"
  } else if (income <= 1500000) {
    result = "20% tax bracket";
  } else {
    result = "30% tax bracket";
  }

  res.send("You fall under the " + result);
});

// port number 
let port = 8000;
// server start
app.listen(port, () => {
  console.log("Server is Running on port number is: " + port);
});