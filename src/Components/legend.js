import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'

export default class Legend extends Component {
  state = {}

  render() {

    return (
      <Menu secondary>
        <Menu.Item
          name='Legend'
        >
          Legend:
        </Menu.Item>
        <Menu.Item
          name='Bots'
          style={{backgroundColor:'green'}}
        >
          Bots
        </Menu.Item>

        <Menu.Item
          name='Nodes'
          style={{backgroundColor:'blue'}}
        >
          Nodes
        </Menu.Item>

        <Menu.Item
          name='Both'
          style={{backgroundColor:'purple'}}
        >
          Both
        </Menu.Item>
        <Menu.Item
          name='None'
          style={{backgroundColor:'red'}}
        >
          Empty
        </Menu.Item>
      </Menu>
    )
  }
}
