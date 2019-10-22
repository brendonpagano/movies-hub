// Node Modules
import React from "react"
import styled from "@emotion/styled"

// Components
import SliderContext from "./context"
import Mark from "./Mark"
import PlayButton from "./PlayButton"
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
    {({ onSelectSlide, onPlayMedia, currentSlide, elementRef }) => {
      const isActive = currentSlide && currentSlide.id === mediaInfo.id

      return (
        <div ref={elementRef} {...props}>
          <SliderPreviewImage alt={mediaInfo.title} src={mediaInfo.poster} />
          <PlayButton onClick={() => onPlayMedia(mediaInfo)} />
          <ShowDetailsButton onClick={() => onSelectSlide(mediaInfo)} />
          {isActive && <Mark />}
        </div>
      )
    }}
  </SliderContext.Consumer>
))`
  flex: 1;
  transition: transform 300ms ease;
  margin: 0 3px;
  position: relative;
  cursor: pointer;
`

export default SliderItem
