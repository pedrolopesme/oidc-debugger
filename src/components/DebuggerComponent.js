import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import DebuggerForm from './DebuggerForm'

const styles = theme => ({
    paper: {
        padding: theme.spacing.unit * 2,
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
});

class DebuggerComponent extends Component {
    render() {
        const { classes } = this.props;
        return (<div className="debuggerComponent">
            <Grid container spacing={24}>
                <Grid item xs={9}>
                    <Paper className={classes.paper}>
                        <DebuggerForm />
                    </Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper className={classes.paper}>something else</Paper>
                </Grid>
            </Grid>
        </div>)
    }
}

DebuggerComponent.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DebuggerComponent);