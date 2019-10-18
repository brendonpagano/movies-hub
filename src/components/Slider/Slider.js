// Node Modules
import React, { useState } from "react"
import styled from "@emotion/styled"

// Custom Hooks
import useSizeElement from "./useSizeElement"
import useSliding from "./useSliding"

// Components
import SliderItem, { SLIDER_ITEM_TRANSLATION, SLIDER_ITEM_SCALE } from "./Item"
import ShowDetailsButton from "./ShowDetailsButton"
import SliderContext from "./context"
import SlideButton from "./SlideButton"
import MediaContent from "./MediaContent"

const SliderWrapper = styled.div`
  position: relative;
  overflow: hidden;
  padding: 40px 0;
`

const SliderContainer = styled.div`
  display: flex;
  padding: 0 55px;
  transition: transform 300ms ease 100ms;
  z-index: 3;
  width: 100%;
  ${props =>
    !props.isOpen &&
    `
    & ${SliderItem}:hover {
      transform: scale(${SLIDER_ITEM_SCALE}) !important;
    }

    & ${SliderItem}:hover ${ShowDetailsButton} {
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

const Slider = ({ children, className, activeSlide }) => {
  const [currentSlide, setCurrentSlide] = useState(activeSlide)
  const { width, elementRef } = useSizeElement()
  const sliding = useSliding(width, React.Children.count(children))

  const onSelect = media => setCurrentSlide(media)
  const onClose = () => setCurrentSlide(null)

  const contextValue = {
    onSelectSlide: onSelect,
    onCloseSlide: onClose,
    elementRef,
    currentSlide,
  }

  return (
    <SliderContext.Provider value={contextValue}>
      <SliderWrapper>
        <div className={className}>
          <SliderContainer
            ref={sliding.containerRef}
            isOpen={currentSlide}
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

export default styled(Slider)`
  display: flex;
  position: relative;
`
