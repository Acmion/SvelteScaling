import React from 'react';

import "./App.css";

import Avatar from "./_components/reactjs-org/Avatar";
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
                <h1>react-app-2</h1>
                <Avatar />
                <Welcome />
            </div>
        );
    }
}

export default App;
