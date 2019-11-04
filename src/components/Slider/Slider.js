// Node Modules
import React, { useState } from "react"
import styled from "@emotion/styled"

// Custom Hooks
import useSizeElement from "../../hooks/useSizeElement"
import useSliding from "../../hooks/useSliding"

// HOCs
import withDisplayPosition from "../HOCs/withDisplayPosition"

// Components
import SliderItem, { SLIDER_ITEM_TRANSLATION, SLIDER_ITEM_SCALE } from "./Item"
import ShowDetailsButton from "./ShowDetailsButton"
import PlayButton from "./PlayButton"
import SliderContext from "./context"
import SlideButton from "./SlideButton"
import MediaContent from "./MediaContent"

const SliderWrapper = styled.div`
  position: relative;
  overflow: hidden;
  margin: 5px 0 40px 0;
`

const SliderContainer = styled.div`
  display: flex;
  ${props => props.hasPrev && "padding-left: 55px;"}
  ${props => props.hasNext && "padding-right: 55px;"}
  ${props =>
    props.isControllerSelected &&
    `
    ${SliderItem}:first-of-type {
      border: 2px solid white;
    }
  `}
  transition: transform 300ms ease 100ms;
  z-index: 3;
  width: 100%;
  ${props =>
    !props.isOpen &&
    `
    & ${SliderItem}:hover {
      transform: scale(${SLIDER_ITEM_SCALE}) !important;
    }

    & ${SliderItem}:hover ${ShowDetailsButton},
    & ${SliderItem}:hover ${PlayButton} {
      opacity: 1;
    }

    &:hover ${SliderItem} {
      transform: translateX(-${SLIDER_ITEM_TRANSLATION}%);
    }

    & ${SliderItem}:hover ~ ${SliderItem} {
      transform: translateX(${SLIDER_ITEM_TRANSLATION}%);
    }
  `}
`

const Slider = React.memo(
  ({ children, activeSlide, isControllerSelected, ...props }) => {
    const [currentSlide, setCurrentSlide] = useState(activeSlide)
    const { width, elementRef } = useSizeElement()
    const sliding = useSliding(width, React.Children.count(children))

    const onSelect = media => setCurrentSlide(media)
    const onPlay = media => {}
    const onClose = () => setCurrentSlide(null)

    const contextValue = {
      onSelectSlide: onSelect,
      onCloseSlide: onClose,
      onPlayMedia: onPlay,
      elementRef,
      currentSlide,
    }

    return (
      <SliderContext.Provider value={contextValue}>
        <SliderWrapper>
          <div {...props}>
            <SliderContainer
              ref={sliding.containerRef}
              isOpen={currentSlide}
              hasPrev={sliding.hasPrev}
              hasNext={sliding.hasNext}
              isControllerSelected={isControllerSelected}
              {...sliding.slideProps}
            >
              {children}
            </SliderContainer>
          </div>
          {sliding.hasPrev && (
            <SlideButton onClick={sliding.handlePrev} type="left" />
          )}
          {sliding.hasNext && (
            <SlideButton onClick={sliding.handleNext} type="right" />
          )}
        </SliderWrapper>
        {currentSlide && (
          <MediaContent mediaInfo={currentSlide} onClose={onClose} />
        )}
      </SliderContext.Provider>
    )
  }
)

export default styled(withDisplayPosition(Slider))`
  display: flex;
  position: relative;
`
