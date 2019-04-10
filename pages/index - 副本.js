// import Header from '../comps/header';
import Admin from '../comps/admin';
import Link from 'next/link';
// import fetch from 'isomorphic-unfetch';

// const PostLink = props => (
// 	<li>
// 		<Link href={`/post?id=${props.id}`} as={`/p/${props.id}`}>
// 			<a>{props.name}</a>
// 		</Link>
// 	</li>
// )

// const Index = (props) => (
// 	<div>
// 		<Header></Header>
// 		<h1>Batman TV Show</h1>
// 		<ul>
// 			{
// 				props.shows.map(show => (
// 					<PostLink id={show.id} name={show.name} key={show.id}/>
// 				))
// 			}
// 		</ul>
// 	</div>
// )

// Index.getInitialProps = async function() {
// 	// const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
// 	// const data = await res.json();
// 	const data = [{
// 		id: 'aa',
// 		name: '第一个'
// 	}, {
// 		id: 'bb',
// 		name: '第二个'
// 	}, {
// 		id: 'cc',
// 		name: '第三个'
// 	}, {
// 		id: 'dd',
// 		name: '第四个'
// 	}]

// 	console.log(`Show data fetched. Count: ${data.length}`);

// 	return {
// 		shows: data.map(entry => entry)
// 	}

// }

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
		debugger
	}


	render() {
		return (
			<Admin menuData={this.state.menuData} onMenuChecked={this.handleMenuChecked}>
				admin
			</Admin>
		)
	}
}

export default Index