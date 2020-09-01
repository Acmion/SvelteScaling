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
import Page from "./_components/reactjs-org/Page";
import Toggle from "./_components/reactjs-org/Toggle";

import NumberList from "./_components/reactjs-org/NumberList";
import Blog from "./_components/reactjs-org/Blog";
import NameForm from "./_components/reactjs-org/NameForm";
import TemperatureInput from "./_components/reactjs-org/TemperatureInput";
import Calculator from "./_components/reactjs-org/Calculator";
import SignUpDialog from "./_components/reactjs-org/SignUpDialog";

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
                <h1>react-app-16</h1>
                <Avatar />
                <Comment />
                <UserInfo />
                <Welcome />
                <Clock />
                
                <ActionLink />
                <LoginControl />
                <Mailbox />
                <Page />
                <Toggle />

                <NumberList />
                <Blog />
                <NameForm />
                <TemperatureInput scale="c" temperature="10" />
                <Calculator />
                <SignUpDialog />
            </div>
        );
    }
}

export default App;
