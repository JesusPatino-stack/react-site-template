import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import uuid from 'uuid';

export default class MaterialsDeck extends Component {
    state = {
        materials: [
            {
                id: uuid(),
                avatarImgSrc: "Lab%20Overview%20-%20Android%20Malware%20Lab%20-%20Sectry_files/carbon.png",
                title: "Lab Screencap",
                text: "23.5mb MOV",
                uploader: "Dianna Smiley",
                dateTime: "2018-01-03",
                timeText: "Jan 3, 2018",
                downloadButtonHref:  "#"
            },
            {
                id: uuid(),
                avatarImgSrc: "Lab%20Overview%20-%20Android%20Malware%20Lab%20-%20Sectry_files/carbon.png",
                title: "Database migration (compressed)",
                text: "5.9mb ZIP",
                uploader: "Dianna Smiley",
                dateTime: "2018-01-03",
                timeText: "Jan 3, 2018",
                downloadButtonLink:  "#"
            },
            {
                id: uuid(),
                avatarImgSrc: "Lab%20Overview%20-%20Android%20Malware%20Lab%20-%20Sectry_files/carbon.png",
                title: "Command cheatsheet",
                text: "750kb JPG",
                uploader: "Dianna Smiley",
                dateTime: "2018-01-03",
                timeText: "Jan 3, 2018",
                downloadButtonLink:  "#"
            }

        ]
    }
    render() {
        return (
            <React.Fragment>
                <div className="card">
                    <div className="card-body">
                        <h6 className="card-title text-uppercase text-muted mb-2">
                            Materials
                        </h6>
                        <div>
                            <ul className="list-group list-group-lg list-group-flush list mb-n4">
                                {this.state.materials.map(materials =>
                                    <li className="list-group-item px-0" key={materials.id}>
                
                                        <div className="row align-items-center">
                                        <div className="col-auto">
                
                                            {/*<!-- Avatar -->*/}
                                            <a href="#!" className="avatar avatar-lg">
                                            <img src={materials.avatarImgSrc} alt="..." className="avatar-img rounded"/>
                                            </a>
                
                                        </div>
                                        <div className="col ml-n2">
                
                                            {/*<!-- Title -->*/}
                                            <h4 className="card-title mb-1 name">
                                            <a href="#!">{materials.title}</a>
                                            </h4>
                
                                            {/*<!-- Text -->*/}
                                            <p className="card-text small text-muted mb-1">
                                            {materials.text}
                                            </p>
                
                                            {/*<!-- Time -->*/}
                                            <p className="card-text small text-muted">
                                            Uploaded by {materials.uploader} on <time dateTime={materials.dateTime}>{materials.dateText}</time>
                                            </p>
                
                                        </div>
                                        <div className="col-auto">
                
                                            {/*<!-- Button -->*/}
                                            <a href={materials.downloadButtonHref} className="btn btn-sm btn-white d-none d-md-inline-block">
                                            Download
                                            </a>
                
                                        </div>
                                        </div> {/*<!-- / .row -->*/}
                                    </li>)
                                }
                            </ul>
                        </div>
                    </div>
                </div>
                    
            </React.Fragment>
        )
    }
}
