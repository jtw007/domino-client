// import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

//npm i or npm install react-bootstrap bootstrap to use react-bootstrap components

export default function NavBar({ currentUser, handleLogout }) {
	 const loggedIn = (
		<>
		{/* if the user is logged in... */}

		<Navbar style={{ backgroundColor: 'rgba(0,68,129)' }} variant="dark" expand="lg">
			<Container>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="me-right">
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

			<Navbar style={{ backgroundColor: 'rgba(0,68,129)' }} variant="dark" expand="lg">
			<Container>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="me-right">
					<Nav.Link href="/register">Register</Nav.Link>
					<Nav.Link href="/login">Login</Nav.Link>
				</Nav>
				</Navbar.Collapse>
			</Container>
   		</Navbar>

		</>
	 )

	return (

		<Navbar className="mb-0" style={{ backgroundColor: 'rgba(0,68,129)' }} variant="dark" expand="lg">
			<Container>
				<Navbar.Brand href="/">McFaceBook</Navbar.Brand>

				{currentUser ? loggedIn : loggedOut}
			</Container>
    	</Navbar>

	)
}