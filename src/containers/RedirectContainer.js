import * as Oidc from 'oidc-client';
import React, { Component } from 'react';
import Token from '../components/Token';

class RedirectContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: undefined
        }
    }

    componentDidMount = () => {
        let instance = this;
        new Oidc.UserManager().signinRedirectCallback()
            .then(function (user) {
                instance.setState({ user: user });
            }).catch(function (err) {
                console.error(err);
            });
    }

    render() {
        return (
            <div className="redirect-container">
                {this.state.user && (
                    <div>
                        <Token name="Id Token" token={this.state.user.id_token} />
                        <Token name="Access Token" token={this.state.user.access_token} />
                    </div>
                )}
            </div>)
    }
}

export default RedirectContainer;