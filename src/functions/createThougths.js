import { createElementParagraph } from "./createElementParagraph"

export const createThougths = (
  array,
  idElement = '.js-toughts-area'
) => {
  const div = document.querySelector(idElement)
  
  if (array.length === 0) {
    createElementParagraph(
      div,
      'No tienes ningun pensamiento, pero puedes comenzar agregando alguno'
    )
  }

  array.map(tought => {
    div.insertAdjacentHTML('afterbegin',
    `<div class="card w-50 col-lg-3">
        <div class="card-body">
          <div class="d-flex justify-content-between align-items-start">
            <h5 class="card-title">${tought.title}</h5>
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
              <span aria-hidden="true" class="js-close-btn" data-name="${tought.title}">&times;</span>
            </button>
          </div>
          <p class="card-text">${tought.tought}</p>
        </div>
      </div>`
    )
  })
 
}