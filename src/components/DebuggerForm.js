import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import TextField from '@material-ui/core/TextField';
import React, { Component } from 'react';
import OIDC from '../utils/OIDC';

class DebuggerForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            ...props.form
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

    render = () => {
        return (
            <form onSubmit={this.submit}>
                <h1> Test Connection </h1>
                <div>
                    {this.state.authority}
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

                <FormControl component="fieldset">
                    {/* 
                    <FormLabel component="legend"> Response </FormLabel>
                    <FormGroup>
                        <div> Type </div>
                        <FormControlLabel
                            control={<Checkbox name="reponse_type_code" value="code" color="primary" checked={this.state.reponse_type_code} onChange={this.updateState} />}
                            label="code" />

                        <FormControlLabel
                            control={<Checkbox name="reponse_type_token" value="token" color="primary" checked={this.state.reponse_type_token} onChange={this.updateState} />}
                            label="token" />

                        <FormControlLabel
                            control={<Checkbox name="reponse_type_idtoken" value="id_token" color="primary" checked={this.state.reponse_type_idtoken} onChange={this.updateState} />}
                            label="id_token" />
                    </FormGroup>

                    <FormControl component="fieldset">
                        <FormLabel component="legend">Mode (required)</FormLabel>
                        <RadioGroup
                            aria-label="Mode"
                            name="reponse_mode"
                            onChange={this.updateState}
                            value={this.state.reponse_mode}>
                            <FormControlLabel control={<Radio />} label="query" value="query" />
                            <FormControlLabel control={<Radio />} label="form_post" value="form_post" />
                            <FormControlLabel control={<Radio />} label="fragment" value="fragment" />
                        </RadioGroup>
                    </FormControl>
                    */}

                    <Button variant="contained" type="submit">
                        Submit
                    </Button>

                </FormControl>
            </form>)
    }
}

export default DebuggerForm;