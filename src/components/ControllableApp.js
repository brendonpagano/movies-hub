// Node Modules
import React, { useState, createContext, useEffect } from "react"

const keyActions = {
  ArrowUp: ([row, col]) => [--row, col],
  ArrowDown: ([row, col]) => [++row, col],
  ArrowLeft: ([row, col]) => [row, --col],
  ArrowRight: ([row, col]) => [row, ++col],
  Esc: () => [],

  // We use `13` instead of `Enter` since some Android controllers have a
  // key property as `Unidentified` but still has the keyCode to 13 when
  // pressing the OK button.
  13: () => [],
}

const ControllerContext = createContext()

const ControllableApp = ({ children }) => {
  const [controllerPosition, setControllerPosition] = useState([0, 0])

  useEffect(() => {
    function onKeyUp(e) {
      const { key, keyCode } = e
      let f

      if (keyActions.hasOwnProperty(key)) {
        f = keyActions[key]
      } else if (keyActions.hasOwnProperty(keyCode)) {
        f = keyActions[keyCode]
      } else {
        return
      }

      const newControllerPosition = f(controllerPosition)

      if (
        newControllerPosition[0] !== controllerPosition[0] ||
        newControllerPosition[1] !== controllerPosition[1]
      ) {
        setControllerPosition(newControllerPosition)
      }
    }

    window.addEventListener("keyup", onKeyUp)
    return () => {
      window.removeEventListener("keyup", onKeyUp)
    }
  })

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
