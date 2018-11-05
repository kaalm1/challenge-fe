import React, { Component } from 'react';
import { Container, Grid } from 'semantic-ui-react'
import Square from './Components/square'
import Column from './Components/column'
import _ from 'lodash'
import './App.css';


class App extends Component {

  state = {
    Nodes: [],
    Bots: []
  }

  componentDidMount = () => {
    fetch("http://headlight-tournament-3.herokuapp.com/nodes")
    .then(res=> res.json())
    .then(x=>this.setState(x))

    fetch("http://headlight-tournament-3.herokuapp.com/bots")
    .then(res=> res.json())
    .then(x=>this.setState(x))

  }


  render() {
    console.log(this.state)
    return (
      <Container style={{flex:1, justifyContent:'center', alignItems:'center'}}>
        <Grid columns={20}>
        {_.times(20,j=><Column key={j}/>)}
        </Grid>
      </Container>
    );
  }
}

export default App;
