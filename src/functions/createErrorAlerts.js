import { addAlerts } from "./addAlerts"

export const createErrorAlerts = (data) => {

  data.map(elem => {
    addAlerts(
      'danger',
      `${elem}`
    )
  })

}