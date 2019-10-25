// Node Modules
import React, { useState, createContext, useEffect } from "react"

// Custom Hooks
import useKeyboard from "../hooks/useKeyboard"

// Constants
const KEYS_TO_LISTEN = [
  "ArrowUp",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "Enter",
  "Esc",
  "Backspace",
]

const ControllerContext = createContext()

const ControllableApp = ({ children }) => {
  const pressedKey = useKeyboard()

  const contextValue = {}

  return (
    <ControllerContext.Provider value={contextValue}>
      {children}
    </ControllerContext.Provider>
  )
}

const getNewControllerPosition = (key, activeControllerPos) => {
  const [row, col] = activeControllerPos

  switch (key) {
    case "ArrowUp":
      return [--row, col]
    case "ArrowDown":
      return [++row, col]
    case "ArrowLeft":
      return [row, --col]
    case "ArrowRight":
      return [row, ++col]
    default:
      return activeControllerPos
  }
}

export default ControllableApp
