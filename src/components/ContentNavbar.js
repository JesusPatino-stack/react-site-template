import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import uuid from 'uuid';

export default class ContentNavbar extends Component {
    state = {
        navLinks:[
            {
                id:uuid(),
                text: "Overview",
                link: "https://sectry.nexuslab.dev/lab-overview.html",
                actibe: "nav-link"
            },
            {
                id:uuid(),
                text: "Instances",
                link: "https://sectry.nexuslab.dev/lab-instances.html",
                actibe: "nav-link active"
            }

        ]
    }
    render() {
        return (
            <React.Fragment>
                <div className="row align-items-center">
                    <div className="col">
                        {/*<!-- Nav -->*/}
                        <ul className="nav nav-tabs nav-overflow header-tabs" >
                            {this.state.navLinks.map(navLinks =>
                                <li className="nav-item" key={navLinks.id}>
                                    <a href={navLinks.link} className={navLinks.actibe}>
                                        {navLinks.text}
                                    </a>
                                </li>)
                            }
                        </ul>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
