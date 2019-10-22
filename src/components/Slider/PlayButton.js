// Node Modules
import React from "react"
import styled from "@emotion/styled"

const PlayButton = styled(props => (
  <button {...props}>
    <span>
      <i className="far fa-play-circle"></i>
    </span>
  </button>
))`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0;
  transition: opacity 300ms ease 100ms;
  background: transparent;
  border: 0;
  outline: none;
  cursor: inherit;

  & > span {
    display: block;
    margin: 0 auto;
    color: white;
    font-size: 2.8rem;
  }
`

export default PlayButton
