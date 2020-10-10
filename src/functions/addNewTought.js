export const addNewTought = (data, idElement = '.js-toughts-area') => {
  console.log('Agregando tarea a la pantalla')
  const { title, tought } = data
  console.log(tought)
  const div = document.querySelector(idElement)
  const pInfo = document.querySelector('.js-no-toughts')

  if(pInfo) pInfo.remove()

  div.insertAdjacentHTML('afterbegin',
    `<div class="card w-50 col-lg-3">
        <div class="card-body">
          <div class="d-flex justify-content-between align-items-start">
            <h5 class="card-title">${title}</h5>
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
              <span aria-hidden="true" class="js-close-btn">&times;</span>
            </button>
          </div>
          <p class="card-text">${tought}</p>
        </div>
      </div>`
  )
}