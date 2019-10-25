import { useState, useEffect } from "react"

function useKeyboard(listenToKeys) {
  const [pressedKey, setPressedKey] = useState(null)

  useEffect(() => {
    function onKeyUp(e) {
      const { key } = e
      const timestamp = new Date().getTime()

      alert(JSON.stringify({ key, timestamp }, null, 4))

      if (listenToKeys && listenToKeys.includes(key)) {
        setPressedKey({ key, timestamp })
      }
    }

    window.addEventListener("keyup", onKeyUp)
    return () => {
      window.removeEventListener("keyup", onKeyUp)
    }
  })

  return pressedKey
}

export default useKeyboard
