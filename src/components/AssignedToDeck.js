/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import uuid from 'uuid';

export default class AssignedToDeck extends Component {
    state = {
        assignmentInfo: [
            {
                id: uuid(),
                count: "5"
            }
        ],
        individualAssignments: [ 
            {
                id: uuid(),
                cardText: "Ab Hadley",
                avatarImgSrc:  "Lab%20Overview%20-%20Android%20Malware%20Lab%20-%20Sectry_files/avatar-2.jpg",
                instanceLink: "https://sectry.nexuslab.dev/instance-overview.html"
            },
            {
                id: uuid,
                cardText: "Diana Smiley",
                avatarImgSrc:  "Lab%20Overview%20-%20Android%20Malware%20Lab%20-%20Sectry_files/avatar-1.jpg",
                instanceLink: "https://sectry.nexuslab.dev/instance-overview.html"
            }
        ],
        teamAssignments: [
            {
                id: uuid(),
                teamName: "TeamGreen",
                teamMembers: [ 
                    {
                        imgSrc: "Lab%20Overview%20-%20Android%20Malware%20Lab%20-%20Sectry_files/avatar-2.jpg",
                        originalTitle: "Ab Hadley"
                    },
                    {
                        imgSrc: "Lab%20Overview%20-%20Android%20Malware%20Lab%20-%20Sectry_files/avatar-3.jpg",
                        originalTitle: "Adolfo Hess"
                    },
                    {
                        imgSrc: "Lab%20Overview%20-%20Android%20Malware%20Lab%20-%20Sectry_files/avatar-4.jpg",
                        originalTitle: "Miyah Myles"
                    }
                ],
                memberCount: 101,
                instanceLink: "https://sectry.nexuslab.dev/instance-overview.html"
            },
            {
                id: uuid(),
                teamName: "Team Blue",
                teamMembers: [ 
                    {
                        imgSrc: "Lab%20Overview%20-%20Android%20Malware%20Lab%20-%20Sectry_files/avatar-2.jpg",
                        originalTitle: "Ab Hadley"
                    },
                    {
                        imgSrc: "Lab%20Overview%20-%20Android%20Malware%20Lab%20-%20Sectry_files/avatar-3.jpg",
                        originalTitle: "Adolfo Hess"
                    },
                    {
                        imgSrc: "Lab%20Overview%20-%20Android%20Malware%20Lab%20-%20Sectry_files/avatar-4.jpg",
                        originalTitle: "Miyah Myles"
                    }
                    
                ],
                teamMemberCount: 3,
                instanceLink: "https://sectry.nexuslab.dev/instance-overview.html"
            },
            {
                id: uuid(),
                grouping: "team",
                teamName: "Team Green",
                avatarGroup: [ 
                    {
                        imgSrc: "Lab%20Overview%20-%20Android%20Malware%20Lab%20-%20Sectry_files/avatar-2.jpg",
                        originalTitle: "Ab Hadley"
                    },
                    {
                        imgSrc: "Lab%20Overview%20-%20Android%20Malware%20Lab%20-%20Sectry_files/avatar-3.jpg",
                        originalTitle: "Adolfo Hess"
                    }  
                ],
                memberCount: 3,
                instanceLink: "https://sectry.nexuslab.dev/instance-overview.html"
            }
        ]   
    }     
    
