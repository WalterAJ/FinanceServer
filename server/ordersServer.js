const db = require('../utils/DBHelper')
const getOrders = num => {
	return new Promise((resolve, rej) => {
		db.getConnection((err, cn) => {
			if (err) throw err
			let sql = `select orders.*, address.address from orders left join address on address.id = orders.addressId where state='待接单' order by startTime desc limit 0, ${num}`
			cn.query(sql, null, (err, rs) => {
				if (err) throw err
				resolve(rs)
				cn.release()
			})
		})
	})
}

let s = {
	getOrders,
}

module.exports = s