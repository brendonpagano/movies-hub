import React from "react"
import styled from "@emotion/styled"

const ContentContainer = styled.div`
  color: white;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 30px;
`

const Background = styled.div`
  display: flex;
  .left:before {
    content: "";
    position: absolute;
    background-image: linear-gradient(to right, #000, transparent);
    top: 0;
    bottom: 0;
    left: 100%;
    width: 275px;
  }
  & > .left {
    background: black;
    width: 30%;
    position: relative;
  }
  & > .right {
    background: green;
    width: 70%;
  }
`

const MediaContent = styled(({ mediaInfo, onClose, ...props }) => (
  <div {...props}>
    <Background>
      <div className="left">left</div>
      <div className="right">right</div>
    </Background>
    <ContentContainer>content here...</ContentContainer>
  </div>
))`
  margin-top: 40px;
  height: 300px;
  position: relative;
`

export default MediaContent