    render() {
        return (
            <React.Fragment>
                <div className="card">
                    {this.state.assignmentInfo.map(assignmentInfo =>
                        <div className="card-header" key={assignmentInfo.id}>
                            <div className="row align-items-center">
                                <div className="col">
                                <h4 className="card-header-title d-flex align-items-center">
                                    <span>Assigned to</span>
                                    <span className="badge badge-pill badge-soft-secondary ml-2">{assignmentInfo.count}</span>
                                </h4>
                                </div>
                            </div>
                        </div>)
                    }
                    {/*<!-- Individual Template -->*/}
                    {this.state.individualAssignments.map(individualAssignments =>
                        <div className="row align-items-center px-4 py-3" key={individualAssignments.id}>
                            <div className="col-auto">
                                <a href="#" className="avatar avatar-xs">
                                    <img src={individualAssignments.avatarImgSrc} alt="..." className="avatar-img rounded-circle"/>
                                </a>
                            </div>
                            <div className="col ml-n2">
                                <p className="card-text">{individualAssignments.cardText}</p>
                            </div>
                            <div className="col-auto">

                                <div className="dropdown">
                                    <a href="#!" className="dropdown-ellipses dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="true" data-expanded="false">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-more-vertical"><circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle></svg>
                                    </a>
                                    <div className="dropdown-menu dropdown-menu-right">
                                    <a href={individualAssignments.instanceLink} className="dropdown-item">
                                        View instance
                                    </a>
                                    </div>
                                </div>
                            </div>
                        </div>)
                    }
                    {/* <!-- Team Template --> */}
                    {this.state.teamAssignments.map(teamAssignments =>
                    <div className="row align-items-center px-4 py-3" key={teamAssignments.id}>
                        <div className="col">
                            <p className="card-text">{teamAssignments.teamName}</p>
                        </div>
                        <div className="col-auto">
                            <div className="avatar-group d-none d-md-inline-flex">
                                <a href="#!" className="avatar avatar-xs" data-toggle="tooltip" data-placement="top" title="" data-original-title="Ab Hadley">
                                    <img src="Lab%20Overview%20-%20Android%20Malware%20Lab%20-%20Sectry_files/avatar-2.jpg" className="avatar-img rounded-circle" alt="..."/>
                                </a>
                                <a href="#!" className="avatar avatar-xs" data-toggle="tooltip" data-placement="top" title="" data-original-title="Adolfo Hess">
                                    <img src="Lab%20Overview%20-%20Android%20Malware%20Lab%20-%20Sectry_files/avatar-3.jpg" className="avatar-img rounded-circle" alt="..."/>
                                </a>
                                <div className="avatar avatar-xs">
                                    <span className="avatar-title rounded-circle">+99</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-auto">
                            <div className="dropdown">
                                <a href="#!" className="dropdown-ellipses dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="true" data-expanded="false">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-more-vertical"><circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle></svg>
                                </a>
                                <div className="dropdown-menu dropdown-menu-right">
                                <a href={teamAssignments.instanceLink} className="dropdown-item">
                                    View instance
                                </a>
                                </div>
                            </div>
                        </div>
                    </div>)
                }
                    </div>
            </React.Fragment>
        )
    }
}

/*function individualAssignment(props) {
    return (
    <div className="row align-items-center px-4 py-3">
        <div className="col-auto">
            <a href="#" className="avatar avatar-xs">
                <img src="Lab%20Overview%20-%20Android%20Malware%20Lab%20-%20Sectry_files/avatar-1.jpg" alt="..." className="avatar-img rounded-circle"/>
            </a>
        </div>
        <div className="col ml-n2">
            <p className="card-text">Dianna Smiley</p>
        </div>
        <div className="col-auto">

            <div className="dropdown">
                <a href="#!" className="dropdown-ellipses dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="true" data-expanded="false">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-more-vertical"><circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle></svg>
                </a>
                <div className="dropdown-menu dropdown-menu-right">
                <a href="https://sectry.nexuslab.dev/instance-overview.html" className="dropdown-item">
                    View instance
                </a>
                </div>
            </div>
        </div>
    </div>
    );
}

function groupAssignment(props) {
    return (
        <div className="row align-items-center px-4 py-3">
            <div className="col">
                <p className="card-text">Team Green</p>
            </div>
            <div className="col-auto">
                <div className="avatar-group d-none d-md-inline-flex">
                    <a href="#!" className="avatar avatar-xs" data-toggle="tooltip" data-placement="top" title="" data-original-title="Ab Hadley">
                        <img src="Lab%20Overview%20-%20Android%20Malware%20Lab%20-%20Sectry_files/avatar-2.jpg" className="avatar-img rounded-circle" alt="..."/>
                    </a>
                    <a href="#!" className="avatar avatar-xs" data-toggle="tooltip" data-placement="top" title="" data-original-title="Adolfo Hess">
                        <img src="Lab%20Overview%20-%20Android%20Malware%20Lab%20-%20Sectry_files/avatar-3.jpg" className="avatar-img rounded-circle" alt="..."/>
                    </a>
                    <div className="avatar avatar-xs">
                        <span className="avatar-title rounded-circle">+99</span>
                    </div>
                </div>
            </div>
            <div className="col-auto">
                <div className="dropdown">
                    <a href="#!" className="dropdown-ellipses dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="true" data-expanded="false">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-more-vertical"><circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle></svg>
                    </a>
                    <div className="dropdown-menu dropdown-menu-right">
                    <a href="https://sectry.nexuslab.dev/instance-overview.html" className="dropdown-item">
                        View instance
                    </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
*/
