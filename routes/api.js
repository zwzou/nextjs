var express = require('express');
var router = express.Router();

var mysql = require('mysql');
var sqlConfig = require('../mysql/config');

var connection = mysql.createConnection(sqlConfig);

// 获取导航菜单
router.get('/getMenu', (req, res) => {
	// 手动创建菜单
	var sql = `CREATE TABLE IF NOT EXISTS menu_data (
		menu_id INT UNSIGNED AUTO_INCREMENT,
		menu_name VARCHAR(5) NOT NULL,
		PRIMARY KEY ( menu_id )
	)ENGINE=InnoDB DEFAULT CHARSET=utf8;`;
	connection.query(sql, (err, result) => {
		if (!err) {

		}
	});

	// 查询数据
	function selectData() {
		var clSql = `SELECT menu_name FROM menu_data;`;
		connection.query(clSql, (err, result) => {
			if (!err) {
				if (result.length) {
					res.send(result);
				} else {
					var crData = `INSERT INTO menu_data (menu_name)
						VALUES
						('demo1'),
						('demo2');
					`;
					connection.query(crData, (err, result) => {
						if (!err) {
							selectData();
						}
					})
				}
			}
		})
	}
	selectData();
});

// 获取数据
router.get('/getData', (req, res) => {
	// 创建表
	let sql = `CREATE TABLE IF NOT EXISTS person_data (
		person_id INT UNSIGNED AUTO_INCREMENT,
		name VARCHAR(5) NOT NULL,
		sex VARCHAR(5),
		age VARCHAR(5),
		des VARCHAR(100),
		PRIMARY KEY ( person_id )
	)ENGINE=InnoDB DEFAULT CHARSET=utf8;`;
	connection.query(sql, (err, result) => {
		if (!err) {

		}
	});

	// 查询表
	let querySql = 'SELECT * FROM person_data;';
	connection.query(querySql, (err, result) => {
		if (!err) {
			res.send(result);
		}
	})
});

// 增加一条数据
router.get('/addInfo', (req, res) => {
	if (req.query.person_id) {
		delete req.query.person_id;
	}

	let key = Object.keys(req.query).join(',');
	let val = Object.values(req.query).map((e) => `"${e}"`).join(',');
	let sql = `INSERT INTO person_data (${key})
						VALUES
						(${val})
					`;
	connection.query(sql, (err, result) => {
		if (!err) {
			res.send({success: true});
		}
	})
});

// 删除一条数据
router.get('/delInfo', (req, res) => {
	let sql = `DELETE FROM person_data WHERE person_id=${req.query.id};`;
	connection.query(sql, (err, result) => {
		if (!err) {
			res.send({success: true});
		}
	})
});

// 修改一条数据
router.get('/modInfo', (req, res) => {
	let id = req.query.person_id;
	let arr = [];

	if (req.query.person_id) {
		delete req.query.person_id;
	}

	for (let key in req.query) {
		arr.push(`${key}="${req.query[key]}"`);
	}
	const vals = arr.join(',');

	let sql = `UPDATE person_data SET ${vals} WHERE person_id=${id};`;
	connection.query(sql, (err, result) => {
		if (!err) {
			res.send({success: true});
		} else {
			console.log(err)
		}
	})
});

module.exports = router;