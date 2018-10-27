import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import DebuggerForm from '../components/DebuggerForm'
import DebuggerSavedConnections from '../components/DebuggerSavedConnections'
import { Connections } from '../configs/Connections'

const styles = theme => ({
    paper: {
        padding: theme.spacing.unit * 2,
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
});

class DebuggerContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeConnection: props.activeConnection,
            activateConnection: props.activateConnection,
            debugger: {
                authority: "",
                redirect_uri: "",
                client_id: "",
                post_logout_redirect_uri: "",
                scope: "",
                state: "",
                nonce: "",
                response_type:"",
                response_mode:"",
                filterProtocolClaims: true,
                loadUserInfo: true
            }
        }
    }

    render() {
        console.log(this.state)
        const { classes } = this.props;
        return (<div className="debuggerComponent">
            <Grid container spacing={24}>
                <Grid item xs={9}>
                    <Paper className={classes.paper}>
                        <DebuggerForm form={this.state.activeConnection} />
                    </Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper className={classes.paper}>
                        <DebuggerSavedConnections connections={Connections} activateConnection={this.state.activateConnection} />
                    </Paper>
                </Grid>
            </Grid>
        </div>)
    }
}

export default withStyles(styles)(DebuggerContainer);