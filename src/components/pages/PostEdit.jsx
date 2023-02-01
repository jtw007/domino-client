import { useState } from "react"
import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom'

export default function EditPost({currentUser, post, fetchPost}) {
    const [edit, setEdit] = useState({
        title: post.title,
        content: post.content
    })
    const [show, setShow] = useState(false)

    const handleShowForm = () => setShow(!show)
    const navigate = useNavigate()
    const {id} = useParams()
    


    const handleEdit = async e => {
        e.preventDefault()
        try {
            const formCopy = { ...edit, user: currentUser.id }
            await axios.put(`${process.env.REACT_APP_SERVER_URL}/posts/${id}`, formCopy)
            fetchPost()
        } catch(err) {
            console.warn(err)
        }
    }

    const handleDelete = async e => {
        e.preventDefault()
        try {
            await axios.delete(`${process.env.REACT_APP_SERVER_URL}/posts/${id}`)
            navigate('/')
        } catch(err) {
            console.warn(err)
        }
    }

    const editbutton = (
        <>
            <button onClick={() => handleShowForm(id)}>Edit Post</button>
        </>
    )

    const cancelbutton = (
        <>
            <button onClick={() => handleShowForm(id)}>Cancel</button>
        </>
    )

    const editForm = (
        <div>
            <form onSubmit={handleEdit}>
                <label htmlFor='title'>Title:</label>
                <input 
                    type='text'
                    id='title'
                    placeholder='title...'
                    value={edit.title}
                    onChange={e => setEdit({ ...edit, title: e.target.value })}
                />
                <label htmlFor='content'>Content:</label>
                <input 
                    type='text'
                    id='content'
                    placeholder='content...'
                    value={edit.content}
                    onChange={e => setEdit({ ...edit, content: e.target.value })}
                />
                <button type='submit'>Submit</button>
                <button onClick={handleDelete}>Delete Post</button>
            </form>
        </div>
    )

    return (
        <>
            {show ? cancelbutton : editbutton}
            {show && editForm}
        </>
    )
}