import { useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import axios from 'axios'
import jwt_decode from 'jwt-decode'

export default function Profile({ currentUser, handleLogout }) {
	// state for the secret message (aka user privilaged data)
	const [msg, setMsg] = useState('')
	const [posts, setPosts] = useState([])
	
	const navigate = useNavigate()

	const generatePosts = posts.map((p, i) => {
		return (
			<div key={i}>
				<Link ><h3>{p.title}</h3></Link>
				<button>edit</button>
				<button>delete</button>
			</div>
		)
	})
	// useEffect for getting the user data and checking auth
	useEffect(() => {
		const fetchData = async () => {
				try {
					// get the token from local storage
					const token = localStorage.getItem('jwt')
					// make the auth headers
					const options = {
						headers: {
							'Authorization': token
						}
					}
					// hit the auth locked endpoint
					const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/api-v1/users/auth-locked`, options)
					// example POST with auth headers (options are always last argument)
					// await axios.post(url, requestBody (form data), options)
					// set the secret user message in state
					setMsg(response.data.msg)
					
					// decode the jwt token for funzies
					const decoded = jwt_decode(token)
					// console.log(decoded.id)
					// grab the posts from the user in database and set it to state
					const getPosts = await axios.get(`${process.env.REACT_APP_SERVER_URL}/api-v1/users/${decoded.id}`)
					// console.log(getPosts.data.posts)
					setPosts(getPosts.data.posts)

				} catch (err) {
					// if the error is a 401 -- that means that auth failed
					console.warn(err)
					if (err.response) {
						if (err.response.status === 401) {
							// panic!
							handleLogout()
							// send the user to the login screen
							navigate('/login')
						}
					}
				}
			}
			fetchData()
	}, []) // only fire on the first render of this component

	return (
		<div>
			<h1>Hello, {currentUser?.name}</h1>

			<p>your email is {currentUser?.email}</p>

			<div>
				<h2>Your Posts:</h2>
				{generatePosts}
			</div>
		</div>
	)
}
