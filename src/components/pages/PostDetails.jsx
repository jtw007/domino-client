 // Details page
import axios from "axios"
import {useState, useEffect} from 'react'
import { useParams } from "react-router-dom"
import { useNavigate, Navigate } from "react-router-dom"
import EditPost from "./PostEdit"


export default function PostDetails({currentUser}) { 
    const [post, setPost] = useState([])

    const [form, setForm] = useState({
        content: '',
        user: ''
    })
    const {id} = useParams()
    const fetchPost = async () =>{
        //Grabbing the post by the id
        try {
            const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/posts/${id}`)
            setPost(response.data)
        } catch (err) {
            console.warn(err)
        }
    }
    
    useEffect(() => {
        fetchPost()
    }, [])
  
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        setForm({ ...form, user: currentUser.id})
        axios.post(`${process.env.REACT_APP_SERVER_URL}/posts/${id}/comments`, form)
            .then(response => {
                navigate(`/post/${id}`)
            })
            .catch(console.warn) 
        setForm({...form, content:''})
        fetchPost()
        console.log(form)
        console.log(currentUser)
    }

    const handleDeleteClick = async (commentId) => {
        // grabbing the post by comment id and deleting it through axios
        await axios.delete(`${process.env.REACT_APP_SERVER_URL}/posts/${id}/comment/${commentId}`)
            
        .then(response => {
            fetchPost()
         })
            
       .catch(console.warn)
    }

    const commentForm = (
        // calls handleSubmit function every time the user clicks on the submit button
        <form onSubmit={handleSubmit} htmlFor='comment'>
        <div> 
            <label htmlFor="comment"></label>
            <textarea id='comment' 
            placeholder="Make a new Comment" 
            value={form.content}  
            onChange={e => setForm({ ...form, content: e.target.value, user:currentUser.id})}></textarea>
            <button type='submit' >Submit</button>
        </div>
        </form>
    )
    
    // Daniel ________________________________________
    const showEdit = <EditPost currentUser={currentUser} post={post} fetchPost={fetchPost} />
    
    // _____________________________________________DP
 
    const commentComponents = post.comments?.map((comment, idx) => {
        // ? -> basically some conditional logic like an if else, but here we’re just checking if the post has a property comments
        const buttons = (
            <>
                <button onClick={() => handleDeleteClick(comment._id)}>Delete</button>
            </> 
        )
        console.log(currentUser?.id, comment)
        
        return (
          <div key={`comment-${idx}`}>
              <div>
                  {comment.content}
                  {currentUser?.id === comment.user ? buttons : ''}
              </div>
          </div>
        )
      })
    return (
        <>
        <h2>{post.title}</h2>
        <div>{post.content}
        {/* // Daniel ________________________________________ */}
        <div>
            {currentUser?.id === post.user?._id && showEdit}    
        </div>
        {/* // _____________________________________________DP */}
        
        <p>{post.user?.name}</p> </div>
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
// delete button for each comment (only shows for comments of that specific user) ✅
// area text to make a new comment (if user is not logged in: take user to login page) ✅
