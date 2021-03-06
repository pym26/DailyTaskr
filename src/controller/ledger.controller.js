'use strict';
const Ledger = require('../model/ledger.model');
exports.findAll = function(req, res) {
Ledger.findAll(function(err, ledger) {
  console.log('controller')
  if (err)
  res.send(err);
  console.log('res', ledger);
  res.send(ledger);
});
};
exports.create = function(req, res) {
const new_ledger = new Ledger(req.body);
//handles null error
if(req.body.constructor === Object && Object.keys(req.body).length === 0){
  res.status(400).send({ error:true, message: 'Please provide all required field' });
}else{
Ledger.create(new_ledger, function(err, ledger) {
  if (err)
  res.send(err);
  res.json({error:false,message:"Ledger added successfully!",data:ledger});
});
}
};
exports.findById = function(req, res) {
Ledger.findById(req.params.id, function(err, ledger) {
  if (err)
  res.send(err);
  res.json(ledger);
});
};
exports.update = function(req, res) {
  if(req.body.constructor === Object && Object.keys(req.body).length === 0){
    res.status(400).send({ error:true, message: 'Please provide all required field' });
  }else{
    Ledger.update(req.params.id, new Ledger(req.body), function(err, ledger) {
   if (err)
   res.send(err);
   res.json({ error:false, message: 'Ledger successfully updated' });
});
}
};
exports.delete = function(req, res) {
Ledger.delete( req.params.id, function(err, ledger) {
  if (err)
  res.send(err);
  res.json({ error:false, message: 'Ledger successfully deleted' });
});
};