// TODO: define class List
class List {
  constructor() {
    this.items = document.createElement("ul");
  }

  add(item) {
    const listItem = document.createElement("li");
    listItem.innerText = item;
    this.items.appendChild(listItem);
  }
}

export default List;
