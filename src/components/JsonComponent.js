import Paper from '@material-ui/core/Paper';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import React, { Component } from 'react';
import ReactJson from 'react-json-view';

class JsonComponent extends Component {
    state = {
        value: 0,
    };

    constructor(props) {
        super(props)
        this.name = props.name;
        this.content = props.content;
    }

    handleChange = (event, value) => {
        this.setState({ value });
    };


    render = () => {
        const { value } = this.state;

        return <div>
            <h3>{this.name}</h3>
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
                    {value === 0 && (<div>  <ReactJson src={this.content} />  </div>)}
                    {value === 1 && (<div> {JSON.stringify(this.content)} </div>)}
                </div>
            </Paper>
        </div>
    }
}

export default JsonComponent;