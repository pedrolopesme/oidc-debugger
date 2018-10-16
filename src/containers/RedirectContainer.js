import React, { Component } from 'react'
import * as Oidc from 'oidc-client';

class RedirectContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: undefined
        }
    }

    componentDidMount= () => {
        let instance = this;
        new Oidc.UserManager().signinRedirectCallback()
        .then(function(user) {
            instance.setState({ user: user });
        }).catch(function(err) {
            console.error(err);
        });
    }

    render() {
        return (
        <div className="redirect-container">
            <h3> User Data </h3>
            <div><pre> {this.state.user && (
                JSON.stringify(this.state.user, null, 2) 
            )}</pre></div>
        </div>)
    }
}

export default RedirectContainer;