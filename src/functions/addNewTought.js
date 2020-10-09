export const addNewTought = (data, idElement = '.js-toughts-area') => {
  console.log('Agregando tarea a la pantalla')
  const tought = data.ops[0]
  const div = document.querySelector(idElement)
  div.insertAdjacentHTML('afterbegin',
    `<div class="card w-50">
        <div class="card-body">
          <h5 class="card-title">${tought.title}</h5>
          <p class="card-text">${tought.tought}</p>
        </div>
      </div>`
  )
}