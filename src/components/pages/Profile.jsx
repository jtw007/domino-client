import { useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import axios from 'axios'
import jwt_decode from 'jwt-decode'

// sssss say snake
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import mcfacebook from '../../img/something.png'


export default function Profile({ currentUser, handleLogout }) {
	const [posts, setPosts] = useState([])
	
	const navigate = useNavigate()

	const generatePosts = posts.map((p, i) => {
		return (
	  			<div key={`post-${i}`}>
					<Card className="w-75 mx-auto mt-4" style={{}}>
						<Card.Header><strong>{p.title}</strong></Card.Header>
						<Card.Body>
							<Card.Text>
							{p.content}
							</Card.Text>
							<Link to={`/post/${p._id}`}>
        					<Button variant="outline-light" type="submit" size="md" style={{ backgroundColor: 'rgb(0, 68, 129)' }}>See Post</Button>
							</Link> 
      				</Card.Body>
    			</Card>
			</div>
		)
	})

	const handleDelete = async (e) => {
		e.preventDefault()
		try {
			await axios.delete(`${process.env.REACT_APP_SERVER_URL}/api-v1/users/${currentUser.id}`)
			handleLogout()
			navigate('/')
		} catch(err) {
			console.warn(err)
		}
	}
	console.log(generatePosts)
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
					// console.log(response.data)
					// decode the jwt token for funzies
					const decoded = jwt_decode(token)
					console.log(decoded.id)
					// grab the posts from the user in database and set it to state
					const getPosts = await axios.get(`${process.env.REACT_APP_SERVER_URL}/api-v1/users/${decoded.id}`)
					console.log(getPosts.data)
					// console.log(getPosts.data.posts)
					// console.log(getPosts.data)
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
			<div className="card bg-dark text-white mx-auto mt-4 w-75" style={{height:"180px", backgroundColor:'blue'}}>
  				<img className="card-img" src={mcfacebook} alt="Card image" style={{height:'100%'}}/>
  				<div className="card-img-overlay">
					<h5 className="card-title" style={{fontSize:'35px'}}>Welcome Home <span style={{color:'gold'}}>Mc</span>{currentUser?.name}</h5>
					<p className="card-text">Your <span style={{color:'gold'}}>Mc</span>Mail: {currentUser?.email}</p>
					<Button variant="outline-light" type="submit" size="md" style={{ backgroundColor: 'rgb(0, 68, 129)' }} onClick={handleDelete}>Delete your <span style={{color:'gold'}}>Mc</span>Count</Button>
  				</div>
			</div>
			
			
			

			<div className="mt-4">
				<h2 className="mt-4">Your <span style={{color:'gold'}}>Mc</span>Posts:</h2>
				{generatePosts}
			</div>
		</div>
	)
}
