import React from 'react';

import Avatar from "./_components/reactjs-org/Avatar";
import Comment from "./_components/reactjs-org/Comment";
import UserInfo from "./_components/reactjs-org/UserInfo";
import Welcome from "./_components/reactjs-org/Welcome";
import Clock from "./_components/reactjs-org/Clock";

class App extends React.Component
{
    constructor(props)
    {
        super(props);
    }

    render()
    {
        return (
            <div>
                <Avatar />
                <Comment />
                <UserInfo />
                <Welcome />
                <Clock />
            </div>
        );
    }
}

export default App;
