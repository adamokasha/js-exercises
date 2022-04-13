import { Selector } from 'testcafe';

fixture`TestCafe - DOM Manipulation`.page`http://127.0.0.1:5500/5_renderList-ES6Classes/index.html`;

// TODO: Write test and check that 5 items you added are rendered correctly
// 1. find the list
// 2. go over list items
// 3. check that item name corresponds to List class instance

const listToCheck = ['Juice', 'Macaroni', 'Cheese', 'Olive Oil', 'Bread'];

test('Check rendered list length', async (t) => {
  // 1. find the list
  const listItems = await Selector('#rendered-list').child('li');
  const listLength = await listItems.count;
  await t.expect(listLength).eql(listToCheck.length);
})

// 2. go over list items and check text
listToCheck.forEach((text, i) => {
  test(`Check item #${i} text`, async (t) => {
    const listItemText = await Selector('#rendered-list').child('li').nth(i).innerText;
    await t.expect(listItemText).eql(text);
  })
})
