import { addAlerts } from "./addAlerts"

export const checkForValidationErrorsWhenCreatingThought = (data) => {
  
  data.map(elem => {
    addAlerts(
      'danger',
      `${elem}`
    )
  })

}