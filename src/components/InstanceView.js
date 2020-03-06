import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import InstanceDeck from './InstanceDeck';


export default class InstanceView extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="row">
                    <InstanceDeck/>
                </div>
            </React.Fragment>
        )
    }
}
