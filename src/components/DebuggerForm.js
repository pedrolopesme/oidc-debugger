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

    constructor(props){
        super(props);
        this.state = {
            ...props.form
        }
    }

    updateState = (evnt) => {
        let target = evnt.target.name;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        console.log(evnt.target, target, value);
        this.setState({ [target]: value });
    }

    submit = (evnt) => {
        evnt.preventDefault();
        evnt.stopPropagation();
        console.log(this.state);
        return false;
    }

    render() {
        return (
            <form onSubmit={this.submit}>
                <div>
                    <TextField name="auth_uri" label="Authorize URI (required)" className="fluid" onChange={this.updateState} />
                </div>
                <div>
                    <TextField name="redirect_uri" label="Redirect URI (required)" className="fluid" onChange={this.updateState} />
                </div>
                <div>
                    <TextField name="client_id" label="Client ID (required)" className="fluid" onChange={this.updateState} />
                </div>
                <div>
                    <TextField name="scope" label="Scope (required)" className="fluid" onChange={this.updateState} />
                </div>
                <div>
                    <TextField name="state" label="State" className="fluid" onChange={this.updateState}/>
                </div>
                <div>
                    <TextField name="nonce" label="Nonce" className="fluid" onChange={this.updateState}/>
                </div>

                <FormControl component="fieldset">
                    <FormLabel component="legend"> Response </FormLabel>
                    <FormGroup>
                        <div> Type </div>
                        <FormControlLabel
                            control={<Checkbox name="reponse_type_code" value="code" color="primary" />}
                            label="code" />

                        <FormControlLabel
                            control={<Checkbox name="reponse_type_token" value="token" color="primary" />}
                            label="token" />

                        <FormControlLabel
                            control={<Checkbox name="reponse_type_idtoken" value="id_token" color="primary" />}
                            label="id_token" />
                    </FormGroup>

                    <RadioGroup>
                        <div> Mode (required) </div>
                        <FormControlLabel
                            control={<Radio name="reponse_mode" value="query" color="primary" onChange={this.updateState} />}
                            label="query" />

                        <FormControlLabel
                            control={<Radio value="reponse_mode" value="form_post" color="primary" onChange={this.updateState} />}
                            label="form_post" />

                        <FormControlLabel
                            control={<Radio value="reponse_mode" value="fragment" color="primary" onChange={this.updateState} />}
                            label="fragment" />
                    </RadioGroup>

                    <Button variant="contained" type="submit">
                        Submit
                    </Button>

                </FormControl>
            </form>)
    }
}

export default DebuggerForm;