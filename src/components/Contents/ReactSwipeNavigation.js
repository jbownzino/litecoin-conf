import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'

import { fromTheme, media } from 'theme/globalStyle'
import ReactSwipe from './ReactSwipe'

class ReactSwipeNavigation extends Component {
  constructor() {
    super() // give context for this
    this.state = { position: 0, startX: 0, startY: 0, endX: 0, endY: 0 }
  }

  init(node) {
    node.addEventListener('touchstart', this.handleStart.bind(this), false)
    node.addEventListener('touchmove', this.handleMove.bind(this), false)
    node.addEventListener('touchend', this.handleEnd.bind(this), false)

    node.addEventListener('mousedown', this.handleStartMouse.bind(this), false)
    node.addEventListener('mouseup', this.handleEndMouse.bind(this), false)
  }

  kill(node) {
    node.removeEventListener('touchstart', this.handleStart)
    node.removeEventListener('touchmove', this.handleMove)
    node.removeEventListener('touchend', this.handleEnd)

    node.removeEventListener('mousedown', this.handleStartMouse.bind(this))
    node.removeEventListener('mouseup', this.handleEndMouse.bind(this))
  }

  handleStart(e) {
    //single touch
    let touch = e.touches[0]
    this.setState({ startX: touch.screenX, startY: touch.screenY })
  }

  handleStartMouse(e) {
    this.setState({ startX: e.clientX, startY: e.clientY })
  }

  handleMove(e) {
    let touch = e.touches[0]
    this.setState({ endX: touch.screenX, endY: touch.screenY })
  }

  handleEnd() {
    // Calculate X difference
    let xDelta = this.state.startX - this.state.endX
    if (
      Math.abs(xDelta) > this.props.minX &&
      Math.abs(this.state.startY - this.state.endY) < this.props.maxY
    ) {
      // valid swipe
      this.updatePosition()
    }
  }

  handleEndMouse(e) {
    this.setState({ endX: e.clientX, endY: e.clientY })

    let xDelta = this.state.startX - this.state.endX
    if (
      Math.abs(xDelta) > this.props.minX &&
      Math.abs(this.state.startY - this.state.endY) < this.props.maxY
    ) {
      if (xDelta < 0) this._panels.prev()
      else this._panels.next()

      this.updatePosition()
    }
  }

  myClick(panel) {
    this._panels.slide(panel)
    this.updatePosition()
  }

  updatePosition() {
    this.setState({ position: this._panels.getPos() })
  }

  render() {
    return (
      <div ref={c => (this._swipeZone = c)} style={{ height: '100%' }}>
        <Menu
          swipe={this.myClick}
          father={this}
          list={this.props.menu}
          position={this.state.position}
          speed={this.props.speed}
        />

        <ReactSwipe
          ref={c => (this._panels = c)}
          className="carousel"
          swipeOptions={{ speed: this.props.speed, continuous: false }}
        >
          {this.props.children}
        </ReactSwipe>
      </div>
    )
  }

  componentDidMount() {
    this.init(ReactDOM.findDOMNode(this._swipeZone))
  }

  componentWillUnmount() {
    this.kill(ReactDOM.findDOMNode(this._swipeZone))
  }
}

const MenuWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
`

const MenuItem = styled.div`
  margin: 2rem;
  cursor: pointer;
  color: ${fromTheme('grey')};
  ${media.medium`
    font-size: 12px;
    margin: 1rem 0.3rem;
  `}
  &:hover {
    color: ${fromTheme('black')};
  }
`

class Menu extends Component {
  render() {
    var menuItems = this.props.list.map(function(item, i) {
      return (
        (this.props.position === i) ?
          <MenuItem
            key={item}
            style={{ color: 'black' }}
            onClick={this.props.swipe.bind(this.props.father, i)}
          >
            {item}
          </MenuItem> :
          <MenuItem
            key={item}
            onClick={this.props.swipe.bind(this.props.father, i)}
          >
            {item}
          </MenuItem>
      )
    }, this)

    return (
      <MenuWrapper>
        {menuItems}
      </MenuWrapper>
    )
  }
}

ReactSwipeNavigation.defaultProps = {
  menu: ['Speakers', 'Day 1', 'Day 2', 'Tickets', 'Traveling', 'Contact'],
  // thresholds for valid swipe
  minX: 5,
  maxY: 50,
  speed: 300,
}

export default ReactSwipeNavigation
