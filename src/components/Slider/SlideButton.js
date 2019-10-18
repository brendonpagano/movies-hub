// Node Modules
import React from "react"
import styled from "@emotion/styled"

const SlideButton = styled(({ type, ...props }) => (
  <button {...props}>
    <span>
      <i className={`fas fa-chevron-${type}`}></i>
    </span>
  </button>
))`
  position: absolute;
  top: 0;
  bottom: 0;
  width: 55px;
  background: rgba(0, 0, 0, 0.5);
  border: 0;
  outline: 0;
  padding: 0;
  margin: 40px 0;
  z-index: 4;

  span {
    color: #fff;
    display: block;
    margin: 0 auto;
  }

  ${props => `${props.type}: 0;`}
`

export default SlideButton
