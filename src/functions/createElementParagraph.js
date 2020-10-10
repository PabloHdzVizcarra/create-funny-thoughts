export const createElementParagraph = (elementHTML, textElement) => {
  elementHTML.insertAdjacentHTML('afterbegin',
    `<p class="js-no-toughts">${textElement}</p>`
  )
}