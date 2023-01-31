 // Details page
import axios from "axios"
import {useState, useEffect} from 'react'
import { useParams } from "react-router-dom"
import { useNavigate, Navigate } from "react-router-dom"


export default function PostDetails({currentUser}) { 
    const [post, setPost] = useState([])
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

    // if(!token) {
    //     return <Navigate to="/login" />
    // }
    
    const handleSubmit = (e) => {
        e.preventDefault()
        setForm({ ...form, user: currentUser.id })
        axios.post(`${process.env.REACT_APP_SERVER_URL}/posts/${id}/comments`, form)
            .then(response => {
                navigate(`/post/${id}`)
            })
            .catch(console.warn) 
    }

    const handleDeleteClick = async (commentId) => {
        
        await axios.delete(`${process.env.REACT_APP_SERVER_URL}/posts/${id}/comment/${commentId}`)
            
        .then(response => {
            navigate(`/post/${id}`)
         })
            
       .catch(console.warn)
    }
    const commentForm = (
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
    )
    const commentComponents = post.comments?.map((comment, idx) => {
        //console.log(comment)
        return (
          <div key={`comment-${idx}`}>
              <div>
                  {comment.content}
                  <button onClick={() => handleDeleteClick(comment._id)}>Delete</button>
                  <button>Edit</button>
              </div>
          </div>
        )
      })
    return (
        <>
            <h2>{post.title}</h2>
            <div>{post.content}
            {/* <p>{post.user.name}</p> */} </div>
             <div>
                 <h3>Comments:</h3>
                {commentComponents}  
               
            </div>  
           {currentUser && commentForm}
        
            
        </>
    )
    
    
} 
//show title ✅
// show content ✅
//show name of user ✅
// show comments (if no comment: display no comments yet) ✅
// delete button for each comment (only shows for comments of that specific user)
// edit comment for each comment (only shows for comments of that specific user)
// area text that displays only when edit button is clicked
// area text to make a new comment (if user is not logged in: take user to login page) ✅


 