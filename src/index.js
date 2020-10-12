import { addAlerts } from './functions/addAlerts'
import { addNewTought } from './functions/addNewTought'
import { checkForValidationErrorsWhenCreatingThought } from './functions/checkForValidationErrors'
import { createThougths } from './functions/createThougths'
import { deleteElementByDataset } from './functions/deleteElementByDataset'
import { deleteInputs } from './functions/deleteInputs'


document.addEventListener('DOMContentLoaded', async () => {
  
  await fetch('http://localhost:3000/api', {
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

        if (data.errors) {
          return checkForValidationErrorsWhenCreatingThought(
            data.errors
          )
        }
        
        deleteInputs('.js-form')
        addAlerts(
          'success',
          'Pensamiento guardado con exito'
        )
        addNewTought(data)
      })
      .catch(err => {
        console.log(err)
        addAlerts(
          'danger',
          'Ha ocurrido un error intenta de nuevo'
        )
      })
    
  })

  const areaTougths = document.querySelector('.js-toughts')
  areaTougths.addEventListener('click', async (event) => {
    if (event.target.tagName !== 'SPAN') return 

    const idElement = {
      title: event.target.dataset.name
    }
    
    try {
      const resp = await fetch(`http://localhost:3000/api${idElement}`, {
        method: "DELETE",
        headers: {
          'Content-type': "application/json; charset=UTF-8"
        },
        body: JSON.stringify(idElement)
      })
      
      const data = await resp.json()
      deleteElementByDataset(data.title)
      
    } catch (error) {
      console.log(error)
    }
  })
  
})
