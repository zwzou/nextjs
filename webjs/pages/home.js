import React from 'react';

class Home extends React.Component {
	render() {
		return (
			<div>
				hello react!
				<style jsx>{`
					div {
						font-size: 24px;
						padding: 100px;
					}
				`}</style>
			</div>
		)
	}
}

export default Home;