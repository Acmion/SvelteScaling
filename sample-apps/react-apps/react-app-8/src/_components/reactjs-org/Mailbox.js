import React from 'react';

import "./Mailbox.css";

class Mailbox extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = { unreadMessages: 4 };
    }

    render()
    {
        return (
            <div className="Mailbox">
                <h1>Hello!</h1>
                {this.state.unreadMessages > 0 &&
                    <h2>
                        You have {this.state.unreadMessages} unread messages.
                    </h2>
                }
            </div>
        );
    }
}

export default Mailbox;