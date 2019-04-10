import Link from 'next/link';

const linkStyle = {
	marginRight: 15
}

const Header = (props) => (
	<div>
		<Link href="/">
			<a style={linkStyle}>home</a>
		</Link>
		<Link href="/about">
			<a style={linkStyle}>about</a>
		</Link>
		{props.children}
	</div>
)

export default Header;