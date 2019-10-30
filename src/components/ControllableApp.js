// Node Modules
import React, { useState } from "react"

// Context
import ControllerContext from "../contexts/ControllerContext"

// Custom Hooks
import useKeyboardScrollBlocking from "../hooks/useKeyboardScrollBlocking"
import useController, { APP_KEYS } from "../hooks/useController"

const ControllableApp = ({ children }) => {
  const [controllerPosition, setControllerPosition] = useState([0, 0])
  console.log("Pos: " + JSON.stringify(controllerPosition))

  function updateControllerPosition(dx, dy) {
    const [row, col] = controllerPosition
    const newControllerPos = [row + dx, col + dy]
    setControllerPosition(newControllerPos)
  }

  useKeyboardScrollBlocking()
  useController(
    {
      [APP_KEYS.UP]: () => updateControllerPosition(-1, 0),
      [APP_KEYS.DOWN]: () => updateControllerPosition(1, 0),
      [APP_KEYS.LEFT]: () => updateControllerPosition(0, -1),
      [APP_KEYS.RIGHT]: () => updateControllerPosition(0, 1),
    },
    [...controllerPosition]
  )

  const contextValue = {
    controllerPosition,
  }

  return (
    <ControllerContext.Provider value={contextValue}>
      {children}
    </ControllerContext.Provider>
  )
}

export default ControllableApp
