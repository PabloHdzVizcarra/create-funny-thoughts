export const deleteElementById = (id) => {
  const divToughts = Array.from(
    document.querySelectorAll('.js-close-btn')
  );
  
  divToughts.map(element => {
    const divID =
      element.parentElement.parentElement.parentElement.parentElement.dataset.id

    if (divID === id) {
      element.parentElement.parentElement.parentElement.parentElement.remove()
    }
  })
}