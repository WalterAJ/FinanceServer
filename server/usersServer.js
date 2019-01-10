const db = require('../utils/DBHelper')
var md5 = require('md5');
const login = params => {
	return new Promise((resolve, rej) => {
		db.getConnection((err, cn) => {
			if (err) throw err
			let sql = `select * from users where userName = ? and password = ?`
			//params.password = md5(params.password);
			cn.query(sql,[params.userName,params.password],(err, rs) => {
				if (err) throw err
				resolve(rs)
				cn.release()
			})
		})
	})
}

const getUserInfo = params => {
	return new Promise((resolve, rej) => {
		db.getConnection((err, cn) => {
			console.log(params);
			if (err) throw err
			let sql = `select * from users where username = ?`
			//params.password = md5(params.password);
			cn.query(sql,params.token,(err, rs) => {
				if (err) throw err
				resolve(rs)
				cn.release()
			})
		})
	})
}


const signin = user => {
	return new Promise((resolve, rej) => {
		user.password = md5(user.password);
		db.getConnection((err, cn) => {
			if (err) throw err
			let sql = `insert into users set ?`
			cn.query(sql, user, (err, rs) => {
				if (err){
					rej(err)
				}
				resolve(rs)
				cn.release()
			})
		})
	}).catch(err =>{console.log(err)})
}

const search = params => {
	return new Promise((resolve, rej) => {
		db.getConnection((err, cn) => {
			if (err) throw err
			let sql = `select * from users where username = ?`
			console.log(sql)
			cn.query(sql,[params.username],(err, rs) => {
				if (err) throw err
				resolve(rs)
				cn.release()
			})
		})
	})
}
let s = {
	login,
	getUserInfo,
	signin,
	search
}

module.exports = s