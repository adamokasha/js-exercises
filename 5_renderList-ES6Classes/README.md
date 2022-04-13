### Getting started

Install testcafe via: `yarn add global testcafe`

VSCode live server extension uses a random port if not specified in settings.
We want to have a consistent port to use for this exercise and others using testcafe.

To use port 5500 with live server extension:

1. Open VSCode settings.json with `cmd+shift+p`
2. Search `settings`
3. Select `Open Settings (JSON)`
![1](./1.png)
4. Add this line: `"liveServer.settings.port": 5500,`
![2](./2.png)
5. Click the `Go live` button in the status bar on the bottom-right.

Be sure to close the server and reopen it for other exercises!

### 5 - ES6 Classes create a list

For this exercise we will use ES6 Classes to create a class `List` that creates an unordered list of items we pass to it. We will then use testcafe to write a test to check that the list was rendered properly with all the items.

1. Create the `List` class. It should have the following interface:

```
const groceries = new List();

groceries.add("Juice");
groceries.add("Macaroni");
groceries.add("Cheese"):
```

It should then be appended to any existing DOM element like so:
```
const groceryListDiv = document.getElementById("grocery-list");
groceryListDiv.append(groceries.items);
```

2. In `index.js`, make an imaginary list and use the `List` class to build it. Append it to the dev `#my-list` in `index.html`.


3. Write a test using testcafe to check that the list was properly rendered with all the items you came up with in step 2.

#### Hints

- The constructor will have the property that returns our list _items_. This property should be initialized as an unordered list (<ul>) and have list items (<li>) added to it.
- Calling `{list_name}.items` will simply return the property in the constructor.
