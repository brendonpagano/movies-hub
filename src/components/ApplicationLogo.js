// Node Modules
import React, { useMemo } from "react"
import styled from "@emotion/styled"
import cx from "classnames"

// Custom Hooks
import useDisplayPosition from "../hooks/useDisplayPosition"
import useController, { APP_KEYS } from "../hooks/useController"

const ApplicationLogoImage = styled.img`
  width: auto;
  height: 100%;
`

const ApplicationLogo = ({ position, className, ...props }) => {
  const isControllerSelected = useDisplayPosition(position || [0, 0])

  const controllerActions = useMemo(
    () =>
      isControllerSelected
        ? {
            [APP_KEYS.OK_BUTTON]: () => {
              console.log("ApplicationLogo action")
            },
          }
        : {},
    [isControllerSelected]
  )

  useController(controllerActions, [isControllerSelected])

  return (
    <ApplicationLogoImage
      {...props}
      className={cx(
        className,
        isControllerSelected && "is-controller-selected"
      )}
    />
  )
}

export default ApplicationLogo
