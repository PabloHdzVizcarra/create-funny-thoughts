import { addAlerts } from './functions/addAlerts'
import { deleteInputs } from './functions/deleteInputs'


document.addEventListener('DOMContentLoaded', () => {

  const form = document.querySelector('.js-form')
  
  form.addEventListener('submit', (event) => {
    event.preventDefault()
    const inputs = Array.from(form.getElementsByTagName("input"))
    const values = inputs.map(input => input.value)

    const dataObj = {
      title: values[0],
      tought: values[1]
    }

    console.log(dataObj)


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
          '.js-messages',
          'success',
          'Pensamiento guardado con exito'
        )
      })
      .catch(err => console.log(err))

    
    
    
  })
  
})
