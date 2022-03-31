// TODO: define class List
class List {
  constructor() {
    this.items = []
  }
  add(item) {
    this.items.push(item)
    return item
  }
}

export default List
