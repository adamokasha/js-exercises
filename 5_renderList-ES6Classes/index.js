import List from './List.js'
document.addEventListener("DOMContentLoaded", () => {
  // TODO: create instance of List class
  // TODO: add at least 5 items to it
  // TODO: select #my-list and append the list you created to it
  const groceries = new List();
  groceries.add("Juice");
  groceries.add("Macaroni");
  groceries.add("Cheese");
  groceries.add("Olive Oil");
  groceries.add("Bread");

  const groceryListDiv = document.getElementById("my-list");
  groceryListDiv.appendChild(groceries.items);
});
