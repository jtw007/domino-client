import axios from "axios"
import { useState } from 'react'
import { useNavigate } from "react-router-dom"

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


    return(
        <>
        
            <h1>Hello from the new post page</h1>
        </>
    )
}