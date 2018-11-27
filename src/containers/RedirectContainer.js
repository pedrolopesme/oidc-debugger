import React, { Component } from 'react'
import * as Oidc from 'oidc-client';
import IdToken from '../components/IdToken';
import RefreshToken from '../components/RefreshToken';
import AccessToken from '../components/AccessToken';
import ReactJson from 'react-json-view';

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
                        <h3> User Data </h3>
                        <div>
                            <ReactJson src={this.state.user} />
                        </div>
                    </div>
                )}
            </div>)
    }
}

export default RedirectContainer;