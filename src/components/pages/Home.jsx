// Daniel ________________________________________
import axios from 'axios'
import { useState, useEffect } from 'react'
import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function Home() {
	const [posts, setPosts] = useState([])
	// const [detailPage, setDetailPage] = useState('')
	
	const fetchPosts = async () => {
		try {
			const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/posts`)
			setPosts(response.data)
		} catch (err) {
			console.warn(err)
		}
	}
	useEffect (() => {
		fetchPosts()
	}, [])
	
	const postComponents = posts.map((post, idx) => {
		return (
			<div key={`post-${idx}`}>
				<Card className="w-75 mx-auto mt-4">
					<Card.Header><strong><h3>{post.title}</h3></strong></Card.Header>
					<Card.Body>
						<Card.Text>
							by: {post?.user?.name}
						</Card.Text>
						<Link to={`/post/${post._id}`}>
						<Button variant="outline-light" type="submit" size="md" style={{ backgroundColor: 'rgb(0, 68, 129)' }}>See Post</Button>
						</Link> 
					</Card.Body>
				</Card>
			</div>
		)
	})

	return (
		<div>
			<h1 className="home-text" style={{ color: 'rgba(0,68,129)' }}>McFaceBook</h1>
			{postComponents}
		</div>
	)
}
// _____________________________________________DP
