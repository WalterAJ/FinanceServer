const server = require('../server/usersServer')
const login = async (req, res, next) => {
	var params = req.query;
	console.log(req.query)
	try {
		server.login(params).then(v => {
			console.log('get')
			res.status(200).send(v)
		})
	} 
	catch (err) {
		console.log(err)
	}
}

const getUserInfo = async (req, res, next) => {
	var params = req.query;
	try {
		server.getUserInfo(params).then(v => {
			console.log('get')
			res.status(200).send(v)
		})
	} 
	catch (err) {
		console.log(err)
	}
}

const signin = async (req, res, next) => {
	try {
		const user = req.body.user
		server.signin(user).then(v => {
			res.status(200).send(v)
		}).catch( error => {
			console.log( 'Error: ', error.message);
		  });
	} 
	catch (err) {
		console.log(err)
	}
}

const search = async (req, res, next) => {
	var params = req.query;

	try {
		
		server.search(params).then(v => {
			console.log('get')
			res.status(200).send(v)
		})
	} 
	catch (err) {
		console.log(err)
	}
}
let c = {
	login,
	getUserInfo,
	signin,
	search
}
module.exports = c