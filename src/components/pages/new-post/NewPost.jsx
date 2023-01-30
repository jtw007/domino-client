import axios from "axios"
import { useState } from 'react'
import { useNavigate, Navigate } from "react-router-dom"
import jwt_decode from 'jwt-decode'

export default function NewPost(){
    //state that holds the value the user has typed
    const [form, setForm] = useState({
        //initialize all values as empty strings because this is a new post
        title: '',
        content: '',
        user: ''
    })
    // console.log(process.env.REACT_APP_SERVER_URL)
    
    //invoke useNavigate hook to get a navigate function to use
    const navigate = useNavigate()
    //localStorage = web storage object that allows JS sites and apps to keep key-value pairs in web browser with no expiration date; enables developers to store and retrieve data in the browser - not good practice since data will be lost if the user clears cache
        //in this case, we are storing the jwt 
    const token = localStorage.getItem('jwt')
    if(!token) {
        return <Navigate to="/login" />
    }
    // decodes the token
    const decoded = jwt_decode(token)
    // console.log(decoded.id)
    //submit handler function that posts the form data from state to the backend
    const handleSubmit = (e) => {
        e.preventDefault()
        //adds user ID to form
        setForm({ ...form, user: decoded.id })
        // take form data from the state, post it to the backend with axios
        axios.post(`${process.env.REACT_APP_SERVER_URL}/posts`, form)
            .then(response => {
                console.log(response.data)
                //once backend gets back to use, navigate to the '/' (home route) to see all the posts
                navigate('/')
            })
            .catch(console.warn) //for errors 
    }
    
    return(
        <div className="form-container">

            <form onSubmit={handleSubmit}>
                <div className="form-sheet">

                    <p className="new-post">Create a Post</p>
                    <label htmlFor="title"></label>
                        <input 
                            type='text'
                            id='title'
                            placeholder="Title"
                            name={form.title}
                            onChange={e => setForm({ ...form, title: e.target.value})}
                        />

                    <label htmlFor="content"></label>
                        <input 
                            type='text'
                            id='content'
                            placeholder="What's on your mind?"
                            name={form.content}
                            onChange={e => setForm({ ...form, content: e.target.value})}
                        />

                       

                </div> 

                <button className="post-button" type="submit">Post</button>
            </form>

        </div>
    )
}