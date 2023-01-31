import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

//npm i or npm install react-bootstrap bootstrap to use react-bootstrap components

export default function NavBar({ currentUser, handleLogout }) {
	 const loggedIn = (
		<>
		{/* if the user is logged in... */}

		{/* <Navbar bg="primary" expand="lg"> */}
			{/* <Link to="/"> */}
				{/* <span onClick={handleLogout}>Logout</span> */}
			{/* </Link> */}

			{/* <Link to="/profile">
				Profile
			</Link> */}

			{/* <Link to="/new-post">
				New Post
			</Link> */}
		{/* </Navbar> */}
		<Navbar style={{ backgroundColor: 'rgba(0,68,129)' }} variant="dark" expand="xxl">
			<Container>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="me-auto">
					<Nav.Link href="/new-post">New Post</Nav.Link>
					<Nav.Link href="/profile">Profile</Nav.Link>
					<Nav.Link href="/"><span onClick={handleLogout}>Logout</span></Nav.Link>
				</Nav>
				</Navbar.Collapse>
			</Container>
   		</Navbar>
			
		</>
	 )

	 const loggedOut = (
		<>
			{/* if the user is not logged in... */}

			<Navbar style={{ backgroundColor: 'rgba(0,68,129)' }} variant="dark" expand="xxl">
			<Container>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="me-auto">
					<Nav.Link href="/register">Register</Nav.Link>
					<Nav.Link href="/login">Login</Nav.Link>
				</Nav>
				</Navbar.Collapse>
			</Container>
   		</Navbar>
			{/* <Link to="/register">
				Register
			</Link>

			<Link to="/login">
				Login
			</Link> */}
		</>
	 )

	return (
		// <nav className="nav-container">
		// 	<nav className='nav'>
		// 		{/* user always sees this section */}
		// 		<Link to="/">
		// 			<p>InstaKing</p>
		// 		</Link>

		// 		{currentUser ? loggedIn : loggedOut}
		// 	</nav>
			
		// </nav>
		<Navbar className="mb-5" style={{ backgroundColor: 'rgba(0,68,129)' }} variant="dark" expand="lg">
			<Container>
				<Navbar.Brand href="/">InstaKing</Navbar.Brand>

			</Container>
			{currentUser ? loggedIn : loggedOut}
    	</Navbar>

	)
}