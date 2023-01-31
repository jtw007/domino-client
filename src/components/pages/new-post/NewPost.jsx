import axios from "axios"
import { useState } from 'react'
import { useNavigate, Navigate } from "react-router-dom"
import jwt_decode from 'jwt-decode'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'

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
        <div className="post-container d-flex justify-content-center" >

            <form onSubmit={handleSubmit}>
                <div className="form-container" style={{width: 300,}}>
                    <div className="form-sheet">
                    <p className="new-post fs-2">Create a Post</p>
                  
                        <Form.Group className="mb-1">
                            <Form.Label></Form.Label>
                            <Form.Control 
                            type="text" 
                            id="title"
                            placeholder="Title" 
                            value={form.title}
                            onChange={e => setForm({ ...form, title: e.target.value})}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label></Form.Label>
                            <Form.Control 
                            as="textarea" rows={5} 
                            type='text'
                            id='content'
                            placeholder="What's on your mind?"
                            value={form.content}
                            onChange={e => setForm({ ...form, content: e.target.value})}
                            />
                        </Form.Group>

                        {/* <p className="new-post">Create a Post</p> */}
                        {/* <label htmlFor="title"></label>
                            <input 
                                type='text'
                                id='title'
                                placeholder="Title"
                                value={form.title}
                                onChange={e => setForm({ ...form, title: e.target.value})}
                            />

                        <label htmlFor="content"></label>
                            <input 
                                type='text'
                                id='content'
                                placeholder="What's on your mind?"
                                value={form.content}
                                onChange={e => setForm({ ...form, content: e.target.value})}
                            /> */}

                    </div> 

                <Button variant="outline-info" type="submit" size="lg">Post</Button>
                </div>
                    

            </form>

        </div>
    )
}