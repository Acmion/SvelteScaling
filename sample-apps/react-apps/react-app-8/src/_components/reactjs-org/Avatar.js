import React from 'react';

import "./Avatar.css";

class Avatar extends React.Component
{
    constructor(props)
    {
        super(props);
    }
    render()
    {
        return (
            <img className="Avatar"
                src="https://example.com"
                alt="username"
            />
        );
    }
}

export default Avatar;