import Header from '../comps/header'
import {
	withRouter
} from 'next/router';

const Content = withRouter(props => (
	<div>
		<h1>{props.router.query.title}</h1>
		<p>the is the blog post content</p>
	</div>
))

const Page = props => (
	<div>
		<Header></Header>
		<Content></Content>
	</div>
)

export default Page;