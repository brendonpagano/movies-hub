// Node Modules
import { useEffect } from "react"

function useKeyboardScrollBlocking() {
  useEffect(() => {
    function onKeyDown(e) {
      if ([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
        e.preventDefault()
      }
    }

    window.addEventListener("keydown", onKeyDown)
    return () => {
      window.removeEventListener("keydown", onKeyDown)
    }
  }, [])
}

export default useKeyboardScrollBlocking
