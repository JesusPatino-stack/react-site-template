import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

export default class InstanceDeck extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="col-12 col-lg-6 col-xl-4">
                <div className="card">
            <div className="card-body">

              <div className="dropdown card-dropdown">
                <a href="#!" className="dropdown-ellipses dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-more-vertical"><circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle></svg>
                </a>
                <div className="dropdown-menu dropdown-menu-right">
                  <a href="#!" className="dropdown-item" data-toggle="modal" data-target="#modalEditInstance">
                    Edit
                  </a>
                  <a href="#!" className="dropdown-item text-danger">
                    Remove
                  </a>
                </div>
              </div>

              <div className="text-center">
                <a href="#!" className="card-avatar avatar avatar-lg mx-auto position-relative">
                  <img src="Lab%20Instances%20-%20Android%20Malware%20Lab%20-%20Sectry_files/avatar-2.jpg" className="avatar-img rounded-circle" alt="..."/>
                  <div className="avatar avatar-xs position-absolute" style={{bottom: 0, right: 0}} data-toggle="tooltip" data-placement="bottom" title="" data-original-title="Deployed to OpenStack A">
                    <img src="Lab%20Instances%20-%20Android%20Malware%20Lab%20-%20Sectry_files/openstack.svg" className="avatar-img rounded-circle bg-white p-1 shadow-sm" alt="..."/>
                  </div>
                </a>
              </div>

              <h4 className="card-title text-center mb-3">
                <a href="https://sectry.nexuslab.dev/instance-overview.html">Ab Hadley</a>
              </h4>

              <div className="row align-items-center">
                <div className="col">

                  <p className="card-text mb-3">
                    <span className="small text-muted mr-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-upload-cloud align-middle"><polyline points="16 16 12 12 8 16"></polyline><line x1="12" y1="12" x2="12" y2="21"></line><path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"></path><polyline points="16 16 12 12 8 16"></polyline></svg>
                      <span className="align-middle">Deployed on 01/01/2020</span>
                    </span>
                    <span className="small text-muted">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-clock align-middle"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                      <span className="align-middle">2 days left</span>
                    </span>
                  </p>

                  <div className="progress progress-sm" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="Started on 01/02/2020, due on 01/08/2020">
                    <div className="progress-bar bg-warning" role="progressbar" style={{width: 72}} aria-valuenow="72" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>

                </div>
              </div>
            </div>
          </div>
          </div>
            </React.Fragment>
        )
    }
}
