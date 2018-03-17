import React, { Component } from 'react'

import {
  StyledMenu,
  StyledMenuIcon,
  StyledMenuItem,
  StyledMenuList
} from './elements'

class Menu extends Component {
  state = {
    isToggled: 'closed',
    links: [
      { id: 1, href: '/', text: 'Home' },
      { id: 2, href: '/contact', text: 'About' }
    ]
  }
  handleOnClick = () =>
    this.state.isToggled === 'closed'
      ? this.setState(state => ({ ...state, isToggled: 'open' }))
      : this.setState(state => ({ ...state, isToggled: 'closed' }))
  renderLinks = () =>
    this.state.links.map(l => (
      <StyledMenuItem key={l.id} state={this.state.isToggled}>
        {l.text}
      </StyledMenuItem>
    ))
  render() {
    return (
      <StyledMenu state={this.state.isToggled}>
        <StyledMenuIcon icon="bars" onClick={this.handleOnClick} size="2x" />
        <StyledMenuList state={this.state.isToggled}>
          {this.renderLinks()}
        </StyledMenuList>
      </StyledMenu>
    )
  }
}

export default Menu
