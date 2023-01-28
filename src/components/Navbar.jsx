import { Link } from 'react-router-dom'

export default function Navbar({ currentUser, handleLogout }) {
	 const loggedIn = (
		<>
			{/* if the user is logged in... */}
			<Link to="/">
				<span onClick={handleLogout}>Logout</span>
			</Link>

			<Link to="/profile">
				Profile
			</Link>

			<Link to="/new-post">
				New Post
			</Link>
		</>
	 )

	 const loggedOut = (
		<>
			{/* if the user is not logged in... */}
			<Link to="/register">
				Register
			</Link>

			<Link to="/login">
				Login
			</Link>
		</>
	 )

	return (
		<nav>
			{/* user always sees this section */}
			<Link to="/">
				<p>InstaKing</p>
			</Link>

			{currentUser ? loggedIn : loggedOut}
		</nav>
	)
}