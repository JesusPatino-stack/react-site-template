/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

var appElement = document.getElementById('root');

Modal.setAppElement(appElement);

export default class CreateInstanceButton extends Component {
  constructor(props) {
    super(props);
    this.state = { modalIsOpen: false };
  }

  openModal = () => {
    this.setState({modalIsOpen: true});
  }

  closeModal = () => {
    this.setState({modalIsOpen: false});
  }

  handleModalCloseRequest = () => {
    // opportunity to validate something and keep the modal open even if it
    // requested to be closed
    this.setState({modalIsOpen: false});
  }

  handleSaveClicked = (e) => {
    alert('Save button was clicked');
  }

  render() {
    return (
      <div>
        <button type="button" className="btn btn-primary btn-bloc" onClick={this.openModal}>Create Instances</button>
        <Modal
          className="Modal__Bootstrap modal-dialog"
          closeTimeoutMS={150}
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.handleModalCloseRequest}
        >


        <div className="modal-dialog modal-dialog-centered" >
          <div className="modal-content">
            <div className="modal-card card long">
              <div className="card-header">
                <div className="row align-items-center">
                  <div className="col">
                    {/* Title */}
                    <h4 className="card-header-title">
                      Create instances
                    </h4>
                  </div>
                  <div className="col-auto">
                    {/* Close */}
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">×</span>
                    </button>
                  </div>
                </div> {/* / .row */}
              </div>
              <div className="card-body">
                {/* Form */}
                <form>
                  {/* Cloud */}
                  <div className="form-group">
                    <label>
                      Deploy to
                    </label>
                    {/*<select className="form-control select2-hidden-accessible" data-toggle="select" data-select2-id={1} tabIndex={-1} aria-hidden="true">
                      <option data-avatar-src="assets/img/clouds/openstack.svg" data-select2-id={3} selected="defaultValue">OpenStack A</option>
                      <option data-avatar-src="assets/img/clouds/aws.svg">AWS US West</option>
                      <option data-avatar-src="assets/img/clouds/google.svg">Google Cloud Pro</option>
                      <option data-avatar-src="assets/img/clouds/azure.svg">Azure 3000X</option>
                      <option data-avatar-src="assets/img/clouds/oracle.svg">Oracle Cloud</option>
                    </select>
                    <span className="select2 select2-container select2-container--default" dir="ltr" data-select2-id={2} style={{width: 'auto'}}><span className="selection"><span className="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabIndex={0} aria-disabled="false" aria-labelledby="select2-ucl1-container"><span className="select2-selection__rendered" id="select2-ucl1-container" role="textbox" aria-readonly="true" title="OpenStack A"><div className="d-flex flex-row align-items-center"><span className="avatar avatar-xs mr-2"><img className="avatar-img rounded-circle" src="Lab%20Instances%20-%20Android%20Malware%20Lab%20-%20Sectry_files/openstack.svg" alt="OpenStack A" /></span><span>OpenStack A</span></div></span><span className="select2-selection__arrow" role="presentation"><b role="presentation" /></span></span></span><span className="dropdown-wrapper" aria-hidden="true" /></span>*/}
                  </div>
                  {/* Team members */}
                  <div className="form-group">
                    <label>
                      Assigned to
                    </label>
                    {/*<select className="form-control select2-hidden-accessible" data-toggle="select" multiple="multiple" data-select2-id={4} tabIndex={-1} aria-hidden="true">
                      <optgroup label="Teams">
                        <option selected="true" data-avatar-srcs="[{&quot;name&quot;:&quot;Ab Hadley&quot;,&quot;src&quot;:&quot;/assets/img/avatars/profiles/avatar-2.jpg&quot;},
                      {&quot;name&quot;:&quot;Adolfo Hess&quot;,&quot;src&quot;:&quot;/assets/img/avatars/profiles/avatar-3.jpg&quot;},
                      {&quot;name&quot;:&quot;Miyah Myles &quot;,&quot;src&quot;:&quot;/assets/img/avatars/profiles/avatar-4.jpg&quot;},
                      {&quot;name&quot;:&quot;Dianna Smiley&quot;,&quot;src&quot;:&quot;/assets/img/avatars/profiles/avatar-1.jpg&quot;}]" data-select2-id={6}>
                          Team Red
                        </option>
                        <option data-avatar-srcs="[{&quot;name&quot;:&quot;Ab Hadley&quot;,&quot;src&quot;:&quot;/assets/img/avatars/profiles/avatar-2.jpg&quot;},
                    {&quot;name&quot;:&quot;Adolfo Hess&quot;,&quot;src&quot;:&quot;/assets/img/avatars/profiles/avatar-3.jpg&quot;},
                    {&quot;name&quot;:&quot;Miyah Myles &quot;,&quot;src&quot;:&quot;/assets/img/avatars/profiles/avatar-4.jpg&quot;}]">
                          Team Blue
                        </option>
                        <option data-avatar-srcs="[{&quot;name&quot;:&quot;Ab Hadley&quot;,&quot;src&quot;:&quot;/assets/img/avatars/profiles/avatar-2.jpg&quot;},
                    {&quot;name&quot;:&quot;Adolfo Hess&quot;,&quot;src&quot;:&quot;/assets/img/avatars/profiles/avatar-3.jpg&quot;}]">
                          Team Green
                        </option>
                      </optgroup>
                      <optgroup label="Students">
                        <option data-avatar-src="assets/img/avatars/profiles/avatar-1.jpg">
                          Dianna Smiley
                        </option>
                        <option data-avatar-src="assets/img/avatars/profiles/avatar-2.jpg">
                          Ab Hadley
                        </option>
                        <option data-avatar-src="assets/img/avatars/profiles/avatar-3.jpg">
                          Adolfo Hess
                        </option>
                      </optgroup>
                    </select><span className="select2 select2-container select2-container--default" dir="ltr" data-select2-id={5} style={{width: 'auto'}}><span className="selection"><span className="select2-selection select2-selection--multiple" role="combobox" aria-haspopup="true" aria-expanded="false" tabIndex={-1} aria-disabled="false"><ul className="select2-selection__rendered"><li className="select2-selection__choice" title="
                      Team Red
                    " data-select2-id={7}><span className="select2-selection__choice__remove" role="presentation">×</span><div className="d-flex flex-row align-items-center"><div className="avatar-group mr-2 d-none d-md-inline-flex"><a href="#!" className="avatar avatar-xs" title="Ab Hadley"><img src="Lab%20Instances%20-%20Android%20Malware%20Lab%20-%20Sectry_files/avatar-2.jpg" className="avatar-img rounded-circle" alt="Ab Hadley" /></a><a href="#!" className="avatar avatar-xs" title="Adolfo Hess"><img src="Lab%20Instances%20-%20Android%20Malware%20Lab%20-%20Sectry_files/avatar-3.jpg" className="avatar-img rounded-circle" alt="Adolfo Hess" /></a><a href="#!" className="avatar avatar-xs" title="Miyah Myles "><img src="Lab%20Instances%20-%20Android%20Malware%20Lab%20-%20Sectry_files/avatar-4.jpg" className="avatar-img rounded-circle" alt="Miyah Myles " /></a><div className="avatar avatar-xs"><span className="avatar-title rounded-circle">+1</span></div></div><span>
                                  Team Red
                                </span></div>
                                </li>
                                <li className="select2-search select2-search--inline">
                                    <input className="select2-search__field" type="search" tabIndex={0} autoComplete="off" autoCorrect="off" autoCapitalize="none" spellCheck="false" role="searchbox" aria-autocomplete="list" placeholder style={{width: '0.75em'}} />
                                </li>
                                </ul></span></span><span className="dropdown-wrapper" aria-hidden="true" /></span>*/}
                  </div>
                  <div className="row">
                    <div className="col-12 col-md-4">
                      {/* Deploy date */}
                      <div className="form-group">
                        <label>
                          Deploy date
                        </label>
                        <input type="text" className="form-control flatpickr-input" data-toggle="flatpickr" data-options="{&quot;enableTime&quot;: true}" defaultValue="2020-01-01 12:00" readOnly="readonly" />
                      </div>
                    </div>
                    <div className="col-12 col-md-4">
                      {/* Start date */}
                      <div className="form-group">
                        <label>
                          Start date
                        </label>
                        <input type="text" className="form-control flatpickr-input" data-toggle="flatpickr" data-options="{&quot;enableTime&quot;: true}" defaultValue="2020-01-02 12:00" readOnly="readonly" />
                      </div>
                    </div>
                    <div className="col-12 col-md-4">
                      {/* Start date */}
                      <div className="form-group">
                        <label>
                          End date
                        </label>
                        <input type="text" className="form-control flatpickr-input" data-toggle="flatpickr" data-options="{&quot;enableTime&quot;: true}" defaultValue="2020-01-08 12:00" readOnly="readonly" />
                      </div>
                    </div>
                  </div> {/* / .row */}
                  {/* Buttons */}
                  <a href="#" className="btn btn-block btn-primary">
                    Create instances
                  </a>
                </form>
              </div>
            </div>
          </div>
        </div>

    

        </Modal>
      </div>
    );
  }
}

ReactDOM.render(<CreateInstanceButton/>, appElement);