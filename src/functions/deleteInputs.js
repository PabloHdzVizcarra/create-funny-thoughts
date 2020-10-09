export const deleteInputs = (idElement) => {
  const form = document.querySelector(idElement)
  const inputs = Array.from(form.getElementsByTagName("input"))
  inputs.map(input => input.value = '')

}


