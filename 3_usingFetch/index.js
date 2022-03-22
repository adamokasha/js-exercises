document.addEventListener("DOMContentLoaded", () => {
  // TODO: on button click, usw fetch to get the data from the url below and console.log it in the browser
  // https://jsonplaceholder.typicode.com/posts/1
  document.addEventListener("click", () => {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then((result) => {
        return result.json()
      })
      .then((data) => {
        console.log(data)
      })
  })
});
