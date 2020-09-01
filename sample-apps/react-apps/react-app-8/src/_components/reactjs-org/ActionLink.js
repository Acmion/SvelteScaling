import React from 'react';

import "./ActionLink.css";

class ActionLink extends React.Component
{
    constructor(props)
    {
        super(props);
    }

    handleClick(e)
    {
        e.preventDefault();
        console.log('The link was clicked.');
    }

    render()
    {
        return (
            <a className="ActionLink" href="#" onClick={this.handleClick}>
                Click me
            </a>
        );
    }
}

export default ActionLink;