import React from 'react';

import "./App.css";

import Avatar from "./_components/reactjs-org/Avatar";

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
                <h1>react-app-1</h1>
                <Avatar />
            </div>
        );
    }
}

export default App;
