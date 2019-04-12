import React from 'react';

import Admin from '../webjs/pages/admin';
import Home from '../webjs/pages/home';

class Index extends React.Component {
	render() {
		return (
			<Admin>
				<Home />
			</Admin>
		)
	}
}

export default Index