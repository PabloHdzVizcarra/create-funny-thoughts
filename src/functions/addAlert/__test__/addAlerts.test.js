const funcs = require('../addAlerts')
const addAlerts = jest.spyOn(funcs, 'addAlerts')

describe("Test in function addAlerts ", () => {

  test('if an alert type and an error message are provided, it should return the alert html element', () => {
    document.body.innerHTML =
      `<div class="js-messages"></div>`
    
    addAlerts('success', 'datos de error')

    expect(
      document.querySelector('.alert-success')
    ).toBeInTheDocument()
  })

})
