import React, { Component } from 'react';
import { Container, Grid } from 'semantic-ui-react'
import Square from './Components/square'
import Column from './Components/column'
import _ from 'lodash'
import './App.css';


class App extends Component {

  state = {
    Nodes: [],
    Bots: [],
    sI: null
  }

  getNodesAndBots = () => {
    fetch("http://headlight-tournament-3.herokuapp.com/nodes")
    .then(res=> res.json())
    .then(x=>this.setState(x))

    fetch("http://headlight-tournament-3.herokuapp.com/bots")
    .then(res=> res.json())
    .then(x=>this.setState(x))
  }

  componentDidMount = () => {

    this.getNodesAndBots()
    let sI = setInterval(()=>{
      this.getNodesAndBots()
    }, 2000)
    this.setState({sI})

  }


  render() {
    return (
      <div style={{flex:1, justifyContent:'center', alignItems:'center', margin:20}}>
        <Grid>
        {_.times(20,j=><Column key={j} bots={this.state.Bots} nodes={this.state.Nodes} column={j+1}/>)}
        </Grid>
      </div>
    );
  }
}

export default App;
