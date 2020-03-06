import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import uuid from 'uuid';

export default class OverviewHeader extends Component {
    state = {
        header: [
            {
                id: uuid(),
                avatarImgSrc: "Lab%20Overview%20-%20Android%20Malware%20Lab%20-%20Sectry_files/labs_mobile.jpg",
                preTitle: "CPSC1234 Software Security",
                title: "Android Malware Lab",
                buttonText: "Edit Lab"
            }
        ]
    }
    render() {
        return (
            <React.Fragment>
                <div className="header">
                {this.state.header.map(header =>

                    <div className="header-body" key={header.id}>
                        <div className="row align-items-center">
                            <div className="col-auto">

                            {/*<!-- Avatar -->*/}
                            <div className="avatar avatar-lg avatar-4by3">
                                <img src={header.avatarImgSrc} alt="..." className="avatar-img rounded"/>
                            </div>

                            </div>
                            <div className="col ml-n3 ml-md-n2">

                            {/*<!-- Pretitle -->*/}
                            <h6 className="header-pretitle">
                                <a href="https://sectry.nexuslab.dev/course-overview.html">{header.preTitle}</a>
                            </h6>

                            {/*<!-- Title -->*/}
                            <h1 className="header-title">
                                {header.title}
                            </h1>

                            </div>
                            <div className="col-12 col-md-auto mt-3 mt-md-0">
                            <a href="https://sectry.nexuslab.dev/lab-edit.html" className="btn btn-outline-secondary btn-block">{header.buttonText}</a>
                            </div>
                        </div> {/*<!-- / .row -->*/}

                </div>)
     } {/*<!-- / .header -->*/}
                </div>
            </React.Fragment>
        )
    }
}