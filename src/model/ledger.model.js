'use strict';
var dbConn = require('./../../config/db.config');

var Ledger = function(ledger){
  this.ledger_id      = ledger.ledger_id;
  this.name           = ledger.name;
  this.opening_bal    = ledger.opening_bal;
};
Ledger.create = function (newLedger, result) {
dbConn.query("INSERT INTO ledger set ?", newLedger, function (err, res) {
if(err) {
  console.log("error: ", err);
  result(err, null);
}
else{
  console.log(res.insertId);
  result(null, res.insertId);
}
});
};
Ledger.findById = function (id, result) {
dbConn.query("Select * from ledger where ledger_id = ? ", id, function (err, res) {
if(err) {
  console.log("error: ", err);
  result(err, null);
}
else{
  result(null, res);
}
});
};
Ledger.findAll = function (result) {
dbConn.query("Select * from ledger", function (err, res) {
if(err) {
  console.log("error: ", err);
  result(null, err);
}
else{
  console.log('ledger : ', res);
  result(null, res);
}
});
};
Ledger.update = function(id, ledger, result){
dbConn.query("UPDATE ledger SET name=?,opening_bal=? WHERE ledger_id = ?", [ledger.name,ledger.opening_bal,id], function (err, res) {
if(err) {
  console.log("error: ", err);
  result(null, err);
}else{
  result(null, res);
}
});
};
Ledger.delete = function(id, result){
dbConn.query("DELETE FROM ledger WHERE ledger_id = ?", [id], function (err, res) {
if(err) {
  console.log("error: ", err);
  result(null, err);
}
else{
  result(null, res);
}
});
};
module.exports= Ledger;