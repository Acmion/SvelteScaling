import React from 'react';
import "./Welcome.css";

class Welcome extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = { name: "Some Name" };
    }
    render()
    {
        return <h1 className="Welcome">Hello, {this.state.name}</h1>;
    }
}

export default Welcome;