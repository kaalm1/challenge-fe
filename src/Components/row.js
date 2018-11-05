import React from 'react'
import {Grid} from 'semantic-ui-react'

export default class Row extends React.Component{
  render(){
    return(
      <Grid.Row key={this.props.key}>
        Hello
      </Grid.Row>
    )
  }
}
