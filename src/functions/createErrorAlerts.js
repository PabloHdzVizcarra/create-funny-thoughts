import { addAlerts } from "./addAlert/addAlerts"

export const createErrorAlerts = (data) => {

  data.map(elem => {
    addAlerts(
      'danger',
      `${elem}`
    )
  })

}