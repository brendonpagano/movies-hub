import React, { Component } from "react"
import styled from "@emotion/styled"

const ItemPoster = styled.img`
  width: 154px;
  height: auto;
`

const ListItem = styled.li`
  margin-left: 10px;
  cursor: pointer;
  &:first-child {
    margin-left: 0;
  }
`

class SliderItem extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isActive: false,
    }

    this.mouseInside = false
    this.activationThrottlerId = null
  }

  componentWillUnmount() {
    this.killThrottlerFunction()
  }

  killThrottlerFunction = () => {
    if (this.activationThrottlerId) {
      window.clearTimeout(this.activationThrottlerId)
      this.activationThrottlerId = null
    }
  }

  onMouseEnter = () => {
    this.killThrottlerFunction()

    this.activationThrottlerId = window.setTimeout(() => {
      this.setState({ isActive: true })
    }, 1000)
  }

  onMouseLeave = () => {
    this.killThrottlerFunction()
    if (this.state.isActive) {
      this.setState({ isActive: false })
    }
  }

  render() {
    const { title, posterUrl } = this.props

    return (
      <ListItem
        onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}
      >
        <ItemPoster src={posterUrl} alt={title} />
      </ListItem>
    )
  }
}

export default SliderItem
