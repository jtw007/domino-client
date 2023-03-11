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
				<Card className="w-50 mx-auto my-5" style={{ background: 'transparent' }}>
					<Card.Header className=''><strong><h3>{post.title}</h3></strong></Card.Header>
					<Card.Body className='my-4'>
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
		<div className='mt-3'>
			<h1 className="home-text" style={{ color: 'rgba(0,68,129)' }}>McFaceBook</h1>
			{postComponents}
		</div>
	)
}
// _____________________________________________DP
