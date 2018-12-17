import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import jwtDecode from 'jwt-decode';
import ReactJson from 'react-json-view';

class IdToken extends Component {
    state = {
        value: 0,
    };

    constructor(props) {
        super(props)
        this.token = props.token;
        this.parsedToken = jwtDecode(this.token);
    }

    handleChange = (event, value) => {
        this.setState({ value });
    };


    render = () => {
        const { value } = this.state;

        return <div>
            <h3>ID Token</h3>
            <Paper>
                <Tabs
                    value={this.state.value}
                    onChange={this.handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    centered>
                    <Tab label="Parsed" />
                    <Tab label="RAW" />
                </Tabs>

                <div className="tokenViewer">
                    {value === 0 && (<div>  <ReactJson src={this.parsedToken} />  </div>)}
                    {value === 1 && (<div> {this.token} </div>)}
                </div>
            </Paper>
        </div>
    }
}

export default IdToken;