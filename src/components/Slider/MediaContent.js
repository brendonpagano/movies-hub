// Node Modules
import React from "react"
import styled from "@emotion/styled"

const ContentWrapper = styled.div`
  position: relative;
  margin-top: -40px;
  height: 28vw;

  & .content-background,
  & .content-background-shadow,
  & .content-background-image {
    position: absolute;
    top: 0;
    bottom: 0;
  }

  & .content-background {
    left: 0;
    right: 0;
  }

  & .content-background-shadow {
    left: 0;
    background: #000;
    width: 35%;
    z-index: 2;
  }

  & .content-background-shadow:before {
    content: "";
    position: absolute;
    z-index: 10;
    background-image: linear-gradient(to right, #000, transparent);
    top: 0;
    bottom: 0;
    left: 100%;
    width: 275px;
  }

  & .content-background-image {
    right: 0;
    width: 70%;
    height: 100%;
    background-position: center;
    background-size: cover;
    z-index: 1;
  }
`

const ContentArea = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100%;
  z-index: 3;
`

const ContentContainer = styled.div`
  padding: 30px 70px 10px 70px;
  color: wheat;
  height: 100%;
  overflow: hidden;
`

const ContentTitle = styled.h3`
  font-size: 45px;
  color: white;
  font-weight: 700;
  margin: 0;
`

const ContentDescription = styled.p`
  font-size: 18px;
  color: #999;
  margin-top: 20px;
  max-width: 400px;
  text-overflow: ellipsis;
  overflow: hidden;
`

const MediaContent = ({ mediaInfo, onClose, ...props }) => (
  <ContentWrapper {...props}>
    <div className="content-background">
      <div className="content-background-shadow" />
      <div
        className="content-background-image"
        style={{ backgroundImage: `url(${mediaInfo.backdrop})` }}
      />
    </div>
    <ContentArea>
      <ContentContainer>
        <ContentTitle>{mediaInfo.title}</ContentTitle>
        <ContentDescription>{mediaInfo.description}</ContentDescription>
      </ContentContainer>
    </ContentArea>
  </ContentWrapper>
)

export default MediaContent
