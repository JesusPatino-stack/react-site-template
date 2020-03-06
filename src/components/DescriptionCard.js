import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import uuid from 'uuid';

export default class DescriptionCard extends Component {
    state = {
        description: [
            {
            id: uuid(),
            text: "Network intrusion detection is a critical component of network defense.Through effective network intrusion detection, malicious activities and policy violations can bemonitored and detected.In this lab, students will learn how to conduct network intrusion detection using two popularopen-source NIDS."
            }
        ]
    }
    render() {
        return (
            <React.Fragment>
                {this.state.description.map(description =>
                <div className="card" key={description.id}>
                    <div className="card-body">
                        <h6 className="card-title text-uppercase text-muted mb-2">
                                Description
                        </h6>
                        <p className="card-text">
                            {description.text}
                        </p>
                    </div>
                </div>)
                }
            </React.Fragment>
        )
    }
}
