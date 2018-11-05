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
          style={{backgroundColor:global.BOT_COLOR}}
        >
          Bots
        </Menu.Item>

        <Menu.Item
          name='Nodes'
          style={{backgroundColor:global.NODE_COLOR}}
        >
          Nodes
        </Menu.Item>

        <Menu.Item
          name='Both'
          style={{backgroundColor:global.BOTH_COLOR}}
        >
          Both
        </Menu.Item>
        <Menu.Item
          name='None'
          style={{backgroundColor:global.NOTHING_COLOR}}
        >
          Empty
        </Menu.Item>
      </Menu>
    )
  }
}
