 // Details page
import axios from "axios"
import {useState, useEffect} from 'react'
import { useParams } from "react-router-dom"


export default function PostDetails() { 
    const [post, setPost] = useState([])
    const {id} = useParams()
    useEffect(() => {
        const fetchPost = async () =>{
            //Grabbing the post by the id
            try {
                const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/posts/${id}`)
                setPost(response.data)
            } catch (err) {
                console.warn(err)
            }
        }
        fetchPost()
    }, [])
    /* const commentComponents = comment.map((comment, idx) => {
		return (
			<div key={`comment-${idx}`}>
				<p>By: {comment.user.name}</p>
                <div>{comment.content}</div>
                <button>Delete</button>
                <button>Edit</button>
              
                
			</div>
		)
	}) */
    return (
        <>
            <h3>{post.title}</h3>
            <div>{post.content}
            {/* <p>Posted By: {post.user.name}</p> */}
            </div>
           {/*  <div>
            {commentComponents}
            </div> */}

            <div> 
                <label></label>
                <textarea>Make a new Comment</textarea>
                <button type='submit'>Submit</button>
            </div>
            
        </>
    )
    
    
} 
//show title
// show content
//show name of user
// show comments (if no comment: display no comments yet)
// delete button for each comment (only shows for comments of that specific user)
// edit comment for each comment (only shows for comments of that specific user)
// area text that displays only when edit button is clicked
// area text to make a new comment (if user is not logged in: take user to login page)


 