import { useState } from 'react';
import BlogList from './BlogList';

const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: 'Starting website', body: 'lorem ipsum...', author: 'rocky', id:1}, 
        
        { title: 'website with react', body: 'lorem ipsum...', author: 'lucky', id:2},
        
        { title: 'web dev tips', body: 'lorem ipsum...', author: 'rocky', id:3},  
    ]);
    return ( 
        <div className="home">
            <BlogList blogs={blogs} title="All Blogs" />
            <BlogList blogs={blogs.filter((blog)=>blog.author ==="rocky")} title="Rocky's Blogs" />
            </div>
    );
}

export default Home;