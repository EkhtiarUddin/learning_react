import { useState } from 'react';

const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: 'Starting website', body: 'lorem ipsum...', author: 'rocky', id:1}, 
        
        { title: 'website with react', body: 'lorem ipsum...', author: 'lucky', id:2},
        
        { title: 'web dev tips', body: 'lorem ipsum...', author: 'dunky', id:3},  
    ]);
    return ( 
        <div className="home">
            {blogs.map((blog)=> (
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2> 
                    <p>Written By {blog.author}</p>
                </div>
            ))}
            </div>
    );
}

export default Home;