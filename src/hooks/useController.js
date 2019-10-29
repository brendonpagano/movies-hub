// Node Modules
import { useEffect } from "react"

// Object mapping the application buttons to their respective
// keyCode's.
export const APP_KEYS = Object.freeze({
  LEFT: 37,
  UP: 38,
  RIGHT: 39,
  DOWN: 40,
  OK_BUTTON: 13,
})

// Creates an initially empty array to hold all the listeners
// for each application key, populated via the useController
// hook.
const listeners = Object.values(APP_KEYS).reduce(
  (acc, k) => ({
    ...acc,
    [k]: [],
  }),
  {}
)

window.addEventListener("keyup", e => {
  if (listeners.hasOwnProperty(e.keyCode)) {
    for (const f of listeners[e.keyCode]) {
      f()
    }
  }
})

function useController(actions, deps = []) {
  useEffect(() => {
    Object.keys(actions).forEach(k => {
      listeners[k].push(actions[k])
    })
    return () => {
      Object.keys(actions).forEach(k => {
        const f = actions[k]
        const fIndex = listeners[k].findIndex(lf => f === lf)
        listeners[k].splice(fIndex, 1)
      })
    }
  }, deps)
}

export default useController
