const express = require('express');
const app = express();
const PORT = 8082;
app.get('/',function(req,res){
  res.send("Api endpoints => /runFuzzer , /runTestAnalysis");
});

app.get('/runFuzzer',function(req,res){
  res.send("Running the tool");
});

app.get('/runTestAnalysis',function(req,res){
  res.send("Analyzing the test results");
});

app.listen(PORT,function(){
  console.log("App running at "+PORT);
});
