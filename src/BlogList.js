import {Link} from 'react-router-dom'
const BlogList = (props) => {
    const blogs = props.blogs
    // const handleDelete = props.handleDelete
    return (
        <div className="blog-list">
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    
                    <Link to={`/blogs/${blog.id}`}>
                        <h1>{blog.title}</h1>
                        <p>Written by {blog.author}</p>
                    </Link>
                    {/* <button onClick={() => handleDelete(blog.id)}>Delete</button> */}
                </div>
            ))}
        </div>
    );
}

export default BlogList;