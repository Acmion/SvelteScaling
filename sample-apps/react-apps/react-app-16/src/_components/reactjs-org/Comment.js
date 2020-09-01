import React from 'react';
import UserInfo from "./UserInfo";

import "./Comment.css";

class Comment extends React.Component
{
    constructor(props)
    {
        super(props);

        this.state = { text: "Comment text", date: "2020-31-08"};
    }
    render()
    {
        return (
            <div className="Comment">
                <UserInfo />
                <div className="Comment-text">
                    {this.state.text}
                </div>
                <div className="Comment-date">
                    {this.state.date}
                </div>
            </div>
        );
    }
}

export default Comment;