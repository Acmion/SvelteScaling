import React from 'react';

import "./App.css";

import Avatar from "./_components/reactjs-org/Avatar";
import Comment from "./_components/reactjs-org/Comment";
import UserInfo from "./_components/reactjs-org/UserInfo";
import Welcome from "./_components/reactjs-org/Welcome";
import Clock from "./_components/reactjs-org/Clock";

import ActionLink from "./_components/reactjs-org/ActionLink";
import LoginControl from "./_components/reactjs-org/LoginControl";
import Mailbox from "./_components/reactjs-org/Mailbox";

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
                <h1>react-app-8</h1>
                <Avatar />
                <Comment />
                <UserInfo />
                <Welcome />
                <Clock />
                
                <ActionLink />
                <LoginControl />
                <Mailbox />
            </div>
        );
    }
}

export default App;
