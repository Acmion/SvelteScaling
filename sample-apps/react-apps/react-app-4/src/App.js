import React from 'react';

import "./App.css";

import Avatar from "./_components/reactjs-org/Avatar";
import Comment from "./_components/reactjs-org/Comment";
import UserInfo from "./_components/reactjs-org/UserInfo";
import Welcome from "./_components/reactjs-org/Welcome";

class App extends React.Component
{
    constructor(props)
    {
        super(props);
    }

    render()
    {
        return (
            <div className="App">
                <h1>react-app-4</h1>
                <Avatar />
                <Comment />
                <UserInfo />
                <Welcome />
            </div>
        );
    }
}

export default App;
