// Node Modules
import React from "react"
import styled from "@emotion/styled"

// Components
import SliderContext from "./context"
import Mark from "./Mark"
import ShowDetailsButton from "./ShowDetailsButton"

// Constants
export const SLIDER_ITEM_SCALE = "1.3"
export const SLIDER_ITEM_TRANSLATION = "15"

const SliderPreviewImage = styled.img`
  width: 154px;
  height: 235px;
`

const SliderItem = styled(({ mediaInfo, children, ...props }) => (
  <SliderContext.Consumer>
    {({ onSelectSlide, currentSlide, elementRef }) => {
      const isActive = currentSlide && currentSlide.id === mediaInfo.id

      return (
        <div ref={elementRef} {...props}>
          <SliderPreviewImage alt={mediaInfo.title} src={mediaInfo.poster} />
          <ShowDetailsButton onClick={() => onSelectSlide(mediaInfo)} />
          {isActive && <Mark />}
        </div>
      )
    }}
  </SliderContext.Consumer>
))`
  flex: 1;
  transition: transform 300ms ease 100ms;
  margin: 0 3px;
  position: relative;
  cursor: pointer;
  z-index: 999;
`

export default SliderItem
