export const createThougths = (
  array,
  idElement = '.js-toughts-area'
) => {
  const div = document.querySelector(idElement)
  if (array.length === 0) {
    div.insertAdjacentHTML('afterbegin',
      `<p>No tienes pensamientos, puedes comenzar agregando algunos</p>`
    )
  }
  array.map(tought => {
    div.insertAdjacentHTML('afterbegin',
      `<div class="card w-50">
        <div class="card-body">
          <h5 class="card-title">${tought.title}</h5>
          <p class="card-text">${tought.tought}</p>
        </div>
      </div>`
    )
  })
 
}