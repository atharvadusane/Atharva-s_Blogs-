import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Bloglist = ({ Blogs, title }) => {
    // const Bloglist=(props)=>{
    // const Blogs= props.Blogs;
    // const title=props.title;

    return (
        <div className="blog-list">
            <div className="title">
                <h2>{title}</h2>
            </div>
            {
                Blogs.map((blog) => (
                    <div className="blog-preview" key={blog.id}>
                        <Link to={`/blogs/${blog.id}`}>
                            <h1>{blog.title}</h1>
                            <p>Written by : {blog.author}</p>
                            {/* <button onClick={()=>handleDelete(blog.id)}>
                                    Delete
                                </button> */}
                        </Link>
                    </div>
                ))
            }

        </div>
    );
};

export default Bloglist

