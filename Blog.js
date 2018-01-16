import React, { Component } from 'react';
import axios from 'axios';
import Post from './Post';
import FullPost from './FullPost';
import NewPost from './NewPost';
import './Blog.css';

class Blog extends Component {
    constructor(){
        super();
        this.state = {
            posts: []
        }
    }
       
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                const posts = response.data.slice(0,4);
                console.log(posts);
                const updatedPosts = posts.map(post => {
                    return {
                        ...post,
                        author: 'Max',
                        
                        
                    }    
                    
                });
                this.setState({posts:updatedPosts});
            });
    }
    
    
        
    
    render () {
        const posts = this.state.posts.map(post =>{
            return <Post 
                key={post.id}
                title={post.title}
                author={post.author}/>});
        
            
        return (
            <div>
                <section className="Posts">
                    {posts}
                </section>
                <section>
                    <FullPost />
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;