import { insertThoughtsInHtmlElement } from "./insertThoughtsInHtmlElement"

export const getAllThoughtsFromDatabase = async () => {
  const url = location.origin
  await fetch(`${url}/api`, {
    method: 'GET'
  })
    .then(res => res.json())
    .then(insertThoughtsInHtmlElement)
    .catch(console.log)
}