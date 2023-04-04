const _ = require('lodash');
const moment = require('moment');
const ShortUniqueId = require('short-unique-id');

module.exports.data = []; // You want to actually save the records to a database

module.exports.insert = function (url) {
  const uid = new ShortUniqueId();
  const payload = {
    code: uid(), // even though this is a random code it might be a good idea to check for uniqueness at the database level to make sure 
    url,
    createdDate: moment()
  };
  this.data = _.concat(this.data, payload);
  return payload;
}

module.exports.get = function (code) {
  console.log(code, this.data);
  return _.find(this.data, item => { return item.code === code });
}
