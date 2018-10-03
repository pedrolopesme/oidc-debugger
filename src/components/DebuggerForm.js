import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField'
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

class DebuggerForm extends Component {

    constructor(props){
        super(props);
        this.state = {
            form: props.form
        }
    }

    render() {
        return (
            <form>
                <div>
                    <TextField id="auth_uri" label="Authorize URI (required)" className="fluid" />
                </div>
                <div>
                    <TextField id="redirect_uri" label="Redirect URI (required)" className="fluid" />
                </div>
                <div>
                    <TextField id="client_id" label="Client ID (required)" className="fluid" />
                </div>
                <div>
                    <TextField id="scope" label="Scope (required)" className="fluid" />
                </div>
                <div>
                    <TextField id="state" label="State" className="fluid" />
                </div>
                <div>
                    <TextField id="nonce" label="Nonce" className="fluid" />
                </div>

                <FormControl component="fieldset">
                    <FormLabel component="legend"> Response </FormLabel>
                    <FormGroup>
                        <div> Type </div>
                        <FormControlLabel
                            control={<Checkbox value="code" color="primary" />}
                            label="code" />

                        <FormControlLabel
                            control={<Checkbox value="token" color="primary" />}
                            label="token" />

                        <FormControlLabel
                            control={<Checkbox value="id_token" color="primary" />}
                            label="id_token" />
                    </FormGroup>

                    <FormGroup>
                        <div> Mode (required) </div>
                        <FormControlLabel
                            control={<Checkbox value="query" color="primary" />}
                            label="query" />

                        <FormControlLabel
                            control={<Checkbox value="form_post" color="primary" />}
                            label="form_post" />

                        <FormControlLabel
                            control={<Checkbox value="fragment" color="primary" />}
                            label="fragment" />
                    </FormGroup>
                </FormControl>
            </form>)
    }
}

export default DebuggerForm;