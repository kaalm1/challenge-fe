import React from 'react'
import {Grid} from 'semantic-ui-react'
import Row from './row'
import _ from 'lodash'
const WIDTH = window.innerWidth

export default class Column extends React.Component{
  render(){
    return(
      <Grid.Column key={this.props.key} style={{width: WIDTH / 25}}>
          {_.times(20,j=><Row key={j}/>)}
      </Grid.Column>
    )
  }
}
