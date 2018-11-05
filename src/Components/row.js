import React from 'react'
import {Grid} from 'semantic-ui-react'
const WIDTH = window.innerWidth

export default class Row extends React.Component{
  state = {
    nodes: [{Id:""}]
  }

  componentWillReceiveProps(props){
    let nodes = props.nodes.filter(x=>x.Location.X === this.props.column && x.Location.Y === this.props.row)
    this.setState({nodes})
  }

  render(){

    return(
      <Grid.Row key={this.props.key} style={{height: WIDTH / 20}}>
        {this.state.nodes.map(x=>`${x.Id.slice(0,2)}(${x.Value})`)}
      </Grid.Row>
    )
  }
}
