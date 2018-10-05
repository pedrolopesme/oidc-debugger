import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField'
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';

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
        return false;
    }

    render = () => {
        return (
            <form onSubmit={this.submit}>
                <div>
                    <TextField name="auth_uri" label="Authorize URI (required)" className="fluid" value={this.state.auth_uri} onChange={this.updateState} />
                </div>
                <div>
                    <TextField name="redirect_uri" label="Redirect URI (required)" className="fluid" value={this.state.redirect_uri} onChange={this.updateState} />
                </div>
                <div>
                    <TextField name="client_id" label="Client ID (required)" className="fluid" value={this.state.client_id} onChange={this.updateState} />
                </div>
                <div>
                    <TextField name="scope" label="Scope (required)" className="fluid" value={this.state.scope} onChange={this.updateState} />
                </div>
                <div>
                    <TextField name="state" label="State" className="fluid" value={this.state.state} onChange={this.updateState} />
                </div>
                <div>
                    <TextField name="nonce" label="Nonce" className="fluid" value={this.state.nonce} onChange={this.updateState} />
                </div>

                <FormControl component="fieldset">
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

                    <Button variant="contained" type="submit">
                        Submit
                    </Button>

                </FormControl>
            </form>)
    }
}

export default DebuggerForm;