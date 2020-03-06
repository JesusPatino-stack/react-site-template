/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
//import uuid from 'uuid';

export default class TopNavbar extends Component {
    render() {
        return (
            <React.Fragment>
                {/*<!-- NAVIGATION
                ================================================== --> */}
                <nav className="navbar navbar-expand-lg navbar-light" id="topnav">
                    <div className="container">

                    {/*<!-- Toggler -->*/}
                    <button className="navbar-toggler mr-auto" type="button" data-toggle="collapse" data-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    {/*<!-- Brand -->*/}
                    <a className="navbar-brand text-primary mr-auto mr-lg-4 order-lg-0" href="https://sectry.nexuslab.dev/index.html">
                        Sectry
                        {/*<!-- <img src="./assets/img/logo.svg" alt="..." className="navbar-brand-img"/> -->*/}
                    </a>

                    {/*<!-- Form -->*/}
                    <form className="form-inline mr-4 d-none d-lg-flex order-lg-2">
                        <div className="input-group input-group-rounded input-group-merge">

                        {/*<!-- Input -->*/}
                        <input type="search" className="form-control form-control-prepended  dropdown-toggle search" data-toggle="dropdown" placeholder="Search" aria-label="Search"/>
                        <div className="input-group-prepend">
                            <div className="input-group-text">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-search"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                            </div>
                        </div>
                        </div>
                    </form>

                    {/*<!-- User -->*/}
                    <div className="navbar-user order-lg-3">

                        <div className="mr-4 d-none d-lg-flex">

                        {/*<!-- Toggle -->*/}
                        <a href="https://sectry.nexuslab.dev/messages.html" className="navbar-user-link" role="button" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="You have new messages">
                            <span className="icon danger">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-inbox"><polyline points="22 12 16 12 14 15 10 15 8 12 2 12"></polyline><path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path></svg>
                            </span>
                        </a>

                        </div>

                        {/*<!-- Dropdown -->*/}
                        <div className="dropdown">

                        {/*<!-- Toggle -->*/}
                        
                        <a href="#" className="avatar avatar-sm dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <img src="Lab%20Overview%20-%20Android%20Malware%20Lab%20-%20Sectry_files/avatar-1.jpg" alt="..." className="avatar-img rounded-circle"/>
                        </a>

                        {/*<!-- Menu -->*/}
                        <div className="dropdown-menu dropdown-menu-right" style={{'minWidth':'200px'}}>
                            <a href="https://sectry.nexuslab.dev/messages.html" className="dropdown-item d-lg-none">
                            <span className="icon danger align-middle mr-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-inbox"><polyline points="22 12 16 12 14 15 10 15 8 12 2 12"></polyline><path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path></svg>
                            </span>
                            <span className="align-middle">Inbox</span>
                            </a>
                            <a href="https://sectry.nexuslab.dev/settings.html" className="dropdown-item">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-settings align-middle mr-2"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>
                            <span className="align-middle">Settings</span>
                            </a>
                            <hr className="dropdown-divider"/>
                            <h6 className="dropdown-header text-muted">Administrator</h6>
                            <a className="dropdown-item" href="https://sectry.nexuslab.dev/admin-dashboard.html">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-home align-middle mr-2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
                            <span className="align-middle">Dashboard</span>
                            </a>
                            <a className="dropdown-item" href="https://sectry.nexuslab.dev/admin-users.html">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-users align-middle mr-2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                            <span className="align-middle">Users</span>
                            </a>
                            <a className="dropdown-item" href="https://sectry.nexuslab.dev/admin-courses.html">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-book align-middle mr-2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>
                            <span className="align-middle">Courses</span>
                            </a>
                            <a className="dropdown-item" href="https://sectry.nexuslab.dev/admin-labs.html">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-tool align-middle mr-2"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>
                            <span className="align-middle">Labs</span>
                            </a>
                            <a className="dropdown-item" href="https://sectry.nexuslab.dev/admin-clouds.html">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-cloud align-middle mr-2"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path></svg>
                            <span className="align-middle">Clouds</span>
                            </a>
                            <a className="dropdown-item" href="https://sectry.nexuslab.dev/admin-access.html">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-key align-middle mr-2"><path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"></path></svg>
                            <span className="align-middle">Access Control</span>
                            </a>
                            <hr className="dropdown-divider"/>
                            <a href="https://sectry.nexuslab.dev/docs.html" className="dropdown-item">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-file-text align-middle mr-2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg><span className="align-middle">Docs</span>
                            </a>
                            <hr className="dropdown-divider"/>
                            <a href="https://sectry.nexuslab.dev/sign-in.html" className="dropdown-item">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-log-out align-middle mr-2"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg><span className="align-middle">Logout</span>
                            </a>
                        </div>

                        </div>

                    </div>

                    {/*<!-- Collapse -->*/}
                    <div className="collapse navbar-collapse mr-auto order-md-12 order-lg-1" id="navbar">

                        {/*<!-- Form -->*/}
                        <form className="mt-4 mb-3 d-md-none">
                        <input type="search" className="form-control form-control-rounded" placeholder="Search" aria-label="Search"/>
                        </form>

                        {/*<!-- Navigation -->*/}
                        <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <a className="nav-link " href="https://sectry.nexuslab.dev/index.html" role="button" aria-haspopup="true" aria-expanded="false">
                            Feed
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link " href="https://sectry.nexuslab.dev/courses.html" role="button" aria-haspopup="true" aria-expanded="false">
                            Courses
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link " href="https://sectry.nexuslab.dev/labs.html" role="button" aria-haspopup="true" aria-expanded="false">
                            Labs
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link " href="https://sectry.nexuslab.dev/help.html" role="button" aria-haspopup="true" aria-expanded="false">
                            Help
                            </a>
                        </li>
                        </ul>

                    </div>

                    </div> {/*<!-- / .container -->*/}
                </nav>
            </React.Fragment>
        )
    }
}
