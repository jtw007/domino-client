 // Details page
import axios from "axios"
import {useState, useEffect} from 'react'
import { useParams } from "react-router-dom"
import { useNavigate, Navigate } from "react-router-dom"


export default function PostDetails({currentUser}) { 
    const [post, setPost] = useState([])
    // const [comments, setComments] = useState([])
    
    // Daniel ________________________________________
    // const [show, setShow] = useState(false)
    const [edit, setEdit] = useState({
        title: '',
        content: ''
    })

    // _____________________________________________DP

// const [comments, setComments] = useState([])

    const [form, setForm] = useState({
        content: '',
        user: ''
    })

    const [editComment, setEditComment] = useState({
        content: ''
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

    // const handleEditClick = async (commentId) => {
    //     // grabbing the comment by id and 'editing it' with axios
    //     await axios.put(`${process.env.REACT_APP_SERVER_URL}/posts/${id}/comment/${commentId}`, editComment)
    //     // calling fetchPost to 'refresh' the page (refresh might not be the right word but it's what happens in this case)
    //     .then(response => {
    //         fetchPost()
    //     })
    //     .catch(console.warn)
    // }
    // const editCommentForm = (
    //     <div> 
    //       <form onSubmit={handleEditClick}>
    //           <label htmlFor='editComment'>Edit Comment:</label>
    //           <textarea id='editComment' 
    //           placeholder="Edit your Comment" 
    //           value={form.content}  
    //           onChange={e => setForm({ ...form, content: e.target.value, user:currentUser.id})}>
    //           </textarea>
    //           <button type='submit' >Submit</button>
    //           </form>
    //   </div>
    //   )  
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
    const handleEdit = async e => {
        e.preventDefault()
        try {
            setEdit({ ...form, user: currentUser.id })
            await axios.put(`${process.env.REACT_APP_SERVER_URL}/posts/${id}`, edit)
            const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/posts/`)
            console.log(response.data)
        } catch(err) {
            console.warn(err)
        }
    }

    const handleDelete = async () => {
        try {
            await axios.delete(`${process.env.REACT_APP_SERVER_URL}/posts/${id}`)
            navigate('/')
        } catch(err) {
            console.warn(err)
        }
    }
    // _____________________________________________DP

 
    const commentComponents = post.comments?.map((comment, idx) => {
        // ? -> basically some conditional logic like an if else, but here we’re just checking if the post has a property comments
        let ownComment = false
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
        <p>{post.user?.name}</p> </div>
         <div>
             <h3>Comments:</h3>
            {commentComponents}   
        </div>  
       {currentUser && commentForm}
            
            {/* // Daniel ________________________________________ */}
            <div>
                <form onSubmit={handleEdit}>
                    <lable htmlFor='title'>Title:</lable>
                    <input 
                        type='text'
                        id='title'
                        placeholder='title...'
                        value={edit.title}
                        onChange={e => setEdit({ ...edit, title: e.target.value })}
                    />
                    <lable htmlFor='content'>Content:</lable>
                    <input 
                        type='text'
                        id='content'
                        placeholder='content...'
                        value={edit.content}
                        onChange={e => setEdit({ ...edit, content: e.target.value })}
                    />
                    <button type='submit'>
                    Edit
                    </button>
                </form>
                <button onClick={handleDelete}>Delete</button>
            </div>


            

            {/* // _____________________________________________DP */}

    </>
    )
    
} 
//show title ✅
// show content ✅
//show name of user ✅
// show comments (if no comment: display no comments yet) ✅
// delete button for each comment (only shows for comments of that specific user) ✅
// edit comment for each comment (only shows for comments of that specific user) ✅
// area text that displays only when edit button is clicked
// area text to make a new comment (if user is not logged in: take user to login page) ✅
