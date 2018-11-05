import React from 'react'
import {Grid} from 'semantic-ui-react'
import Row from './row'
import _ from 'lodash'
// Makes sure the width does not exceed the size of the display, making it dynamic
const WIDTH = window.innerWidth

/**
 * Creates the columns with the appropriate padding and is the parent for all the rows within that column
 */


export default class Column extends React.Component{

  render(){
    return(
      <Grid.Column key={this.props.key} style={{width: (WIDTH - 100) / global.COLUMNS, padding:1, margin:1}}>
          {_.times(20,j=><Row key={j} nodes={this.props.nodes} bots={this.props.bots} column={this.props.column} row={j+1}/>)}
      </Grid.Column>
    )
  }
}
