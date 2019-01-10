const server = require('../server/ordersServer')


const getOrders = async (req, res, next) => {
	try {
		server.getOrders().then(v => {
			console.log('get')
			res.status(200).send(v)
		})
	} 
	catch (err) {
		console.log(err)
	}
}

let c = {
	getOrders
}

module.exports = c