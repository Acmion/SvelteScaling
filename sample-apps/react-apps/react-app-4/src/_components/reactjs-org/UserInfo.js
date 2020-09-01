import React from 'react';
import Avatar from "./Avatar";

import "./UserInfo.css";

class UserInfo extends React.Component
{
    constructor(props)
    {
        super(props);

        this.state = { user: { name: "some user name" } };
    }
    render()
    {
        return (
            <div className="UserInfo">
                <Avatar user={this.state.user} />
                <div className="UserInfo-name">
                    {this.state.user.name}
                </div>
            </div>
        );
    }
}

export default UserInfo;