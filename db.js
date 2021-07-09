//here we are requiring mongoose
const mongoose = require('mongoose');

//ths is a variable/constant which stores database connection where we put the url to connect to our mogno db 
//with the proper and correct username, password and database credentials we can access the database and r/w
const dbConnectonString = "mongodb+srv://user:user@cluster0.tejoe.mongodb.net/example?retryWrites=true&w=majority";

//asynchronous function
const InitiateMongoServer = async() => {
	//first try to run the code and catch if any error happens
	try{
		//connect to the mongo db using the string/url above
		await mongoose.connect(dbConnectonString,{
			useNewUrlParser: true,
			useUnifiedTopology: true,
			useFindAndModify: false

		});
		//if connected print to console saying connected to db
		console.log("Connected to DB!");
	}catch(e){
		//if not connected, throw the error
		console.log(e);
		throw e;

	}
};

module.exports = InitiateMongoServer;