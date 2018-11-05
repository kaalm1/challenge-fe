import React, { Component } from 'react';
import { Container, Grid } from 'semantic-ui-react'
import Column from './Components/column'
import Legend from './Components/legend'
import _ from 'lodash'
import './App.css';


class App extends Component {

  /**
   * Holds all known state of mineral nodes and bots
   */

  state = {
    Nodes: [],
    Bots: [],
    sI: null
  }

  /**
   * Fetches all known information about mineral nodes, and updates
   * the state object with that node information
   */
  getNodesAndBots = () => {
    fetch("http://headlight-tournament-3.herokuapp.com/nodes")
    .then(res=> res.json())
    .then(x=>this.setState(x))

    fetch("http://headlight-tournament-3.herokuapp.com/bots")
    .then(res=> res.json())
    .then(x=>this.setState(x))
  }


  // Continous polling of the nodes and bots so that it displays them in real time
  componentDidMount = () => {

    this.getNodesAndBots()
    let sI = setInterval(()=>{
      this.getNodesAndBots()
    }, 2000)
    this.setState({sI})

  }

  /**
   * Creates the legend to understand the coloring scheme of the cells as well as the parent for all the cells
   * It is the parent that passes to all the children all the updated nodes and bots
   */

  render() {
    return (
      <div style={{flex:1, justifyContent:'center', alignItems:'center', margin:20}}>
        <Legend />
        <Grid>
        {_.times(20,j=><Column key={j} bots={this.state.Bots} nodes={this.state.Nodes} column={j+1}/>)}
        </Grid>
      </div>
    );
  }
}

export default App;
