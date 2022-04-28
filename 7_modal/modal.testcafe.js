import { Selector } from 'testcafe';

fixture`TestCafe - Modal`.page`http://127.0.0.1:5500/7_modal/index.html`;

// TODO: Write test and check that modal is opened and closed correctly
// 1. Find the button and click on it
// 2. Check presence of modal
// 3. Click outside of modal
// 4. Check modal is closed


test('Check modal opens', async (t) => {
  const triggerEL = await Selector('.modal-button')
  await t.click(triggerEL)
  const contentEl = await Selector('.modal-content')
  await t.expect(contentEl.visible).ok();
})

test('Check modal closes', async (t) => {
  const triggerEL = await Selector('.modal-button')
  await t.click(triggerEL)
  const modalEl = await Selector('.modal')
  await t.expect(modalEl.visible).ok();
  await t.click(modalEl, { offsetX: 0, offsetY: 0})
  await t.expect(modalEl.visible).notOk();
})
