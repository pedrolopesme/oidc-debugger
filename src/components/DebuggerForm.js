import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import TextField from '@material-ui/core/TextField';
import React, { Component } from 'react';
import {OIDC, IntegrationType} from '../utils/OIDC';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import Switch from '@material-ui/core/Switch';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import { makeStyles } from '@material-ui/core/styles';

const RESPONSE_TYPES = { ID_TOKEN: "response_type_id_token", TOKEN : "response_type_token", CODE: "response_type_code" }
const RESPONSE_MODES = { QUERY: "query", FORM : "form", FRAGMENT: "fragment" }

class DebuggerForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            integration_type: "",
            connection: {
                authority: "",
                redirect_uri: "",
                client_id: "",
                post_logout_redirect_uri: "",
                scope: "",
                state: "",
                nonce: "",
                response_type_code: false,
                response_type_token: false,
                response_type_id_token: false,
                response_mode: "form",
                filterProtocolClaims: true,
                loadUserInfo: true
            }
        }
    }

    updateState = (evnt) => {
        const target = evnt.target.name;
        let value = evnt.target.type === 'checkbox' ? evnt.target.checked : evnt.target.value;
        if(value == undefined) value = "";
        const connection = { ...this.state.connection, [target]: value}
        const integrationType = IntegrationType(connection.response_type_code, connection.response_type_token, connection.response_type_id_token);

        this.setState({connection: connection, integration_type: integrationType});
    }

    submit = (evnt) => {
        evnt.preventDefault();
        evnt.stopPropagation();

        new OIDC().connect(this.state.connection);
        return false;
    }

    componentWillReceiveProps = (props) => {
        this.setState({ connection: {...props.connection} });
    }

    styledSwitch = (name, label) => {
        return (
            <FormControlLabel
                control={
                    <Switch
                        checked={this.state.connection[name]}
                        onChange={this.updateState} name={name} />
                } label={label} className={this.state.connection[name] ? "active" : "" } />
        )
    }

    styledRadio = (name, value, label) => {
        return (
                <FormControlLabel value={value} control={
                    <Radio
                        name={name}
                        checked={this.state.connection.response_mode === value}
                        onChange={this.updateState}
                        inputProps={{ 'aria-label': value }}
                        />} label={label} />

        );
    }

    render = () => {
        const connection = this.state.connection;
        return (
            <form id="oidc-form" onSubmit={this.submit}>
                <h1> Test Connection </h1>

                <h4> Credentials: </h4>
                <div className="input">
                    <TextField name="client_id" label="Client ID (required)" className="fluid" value={connection.client_id} onChange={this.updateState} />
                </div>

                <h4> URIs: </h4>
                <div className="input">
                    <TextField name="authority" label="Authorize URI (required)" className="fluid" value={connection.authority} onChange={this.updateState} />
                </div>
                <div className="input">
                    <TextField name="redirect_uri" label="Redirect URI (required)" className="fluid" value={connection.redirect_uri} onChange={this.updateState} />
                </div>
                <div className="input">
                    <TextField name="post_logout_redirect_uri" label="Post Logout Redirect URI" className="fluid" value={connection.post_logout_redirect_uri} onChange={this.updateState} />
                </div>
                <div className="input">
                    <TextField name="state" label="State" className="fluid" value={connection.state} onChange={this.updateState} value=""/>
                </div>
                <div className="input">
                    <TextField name="scope" label="Scope (required)" className="fluid" value={connection.scope} onChange={this.updateState} />
                </div>

                <div className="input grid">
                    <Grid container spacing={8} >
                        <Grid key={1} className="item response_type">  
                            <h4> Response Type (required): </h4>
                            {this.styledSwitch(RESPONSE_TYPES.CODE, "Code")}
                            {this.styledSwitch(RESPONSE_TYPES.ID_TOKEN, "ID Token")}
                            {this.styledSwitch(RESPONSE_TYPES.TOKEN, "Token")}
                        </Grid>
                        <Grid key={2} className="item response_type_description">
                            <div className="first" style={{display: this.state.integration_type === "auth_code" ? "block" : "none" }}> 
                                <span> Authorization Code Flow </span>
                                <p>
                                    The Authorization Code Flow returns an Authorization Code to the Client, 
                                    which can then exchange it for an ID Token and an Access Token directly. 
                                    This provides the benefit of not exposing any tokens to the User Agent and 
                                    possibly other malicious applications with access to the User Agent 
                                    ( <a href="https://openid.net/specs/openid-connect-core-1_0.html#CodeFlowAuth" target="_blank">More</a> ).
                                </p>
                                <p> <b> Ideal for </b> : Applications with backend servers. </p>
                            </div>
                            <div className="second"  style={{display: this.state.integration_type === "implicit" ? "block" : "none" }}> 
                                <span> Implicit Flow </span> 
                                <p> The Access Token and/or ID Token are returned 
                                directly to the Client, which may expose them to the End-User and 
                                applications that have access to the End-User's User Agent. 
                                
                                The Authorization Server does not perform Client Authentication. ( 
                                    <a href="https://openid.net/specs/openid-connect-core-1_0.html#ImplicitFlowAuth" target="_blank">More</a> ).
                                </p>
                                <p> <b> Ideal for </b> : Single Page Applications and Mobile Apps without backend servers. </p>
                            </div>
                            <div className="third"  style={{display: this.state.integration_type === "hybrid" ? "block" : "none" }}>
                            <span> Hibrid Flow </span> 
                                <p> This section describes how to perform authentication using the Hybrid Flow.
                                     When using the Hybrid Flow, some tokens are returned from the Authorization Endpoint and others are returned 
                                     from the Token Endpoint. ] ( 
                                    <a href="https://openid.net/specs/openid-connect-core-1_0.html#HybridFlowAuth" target="_blank">More</a> ).
                                </p>
                                <p> <b> Ideal for </b> : Clients that need a custom Authentication Flow. </p>
                            </div>
                        </Grid>
                    </Grid>
                </div>

                <div className="input grid">
                    <Grid container spacing={8} >
                        <Grid key={1} className="item response_mode">  
                            <h4> Response Mode: </h4>
                            <RadioGroup defaultValue="form" aria-label="Response Mode" name="response_mode" className="responseModeRadios">
                                {this.styledRadio("response_mode", RESPONSE_MODES.FORM, "Form Post")}
                                {this.styledRadio("response_mode", RESPONSE_MODES.FRAGMENT, "Fragment")}
                                {this.styledRadio("response_mode", RESPONSE_MODES.QUERY, "Query")}
                            </RadioGroup>
                        </Grid>
                    </Grid>
                </div>

                <FormControlLabel
                    control={<Checkbox name="filterProtocolClaims" value="true" color="primary" checked={connection.filterProtocolClaims} onChange={this.updateState} />}
                    label="Filter Protocol Claims" />

                <FormControlLabel
                    control={<Checkbox name="loadUserInfo" value="true" color="primary" checked={connection.loadUserInfo} onChange={this.updateState} />}
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