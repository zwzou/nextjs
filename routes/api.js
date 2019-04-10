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
	})

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
})

// 获取数据
router.get('/getData', (req, res) => {
	var sql = 'SELECT * FROM websites;';
	connection.query(sql, (err, result) => {
		if (!err) {
			res.send(result);
		}
	})
})

module.exports = router;