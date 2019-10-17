import React from "react"
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

const SliderItem = ({ title, posterUrl }) => (
  <ListItem>
    <ItemPoster src={posterUrl} alt={title} />
  </ListItem>
)

export default SliderItem
