import React, { Component } from 'react'
//import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
//import DescriptionCard from './components/DescriptionCard';
//import MaterialsDeck from './components/MaterialsDeck';
//import ScenarioCard from './components/ScenarioCard';
import TopNavbar from './components/TopNavbar';
import OverviewView from './components/OverviewView';
//import DifficultyCard from './components/DifficultyCard';
//import AssignedToDeck from './components/AssignedToDeck';
import OverviewHeader from './components/OverviewHeader';
import InstanceHeader from './components/InstanceHeader';
import ContentNavbar from './components/ContentNavbar';
import InstanceView from './components/InstanceView';
import Footer from './components/Footer';
import CreateInstanceButton from './components/CreateInstanceButton';

class App extends Component {

  render() {
  return (
    <div className="App">

      
        <TopNavbar/>
        <InstanceHeader/>
        <ContentNavbar/>
        <OverviewView/>
        <OverviewHeader/>
        <ContentNavbar/>
        <InstanceView/>
        <Footer/>
        <CreateInstanceButton/>

    </div>

  );
}
}
export default App;
