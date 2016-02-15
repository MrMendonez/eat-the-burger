var orm = require('../config/orm.js');

var burger = {
	findAllMembers: function(cb) {
		orm.selectAll('burgers', function(res){
			cb(res)
		});
	},
	addOneMemeber: function(nameInput,cb) {
		orm.insertOne('burgers', nameInput, 1, cb);
	},
	updateOneMember: function(inputId, cb){
		orm.updateOne('burgers', 1, inputId, cb);
	},
	removeOneMember: function(inputId, cb) {
		orm.deleteOne('burgers', 1, inputId, cb);
	}
};
    
module.exports = burger;