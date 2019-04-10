import React from 'react';
import {
	BrowserRouter as Router,
	Route,
	Link
} from 'react-router-dom';

import Admin from '../webjs/pages/admin';
import Home from '../webjs/pages/home';
import LearnSql from '../webjs/pages/learnSql';

class Index extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			menuData: [{
				name: '表格增删改查'
			}, {
				name: 'demo2'
			}]
		}
	}

	handleMenuChecked(item) {

	}

	render() {
		return (
			<Admin onMenuChecked={this.handleMenuChecked} menuData={this.state.menuData}>
				
			</Admin>
		)
	}
}

export default Index