const funcs = require('../addAlerts')
const addAlerts = jest.spyOn(funcs, 'addAlerts')

function outerHTML(node){
  return console.log(node.outerHTML) || new XMLSerializer().serializeToString(node);
}

describe("Test in function addAlerts ", () => {

  test('if an alert type and an error message are provided, it should return the alert html element', () => {
    document.body.innerHTML =
      `<div class="js-messages"></div>
        <p data-testid="good"></p>
      `
    
    addAlerts('success', 'datos de error')

    expect(
      document.querySelector('.alert-success')
    ).toBeInTheDocument()
  })

  test('if the third paramether is provided to the function, it must insert the alert in that particular element', () => {

    document.body.innerHTML = `
      <div class="js-messages"></div>
      <div class="data-test"></div>
    `
    
    addAlerts('success', 'datos de error', '.data-test')
    outerHTML(document.body)

    expect(
      document.querySelector('.alert-success')
    ).toBeInTheDocument()
    
    expect(
      document.querySelector('.js-messages')
    ).not.toContainElement(document.querySelector('.alert'))

  })

  
  


})
