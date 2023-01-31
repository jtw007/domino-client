 // Details page
import axios from "axios"
import {useState, useEffect} from 'react'
import { useParams } from "react-router-dom"
import { useNavigate, Navigate } from "react-router-dom"
import jwt_decode from 'jwt-decode'

export default function PostDetails() { 
    const [post, setPost] = useState([])
    
    // Daniel ________________________________________
    const [show, setShow] = useState(false)
    const [edit, setEdit] = useState({
        title: '',
        content: ''
    })

    // _____________________________________________DP

// const [comments, setComments] = useState([])
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
    }, [post])
    const [form, setForm] = useState({
        content: '',
        user: ''
    })
    const navigate = useNavigate()
    const token = localStorage.getItem('jwt')
    if(!token) {
        return <Navigate to="/login" />
    }
    const decoded = jwt_decode(token)
    
    const handleSubmit = (e) => {
        e.preventDefault()
        setForm({ ...form, user: decoded.id })
        axios.post(`${process.env.REACT_APP_SERVER_URL}/posts/${id}/comments`, form)
            .then(response => {
                console.log(response.data)
                navigate(`/post/${id}`)
            })
            .catch(console.warn) 
    }

    // Daniel ________________________________________
    const handleEdit = async e => {
        e.preventDefault()
        try {
            await axios.put(`${process.env.REACT_APP_SERVER_URL}/posts/${id}`, edit)
        } catch(err) {
            console.warn(err)
        }
    }

    // _____________________________________________DP


    //   const commentComponents = comments.map((comment, idx) => {
	// 	return (
	// 		<div key={`comment-${idx}`}>
	// 			<p>By: {comment.user.name}</p>
    //             <div>{comment.content}</div>
    //             <button>Delete</button>
    //             <button>Edit</button>
              
                
	// 		</div>
	// 	)
	// })  
    const commentComponents = post.comments?.map((comment, idx) => {
        return (
          <div key={`comment-${idx}`}>
              <p>{comment.content}</p>
          </div>
        )
      })
    return (
        <>
            <h3>{post.title}</h3>
            <div>{post.content}
            {/* <p>{post.user.name}</p> */} </div>
            
            {/* // Daniel ________________________________________ */}
            <div>
                <form onSubmit={handleSubmit}>
                    <lable htmlFor='title'>Title:</lable>
                    <input 
                        type='text'
                        id='title'
                        placeholer='title...'
                        value={form.title}
                        onChange={e => setEdit({ ...form, title: e.target.value })}
                    />
                    <lable htmlFor='content'>Content:</lable>
                    <input 
                        type='text'
                        id='content'
                        placeholer='content...'
                        value={form.content}
                        onChange={e => setEdit({ ...form, content: e.target.value })}
                    />
                </form>
            </div>


            <button
                onClick={() => setShow()}
                >
            Edit
            </button>
            

            {/* // _____________________________________________DP */}

            <div>
                {commentComponents}  
               
            </div>  
            <form onSubmit={handleSubmit} htmlFor='comment'>
            <div> 
                <label htmlFor="comment"></label>
                <textarea id='comment' 
                placeholder="Make a new Comment" 
                value={form.content}  
                onChange={e => setForm({ ...form, content: e.target.value})}></textarea>
                <button type='submit' >Submit</button>
            </div>
            </form>
        
            
        </>
    )
    
    
} 
//show title ✅
// show content ✅
//show name of user ✅
// show comments (if no comment: display no comments yet)
// delete button for each comment (only shows for comments of that specific user)
// edit comment for each comment (only shows for comments of that specific user)
// area text that displays only when edit button is clicked
// area text to make a new comment (if user is not logged in: take user to login page) ✅
