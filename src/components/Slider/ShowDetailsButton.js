// Node Modules
import React from "react"
import styled from "@emotion/styled"

const ShowDetailsButton = styled(props => (
  <button {...props}>
    <span>
      <i className="fas fa-chevron-down"></i>
    </span>
  </button>
))`
  position: absolute;
  bottom: 5px;
  left: 0;
  right: 0;
  opacity: 0;
  transition: opacity 300ms ease 100ms;
  background: transparent;
  border: 0;
  outline: none;
  width: 100%;

  & > span {
    display: block;
    margin: 0 auto;
    color: white;
    font-size: 20px;
  }
`

export default ShowDetailsButton
