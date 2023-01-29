import axios from 'axios'
import { useState, useEffect } from 'react'

export default function Home() {
	const [posts, setPosts] = useState([])
	
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
				<h3>{post.title}</h3>
				<p>by: {post.user.name}</p>
			</div>
		)
	})

	return (
		<div>
			hello from welcome
			{postComponents}
		</div>
	)
}
