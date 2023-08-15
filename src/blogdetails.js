import { useParams } from "react-router-dom";
import useFetch from "./usefetch";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const BlogDetails=({Blogs})=>{
    const { id } = useParams();
    const {data: blog, pending, error}= useFetch('http://localhost:8000/blogs/'+id)
    const history =useHistory();

    const handleDelete=()=>{
        fetch(('http://localhost:8000/blogs/'+ blog.id),{
            method: 'DELETE',
        }).then((e)=>{
            history.push('/')
        })
        
    }
    return(
        <div className="blog-details">
            {pending && <h2>Loading...</h2>}
            {error && <div>{error}</div>}
            {blog && (
                <article>
                    <h1>{blog.title}</h1>
                    <h3>Written by: {blog.author}</h3> 
                    <p>{blog.body}</p>
                    <div className="create">
                        <button onClick={handleDelete}>
                            Delete
                        </button>
                    </div>
                    
                </article>
            )}
        </div>

    );
}
export default BlogDetails;