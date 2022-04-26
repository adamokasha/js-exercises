import List from './List.js'
import Modal from './Modal.js'

document.addEventListener("DOMContentLoaded", function () {

  // 1. Select the trigger element (button)
  const triggerEl = document.getElementsByClassName("modal-button")[0]

  // 2. Create a list using List class and add items to it
  const destinations = new List()
  destinations.add("Los Angeles")
  destinations.add("Madrid")
  destinations.add("Reykjavik")
  destinations.add("Oslo")

  // 3. Create a div to hold the list
  const contentEl = document.createElement("div")

  // 4. Add the class "modal-content" to the div
  contentEl.classList.add("modal-content")

  // 5. Add the list items to the div
  contentEl.appendChild(destinations.items)

  // 6. Select the modal element
  const modalEl = document.getElementsByClassName("modal")[0]

  // 7. Create a new instance of Modal class and pass the trigger element, modal element and content element as arguments
  const modal = new Modal(triggerEl, modalEl, contentEl)

  // 8. Initialize the Modal class
  modal.init()

})
