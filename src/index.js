import { addAlerts } from './functions/addAlerts'
import { createThougths } from './functions/createThougths'
import { deleteInputs } from './functions/deleteInputs'


document.addEventListener('DOMContentLoaded',() => {

  fetch('http://localhost:3000/api', {
    method: 'GET'
  })
    .then(res => res.json())
    .then(createThougths)
    .catch(console.log)
  
  const form = document.querySelector('.js-form')
  
  form.addEventListener('submit', (event) => {
    event.preventDefault()
    const inputs = Array.from(form.getElementsByTagName("input"))
    const values = inputs.map(input => input.value)

    const dataObj = {
      title: values[0],
      tought: values[1]
    }

    fetch('/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(dataObj)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        deleteInputs('.js-form')
        addAlerts(
          'success',
          'Pensamiento guardado con exito'
        )
      })
      .catch(err => {
        console.log(err)
        addAlerts(
          'danger',
          'Ha ocurrido un error intenta de nuevo'
        )
      })
    
  })
  
})
