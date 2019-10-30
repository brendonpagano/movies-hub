// Node Modules
import { useContext } from "react"

// Contexts
import ControllerContext from "../contexts/ControllerContext"

function useDisplayPosition(position) {
  const { controllerPosition } = useContext(ControllerContext)

  if (!(Array.isArray(position) && position.length === 2)) {
    return false
  }

  const [row, col] = position
  const [activeRow, activeCol] = controllerPosition

  return row === activeRow && col === activeCol
}

export default useDisplayPosition
