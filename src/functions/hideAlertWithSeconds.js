export const hideAlertWithSeconds = (miliseconds, className) => {
  setTimeout(() => {
    document.querySelector(className).remove()
  }, miliseconds);
}