export const deleteElementByDataset = (dataset) => {
  const divToughts = Array.from(
    document.querySelectorAll('.js-close-btn')
  );
  
  divToughts.map(element => {
    if (dataset === element.dataset.name) {
      element.parentElement.parentElement.parentElement.parentElement.remove()
    }
  })
}