// Node Modules
import React from "react"

// Custom Hooks
import useDisplayPosition from "../../hooks/useDisplayPosition"

const PureDisplayPosition = React.memo(({ children, ...props }) => {
  return React.Children.only(React.cloneElement(children, props))
})

const withDisplayPosition = C =>
  React.memo(({ row, col, ...props }) => {
    const isControllerSelected = useDisplayPosition([row, col])

    return (
      <PureDisplayPosition
        isControllerSelected={isControllerSelected}
        row={row}
        col={col}
      >
        <C {...props} isControllerSelected={isControllerSelected} />
      </PureDisplayPosition>
    )
  })

export default withDisplayPosition
