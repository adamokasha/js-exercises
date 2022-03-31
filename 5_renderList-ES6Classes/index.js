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

  const groceryListDiv = document.querySelector("#my-list")
  // create ul element
  const groceryList = document.createElement('ul')
  // assign id to ul element
  groceryList.setAttribute('id', 'grocery-list')

  // iterate over array of list groceries
  groceries.items.forEach(item => {
    // create li element
    const li = document.createElement('li')
    // set content for li element (grocery name)
    li.innerHTML = item
    // add individual li to ul element we created earlier
    groceryList.appendChild(li)
  })

  // add complete ul to parent div
  groceryListDiv.appendChild(groceryList)

});
