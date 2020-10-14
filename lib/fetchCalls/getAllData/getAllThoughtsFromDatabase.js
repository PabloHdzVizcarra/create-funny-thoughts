import { insertThoughtsInHtmlElement } from "./insertThoughtsInHtmlElement"

export const getAllThoughtsFromDatabase = async () => {
  await fetch('http://localhost:3000/api', {
    method: 'GET'
  })
    .then(res => res.json())
    .then(insertThoughtsInHtmlElement)
    .catch(console.log)
}