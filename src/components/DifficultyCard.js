import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import uuid from 'uuid';

export default class DifficultyCard extends Component {

    
    state = {
        difficulty:[
            {
                id: uuid(),
                level: `Hard`,
                estHours: `20`
            }
        ]
    }

    render() {
        return (
            <React.Fragment> 
                <div className="card">
                    {this.state.difficulty.map(difficulty =>
                        <div className="card-body" key={difficulty.id}>

                        <div className="row align-items-center mb-3">
                            <div className="col">

                            {/*<!-- Title -->*/}
                            <h6 className="card-title text-uppercase text-muted mb-2">
                                Difficulty
                            </h6>

                            {/*<!-- Heading -->*/}
                            <span className="h2 mb-0">
                                {difficulty.level}
                            </span>

                            </div>
                            <div className="col-auto">

                            {/*<!-- Icon -->*/}
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-activity h2 text-muted mb-0"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>

                            </div>
                        </div> {/*<!-- / .row -->*/}

                        <div className="row align-items-center">
                            <div className="col">

                            {/*<!-- Title -->*/}
                            <h6 className="card-title text-uppercase text-muted mb-2">
                                Est. Hours
                            </h6>

                            {/*<!-- Heading -->*/}
                            <span className="h2 mr-2 mb-0">
                                {difficulty.estHours}
                            </span>

                            </div>
                            <div className="col-auto">

                            {/*<!-- Icon -->*/}
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-clock h2 text-muted mb-0"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>

                            </div>
                        </div> {/*<!-- / .row -->*/}

                        </div>
                    )}
                    </div>
            </React.Fragment>
        )
    }
}

