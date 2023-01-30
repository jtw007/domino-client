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
        })
        // console.log(process.env.REACT_APP_SERVER_URL)
        
        //invoke useNavigate hook to get a navigate function to use
        const navigate = useNavigate()

        //submit handler function that posts the form data from state to the backend
        const handleSubmit = (e) => {
            e.preventDefault()
            //take form data from the state, post it to the backend with axios
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
                    <label htmlFor="title">Title:</label>
                        <input 
                            type='text'
                            id='title'
                            title={form.title}
                            onChange={e => setForm({ ...form, title: e.target.value})}
                        />

                    <label htmlFor="content">What's on your mind?</label>
                        <input 
                            type='text'
                            id='content'
                            title={form.content}
                            onChange={e => setForm({ ...form, content: e.target.value})}
                        />

                       

                </div> 

                <button className="post-button" type="submit">Post</button>
            </form>

        </div>
    )
}