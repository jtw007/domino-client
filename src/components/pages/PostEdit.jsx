import { useState } from "react"
import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom'
import { Button, Form, FormControl, FormLabel } from 'react-bootstrap'

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
            <Button className="mt-3" variant="outline-light" type="submit" size="md" style={{ backgroundColor: 'rgb(0, 68, 129)' }} onClick={() => handleShowForm(id)}>Edit Post</Button>
        </>
    )

    const cancelbutton = (
        <>
            <Button className="mt-2" variant="outline-light" type="submit" size="md" style={{ backgroundColor: 'rgb(0, 68, 129)' }} onClick={() => handleShowForm(id)}>Cancel</Button>
        </>
    )

    const editForm = (
        <div className="post-container d-flex justify-content-center">

            <form onSubmit={handleEdit}>
                <div className="form-container" style={{ width: 300 }} >
                    <div className="form-sheet">
                        <Form.Group className="mb-1">
                            <Form.Label></Form.Label>
                            <FormControl
                            type='text'
                            id='title'
                            placeholder='title...'
                            value={edit.title}
                            onChange={e => setEdit({ ...edit, title: e.target.value })}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <FormLabel></FormLabel>
                            <FormControl
                            type='text'
                            id='content'
                            placeholder='content...'
                            value={edit.content}
                            onChange={e => setEdit({ ...edit, content: e.target.value })}
                            />
                        </Form.Group>

                    </div>
                </div>
                <Button variant="outline-light" type="submit" size="md" style={{ backgroundColor: 'rgb(0, 68, 129)' }}>submit</Button>
                <Button onClick={handleDelete} variant="outline-light" type="submit" size="md" style={{ backgroundColor: 'rgb(0, 68, 129)' }}>Delete Post</Button>

            </form>
        </div>
    )

    return (
        <>
            {show && editForm}
            {show ? cancelbutton : editbutton}
        </>
    )
}