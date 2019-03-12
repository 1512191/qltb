var mongoose = require('mongoose');
const connectString='mongodb://localhost:27017/TMA';
// mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true});
const con = mongoose.connect(connectString,{useNewUrlParser: true}, (error) => {
	if(error){
		console.log("Error " + error);
	}else{
		console.log("Connected successfully to server")
	}
});

module.exports = con;
module.exports.secret = 'TFT';

