var app = require("express")();

app.get("/:date", function(req, res){
  var date = req.params.date;
  if(/[a-z]/gi.test(date) == false ){ //then it is a timestamp
    date = parseInt(date);
  }
  var a = new Date(date); //want 2 date?
  var dateLiteral = a.getDate() + "/" + (a.getMonth() + 1) + "/" + a.getFullYear();
  var dateTimestamp = a.getTime();
  res.write("Date Literal: " + dateLiteral);
  res.write("\r\nDate Timestamp: " + dateTimestamp);
  res.end();
})

app.listen("3000", function(){
  console.log("Timestamp Running");
});
