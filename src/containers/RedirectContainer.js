import * as Oidc from 'oidc-client';
import React, { Component } from 'react';
import Token from '../components/Token';
import JsonComponent from '../components/JsonComponent';

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
        if (this.state.user) {
            const { id_token, access_token, ...auth } = this.state.user;
            return (
                <div className="redirect-container">
                    <div>
                        <JsonComponent name="Auth Info" content={auth} />
                        <Token name="Id Token" token={id_token} />
                    </div>
                </div>)
        }
        return <div></div>;
    }
}

export default RedirectContainer;