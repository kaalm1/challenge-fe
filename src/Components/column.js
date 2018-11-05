import React from 'react'
import {Grid} from 'semantic-ui-react'
import Row from './row'
import _ from 'lodash'
const WIDTH = window.innerWidth

export default class Column extends React.Component{

  render(){
    return(
      <Grid.Column key={this.props.key} style={{width: WIDTH / 20}}>
          {_.times(20,j=><Row key={j} nodes={this.props.nodes} bots={this.props.bots} column={this.props.column} row={j+1}/>)}
      </Grid.Column>
    )
  }
}
