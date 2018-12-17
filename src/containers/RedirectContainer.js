import React, { Component } from 'react'
import * as Oidc from 'oidc-client';
import IdToken from '../components/IdToken';
import RefreshToken from '../components/RefreshToken';
import AccessToken from '../components/AccessToken';
import ReactJson from 'react-json-view';
import SplitPane from 'react-split-pane';

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
                        <IdToken token={this.state.user.id_token} />
                    </div>
                )}
                
                {/* {this.state.user && ( 
                    // <SplitPane 
                    //     split="vertical" 
                    //     minSize={200} 
                    //     defaultSize={ parseInt(localStorage.getItem('splitPos'), 10) || 250 }
                    //     onChange={ size => localStorage.setItem('splitPos', size) }>
                    //     <div className="sidebar">
                    //         Actions
                    //     </div>
                    //     <div className="content">
                    //         <div className="react-json">
                    //             <ReactJson src={this.state.user} />
                    //         </div>
                    //     </div>
                    // </SplitPane>
                // )}
                */}
            </div>)
    }
}

export default RedirectContainer;