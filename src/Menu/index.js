import React, { Component } from 'react'

import {
  StyledMenu,
  StyledMenuIcon,
  StyledMenuItem,
  StyledMenuList
} from './elements'

class Menu extends Component {
  state = {
    isOpen: false,
    links: [
      { id: 1, href: '/', text: 'Home' },
      { id: 2, href: '/contact', text: 'About' }
    ]
  }
  handleOnClick = () =>
    this.state.isOpen
      ? this.setState(state => ({ ...state, isOpen: false }))
      : this.setState(state => ({ ...state, isOpen: true }))
  renderLinks = () =>
    this.state.links.map(l => (
      <StyledMenuItem key={l.id} state={this.state.isOpen}>
        {l.text}
      </StyledMenuItem>
    ))
  render() {
    return (
      <StyledMenu state={this.state.isOpen}>
        <StyledMenuIcon icon="bars" onClick={this.handleOnClick} size="2x" />
        <StyledMenuList state={this.state.isOpen}>
          {this.renderLinks()}
        </StyledMenuList>
      </StyledMenu>
    )
  }
}

export default Menu
