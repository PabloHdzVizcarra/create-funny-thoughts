export const addAlerts = (typeAlert, message, idElement = '.js-messages') => {
  const divAlerts = document.querySelector(idElement)

  return divAlerts.insertAdjacentHTML('afterBegin',
    `<div class="alert alert-${typeAlert} alert-dismissible fade show js-info-alert" role="alert">
      <strong>Info </strong>${message} 
      <button type="button" class="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>`
  )
}