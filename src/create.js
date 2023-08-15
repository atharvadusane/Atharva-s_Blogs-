import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Create = () => {

    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [author, setAuthor] = useState('')
    const [pending, setPending ]=useState(false)
    const history=useHistory()

    const handleSubmit=(e)=>{
        e.preventDefault();
        const blog= {title, body, author}
        setPending(true)
        fetch('http://localhost:8000/blogs',{
            // this implies the get or post request method
            method: 'POST',
            // this implies the type of content being passed 
            headers: {"Content-Type":"application/json"},
            // this converts the blog object in to JSON string and then POST's to db.json
            body: JSON.stringify(blog)
        }).then((e)=>{
            setPending(false)
            // acts in substitute of the forward and backward pages of the browser -1 -> ine page backward.. and vice versa 
            // history.go(-1)
            // history.go(1)

            // this one very much explains itself :)
            history.push('/')
        })

    }
    return (
        <div className="create">
            <h1>
                Add a new Blog
            </h1>
            <form onSubmit={handleSubmit}>
                <label>Blog Title  : </label>
                <input
                    type="text"
                    required
                    value={title}
                    onChange={(e) => { setTitle(e.target.value) }}
                />
                <label>Blog content  : </label>
                <textarea
                    required
                    value={body}
                    onChange={(e) => { setBody(e.target.value) }}
                ></textarea>
                <label>Blog Author  :</label>
                <select value={author} onChange={(e) => { setAuthor(e.target.value) }}>
                    <option value="atharva">atharva</option>
                    <option value="dusane">dusane</option>
                </select>
                {!pending && <button>Add Blog</button>}
                {pending && <button disabled>Adding!...</button>}
            </form>
        </div>
    );
};

export default Create;
