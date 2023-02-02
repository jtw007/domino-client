 // Details page
import axios from "axios"
import {useState, useEffect} from 'react'
import { useParams } from "react-router-dom"
import { useNavigate} from "react-router-dom"
import EditPost from "./PostEdit"
import { Card, Button } from 'react-bootstrap'
import Form from 'react-bootstrap/Form';


export default function PostDetails({currentUser}) { 
    const [post, setPost] = useState([])

    const [form, setForm] = useState({
        content: '',
        user: '',
        name: ''
    })
    const {id} = useParams()
    const fetchPost = async () =>{
        //Grabbing the post by the id
        try {
            // setting url
            const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/posts/${id}`)
            setPost(response.data)
        } catch (err) {
            console.warn(err)
        }
    }
    
    useEffect(() => {
        fetchPost()
    }, [])
  

    const handleSubmit = (e) => {
        e.preventDefault()
        setForm({ ...form, user: currentUser.id})
        //creating new comment
        axios.post(`${process.env.REACT_APP_SERVER_URL}/posts/${id}/comments`, form)
            .then(response => {
                //putting content from text are in the db and rendering on the page
                setForm({...form, content:''})
                //restarting the page with the new comment
                fetchPost()
            })
            .catch(console.warn) 
        
    }

    const handleDeleteClick = async (commentId) => {
        // grabbing the post by comment id and deleting it through axios
        await axios.delete(`${process.env.REACT_APP_SERVER_URL}/posts/${id}/comment/${commentId}`)
        // calling fetchPost to refresh the page (without the deleted comment)
        .then(response => {
            fetchPost()
         })
            
       .catch(console.warn)
    }

    const commentForm = (
        // calls handleSubmit function every time the user clicks on the submit button
        <form onSubmit={handleSubmit} htmlFor='comment'>
        <div> 
            {/* text area for creating new comment */}
            <label htmlFor="comment"></label>
            <Form.Control className="w-25 mx-auto mt-2" as="textarea" id='comment' 
            placeholder="Make a new Comment" 
            value={form.content}  
            onChange={e => setForm({ ...form, content: e.target.value, user:currentUser.id, name:currentUser.name})}></Form.Control>
            <Button  className="mt-2"variant="outline-light" type="submit" size="md" style={{ backgroundColor: 'rgb(0, 68, 129)' }}>Submit</Button>
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
                 {/* // putting my delete button in a variable so I can call on it if current user is the same as the one who wrote the comment */}
                <div> 
                    {/* everytime the delete button is clicked the handleDelereClick function is called */}
                    <Button variant="outline-light" size="sm" style={{ backgroundColor: 'rgb(0, 68, 129)', margin:'10px' }} onClick={() => handleDeleteClick(comment._id)}>Delete</Button>
                </div>
                
            </> 
        )
        
        return (
            <div key={`comment-${idx}`} style={{display:"flex", justifyContent:'center'}}>
                {/* grabbing user name and content from db */}
                <div style={{marginTop:'10px'}}>{comment.name} says: {comment.content}</div>
                {/* if the logged in user is the same as the one who wrote the comment the delete button will display */}
                {currentUser?.id === comment.user ? buttons : ''}
            </div>
        )
    })
    return (
        <>
        <div>
        <Card className="w-75 mx-auto mt-4">
					<Card.Header><strong><h3>{post.title}</h3></strong></Card.Header>
        <Card.Body>

            
                {/* if user is logged in and posted display his name on the post */}
                By: {post.user?.name} 
                <div>{post.content}</div>
                <div>
                {/* // Daniel ________________________________________ */}
                {currentUser?.id === post.user?._id && showEdit}    
                </div>
                {/* // _____________________________________________DP */}
                <Card.Header><strong><h3>Comments:</h3></strong></Card.Header>
			
            {commentComponents}
		</Card.Body>			
        </Card>
        
        </div>
        {/* short cut for (if user is logged in call commentForm(text area to make new comment)) */}
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
