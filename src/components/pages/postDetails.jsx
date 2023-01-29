// Details page

export default function postDetails(props) {
    const [comment, setComments] = useState([]) // this seems wrong

    useEffect(() => {
        const fetchPost = async () =>{
            try {
                const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/posts/${_id}`)
                setPost(response.data)
            } catch (err) {
                console.warn(err)
            }
        }
        fetchPost()
    }, [])

    const commentComponents = comment.map((comment, idx) => {
		return (
			<div key={`comment-${idx}`}>
				<p>By: {comment.user.name}</p>
                <div>{comment.content}</div>
                <button>Delete</button>
                <button>Edit</button>
			</div>
		)
	})
    return (
        <>
            <h3>{props.post.title}</h3>
            <div>{props.post.content}
            <p>Posted By: {props.post.user.name}</p>
            </div>
            
        </>
    )
}
//show title
// show content
//show name of user
// show comments (if no comment: display no comments yet)
// delete button for each comment (only shows for comments of that specific user)
// edit comment for each comment (only shows for comments of that specific user)
// area text that displays only when edit button is clicked
// area text to make a new comment (if user is not logged in: take user to login page)


