// Daniel ________________________________________
import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
	const [posts, setPosts] = useState([])
	// const [detailPage, setDetailPage] = useState('')
	
	useEffect (() => {
		const fetchPosts = async () => {
			try {
				const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/posts`)
				setPosts(response.data)
			} catch (err) {
				console.warn(err)
			}
		}
		fetchPosts()
	}, [])
	
	const postComponents = posts.map((post, idx) => {
		return (
			<div key={`post-${idx}`}>
				{/* this :id will be changed later */}
				<Link to={`/post/${post._id}`}>
					<h3>{post.title}</h3>
				</Link> 
					
				<p>by: {post.user.name}</p>
			</div>
		)
	})

	return (
		<div>
			<h1>Insta-King</h1>
			{postComponents}
		</div>
	)
}
// _____________________________________________DP
