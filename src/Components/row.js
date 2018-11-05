import React from 'react'
import {Grid} from 'semantic-ui-react'
const WIDTH = window.innerWidth

export default class Row extends React.Component{
  state = {
    nodes: [],
    bots: []
  }

  componentWillReceiveProps(props){
    let nodes = props.nodes.filter(x=>x.Location.X === this.props.column && x.Location.Y === this.props.row)
    let bots = props.bots.filter(x=>x.Location.X === this.props.column && x.Location.Y === this.props.row)
    this.setState({nodes, bots})
  }

  render(){
    let backgroundColor = this.state.nodes.length !== 0 ? 'blue' : 'red'
    backgroundColor = this.state.bots.length !== 0 ? 'green' : backgroundColor
    backgroundColor = this.state.nodes.length !== 0 && this.state.bots.length !== 0 ? 'purple' : backgroundColor
    return(
      <Grid.Row key={this.props.key} style={{height: (WIDTH - 100) / global.COLUMNS, borderWidth:5, backgroundColor:backgroundColor, padding:1, margin:1, overflowWrap:'break-word'}}>
        {this.state.nodes.map(x=>`${x.Id.slice(0,2)}(${x.Value})`)}
        {this.state.bots.map(x=>`${x.Id}(${x.Score})`)}
      </Grid.Row>
    )
  }
}
