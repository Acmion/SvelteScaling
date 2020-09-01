import React from 'react';

import "./LoginControl.css";

function LoginButton(props)
{
    return (
        <button onClick={props.onClick}>
            Login
        </button>
    );
}

function LogoutButton(props)
{
    return (
        <button onClick={props.onClick}>
            Logout
        </button>
    );
}

class LoginControl extends React.Component
{
    constructor(props)
    {
        super(props);
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
        this.state = { isLoggedIn: false };
    }

    handleLoginClick()
    {
        this.setState({ isLoggedIn: true });
    }

    handleLogoutClick()
    {
        this.setState({ isLoggedIn: false });
    }

    render()
    {
        const isLoggedIn = this.state.isLoggedIn;
        let button;
        if (isLoggedIn)
        {
            button = <LogoutButton onClick={this.handleLogoutClick} />;
        }
        else
        {
            button = <LoginButton onClick={this.handleLoginClick} />;
        }

        return (
            <div className="LoginControl">
                <h2>{this.state.isLoggedIn}</h2>
                {button}
            </div>
        );
    }
}

export default LoginControl;