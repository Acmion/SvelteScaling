import React from 'react';

import "./Toggle.css";

class Toggle extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = { isToggleOn: true };

        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick()
    {
        this.setState(state => ({
            isToggleOn: !state.isToggleOn
        }));
    }

    render()
    {
        return (
            <button className="Toggle" onClick={this.handleClick}>
                {this.state.isToggleOn ? 'ON' : 'OFF'}
            </button>
        );
    }
}

export default Toggle;