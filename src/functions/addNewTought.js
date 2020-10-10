export const addNewTought = (data, idElement = '.js-toughts-area') => {
  console.log('Agregando tarea a la pantalla')
  const tought = data.ops[0]
  const div = document.querySelector(idElement)

  div.insertAdjacentHTML('afterbegin',
    `<div class="card w-50">
        <div class="card-body">
          <div class="d-flex justify-content-between align-items-start">
            <h5 class="card-title">${tought.title}</h5>
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
              <span aria-hidden="true" class="js-close-btn">&times;</span>
            </button>
          </div>
          <p class="card-text">${tought.tought}</p>
        </div>
      </div>`
  )
}