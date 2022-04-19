### 7 Modal

In this exercise, you are provided with a skeleton modal class.

####

The task in this exercise is to create a list using the previous List class in exercise 5 and render it inside a modal.

The modal html markup consists of three pieces:
1. `triggerEl` or trigger element. This element activates the modal. In this case, we will be using a button.
2. `modalEl` or modal element. This element is the model. It cacts a a container for what we want to render as a modal and includes a dark background.
- When clicking the triggerEl, this element and it content becomes visible by adding the `is-active` class name to the element.
- When clicking outside of the content element (#3), this element will become hidden.
3. `contentEl` or content element. This is what we are rendering as a modal. In this case it will be a div containing a list using the List class.

The `Modal` class takes a three of the above as params and controls toggling the modal on/off.
#### Getting started

1. In Modal.js, fill in the TODOs
2. In index.js, make use of the List class we added earlier and render it within the modal when clicking on the button.
3. Add tests!