import { useState } from 'react'
import axios from 'axios'
import jwt_decode from 'jwt-decode'
import { Navigate } from 'react-router-dom'

// the cascading s s baby
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


export default function Register({ currentUser, setCurrentUser }) {
	// state for the controlled form
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [msg, setMsg] = useState('')

	// submit event handler
	const handleSubmit = async e => {
		e.preventDefault()
		try {
			// post fortm data to the backend
			const reqBody = {
				name,
				email, 
				password
			}
			const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/api-v1/users/register`, reqBody)

			// save the token in localstorage
			const { token } = response.data
			localStorage.setItem('jwt', token)

			// decode the token
			const decoded = jwt_decode(token)

			// set the user in App's state to be the decoded token
			setCurrentUser(decoded)

		} catch (err) {
			console.warn(err)
			if (err.response) {
				setMsg(err.response.data.msg)
			}
		}
 	}

	// conditionally render a navigate component
	if (currentUser) {
		return <Navigate to="/profile" />
	}

	return (
		<div>
		<p className="new-post fs-2 mt-5">Register Now</p>
			<div>
			<p className="new-post fs-4 mt-4" style={{color:'red'}}>{msg}</p>
			</div>
		<div className="post-container d-flex justify-content-center">
			   <form onSubmit={handleSubmit}>
			  <Form.Group  className="mb-3" controlId="formBasicEmail">
				<Form.Label>Username</Form.Label>
			  	<Form.Control
				type="name"
				id="name"
				placeholder='steve...'
				onChange={e => setName(e.target.value)}
				value={name} />
			</Form.Group>

			  <Form.Group  className="mb-3" controlId="formBasicEmail">
				<Form.Label>Email address</Form.Label>
			  	<Form.Control
				type="email"
				id="email"
				placeholder='gmailuser@hotmail...'
				onChange={e => setEmail(e.target.value)}
				value={email} />
			</Form.Group>

			<Form.Group className="mb-3" controlId="formBasicPassword">
				<Form.Label>Password</Form.Label>
			    <Form.Control
				type="password"
				id="password"
				placeholder='Hunter2...'
				onChange={e => setPassword(e.target.value)}
				value={password} />

			</Form.Group>
			<Button variant="outline-light" type="submit" size="md" style={{ backgroundColor: 'rgb(0, 68, 129)' }}>Login</Button>
			  </form> 
		
		
		</div>
		</div>

	)
}