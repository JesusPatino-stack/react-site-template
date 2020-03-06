import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import DescriptionCard from './DescriptionCard'
import ScenarioCard from './ScenarioCard'
import MaterialsDeck from './MaterialsDeck'
import DifficultyCard from './DifficultyCard';
import AssignedToDeck from './AssignedToDeck';

export default class OverviewView extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="row">
                    <div className="col-12 col-lg-8">
                        <DescriptionCard/>
                        <ScenarioCard/>
                        <MaterialsDeck/>
                    </div>
                    <div className="col-12 col-lg-4">
                        <DifficultyCard/>
                        <AssignedToDeck/>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
