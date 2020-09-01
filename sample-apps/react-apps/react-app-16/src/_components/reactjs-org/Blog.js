import React from 'react';

import "./Blog.css";

class Blog extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state =
        {
            posts:
            [
                { id: 1, title: 'Hello World', content: 'Welcome to learning React!' },
                { id: 2, title: 'Installation', content: 'You can install React from npm.' }
            ]
        }
    }

    render()
    {
        const sidebar = (
            <ul>
                {this.state.posts.map((post) =>
                    <li key={post.id}>
                        {post.title}
                    </li>
                )}
            </ul>
        );
        const content = this.state.posts.map((post) =>
            <div key={post.id}>
                <h3>{post.title}</h3>
                <p>{post.content}</p>
            </div>
        );
        return (
            <div className="Blog">
                {sidebar}
                <hr />
                {content}
            </div>
        );
    }
}

export default Blog;