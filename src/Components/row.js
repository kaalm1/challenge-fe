import React from 'react'
import {Grid} from 'semantic-ui-react'
const WIDTH = window.innerWidth


/**
 * Creates the rows with the appropriate padding and is the parent for all the rows within that column
 */

export default class Row extends React.Component{
  state = {
    nodes: [],
    bots: []
  }

  componentWillReceiveProps(props){
    // retrieves only the nodes and bots that fit the criteria of that cell location
    let nodes = props.nodes.filter(x=>x.Location.X === this.props.column && x.Location.Y === this.props.row)
    let bots = props.bots.filter(x=>x.Location.X === this.props.column && x.Location.Y === this.props.row)
    this.setState({nodes, bots})
  }

  render(){

    // Sets the appropriate color for the cell depending on what is "found" in the cell using global variables to easily interchange colors in the future

    let backgroundColor = this.state.nodes.length !== 0 ? global.NODE_COLOR : global.NOTHING_COLOR
    backgroundColor = this.state.bots.length !== 0 ? global.BOT_COLOR : backgroundColor
    backgroundColor = this.state.nodes.length !== 0 && this.state.bots.length !== 0 ? global.BOTH_COLOR : backgroundColor
    return(
      <Grid.Row key={this.props.key} style={{height: (WIDTH - 100) / global.COLUMNS, borderWidth:5, backgroundColor:backgroundColor, padding:1, margin:1, overflowWrap:'break-word'}}>
        {this.state.nodes.map(x=>`${x.Id.slice(0,2)}(${x.Value})`)}
        {this.state.bots.map(x=>`${x.Id}(${x.Score})`)}
      </Grid.Row>
    )
  }
}
