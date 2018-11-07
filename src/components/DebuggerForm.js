import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import TextField from '@material-ui/core/TextField';
import React, { Component } from 'react';
import OIDC from '../utils/OIDC';
import { connect } from 'react-redux';

class DebuggerForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            authority: "",
            redirect_uri: "",
            client_id: "",
            post_logout_redirect_uri: "",
            scope: "",
            state: "",
            nonce: "",
            response_type: "",
            response_mode: "",
            filterProtocolClaims: true,
            loadUserInfo: true
        }
    }

    updateState = (evnt) => {
        let target = evnt.target.name;
        let value = evnt.target.type === 'checkbox' ? evnt.target.checked : evnt.target.value;
        this.setState({ [target]: value });
    }

    submit = (evnt) => {
        evnt.preventDefault();
        evnt.stopPropagation();
        new OIDC().connect(this.state);
        return false;
    }

    componentWillReceiveProps = (props) => {
        this.setState({ ...props.connection });
    }

    render = () => {
        return (
            <form onSubmit={this.submit}>
                <h1> Test Connection </h1>
                <div>
                    <TextField name="authority" label="Authorize URI (required)" className="fluid" value={this.state.authority} onChange={this.updateState} />
                </div>
                <div>
                    <TextField name="redirect_uri" label="Redirect URI (required)" className="fluid" value={this.state.redirect_uri} onChange={this.updateState} />
                </div>
                <div>
                    <TextField name="client_id" label="Client ID (required)" className="fluid" value={this.state.client_id} onChange={this.updateState} />
                </div>
                <div>
                    <TextField name="post_logout_redirect_uri" label="Post Logout Redirect URI" className="fluid" value={this.state.post_logout_redirect_uri} onChange={this.updateState} />
                </div>
                <div>
                    <TextField name="state" label="State" className="fluid" value={this.state.state} onChange={this.updateState} />
                </div>
                <div>
                    <TextField name="scope" label="Scope (required)" className="fluid" value={this.state.scope} onChange={this.updateState} />
                </div>
                <div>
                    <TextField name="response_type" label="Response Type" className="fluid" value={this.state.response_type} onChange={this.updateState} />
                </div>

                <FormControlLabel
                    control={<Checkbox name="filterProtocolClaims" value="true" color="primary" checked={this.state.filterProtocolClaims} onChange={this.updateState} />}
                    label="Filter Protocol Claims" />

                <FormControlLabel
                    control={<Checkbox name="loadUserInfo" value="true" color="primary" checked={this.state.loadUserInfo} onChange={this.updateState} />}
                    label="Load User Info" />

                <div className="alignRight">
                    <Button variant="extendedFab" type="submit" color="secondary">
                        <div className="submit"> Test </div>
                        <i className="material-icons"> send</i>
                    </Button>
                </div>
            </form>)
    }
}

const mapStateToProps = state => ({
    connection: state.connection
});

const mapDispatchToProps = {
};

const ConnectedDebuggerForm = connect(
    mapStateToProps,
    mapDispatchToProps
)(DebuggerForm);

export default ConnectedDebuggerForm;