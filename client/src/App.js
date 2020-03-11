import React, { Component } from 'react';
import fetch from 'node-fetch';
import Navigation from './Navigation.jsx'
import Drinklocation from './Drink_Location.jsx'
//import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seaCreatures: []
    };
    this.api = `http://localhost:8000/api/example`;
  }
  componentDidMount() {
    fetch(this.api)
      .then(res => res.json())
      .then(seaCreatures => {
        this.setState({ seaCreatures: seaCreatures.data });
      });
  }

  render() {
    return (
      <>
        <h1>Welcome to Blue Ocean!</h1>
        <Drinklocation/>
        {/* <Navigation /> */}
      </>
    );
  }
}
