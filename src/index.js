import { addAlerts } from './functions/addAlert/addAlerts'
import { addNewTought } from './functions/addNewTought'
import { createErrorAlerts } from './functions/createErrorAlerts'
import { createThougths } from './functions/createThougths'
import { deleteElementByDataset } from './functions/deleteElementByDataset'
import { deleteInputs } from './functions/deleteInputs'
import { hideAlertWithSeconds } from './functions/hideAlertWithSeconds'


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
          createErrorAlerts(data.errors)
          return 
        }
        
        deleteInputs('.js-form')
        addAlerts(
          'success',
          'Pensamiento guardado con exito'
        )

        hideAlertWithSeconds(3000, '.js-info-alert')

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

      addAlerts(
        'success',
        'se elimino con exito el pensamiento'
      )

      hideAlertWithSeconds(3000, '.js-info-alert')
      
    } catch (error) {
      console.log(error)
    }
  })
  
})


