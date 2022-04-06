const { Selector } = require('testcafe');

fixture`TestCafe - DOM Manipulation`.page`http://127.0.0.1:5500/4_testcafeDomManipulation/index.html`;

// TODO: Add test to check if button is green and text is 'Clicked' after clicking button
test('Check button colour', async (t) => {
  const btn = await Selector('.button')
  const color = btn.getStyleProperty('background-color')

  await t.expect(color).eql('rgb(209, 65, 65)')
  await t.click(btn)
  await t.expect(color).eql('rgb(0, 128, 0)')
});

test('Check button text', async (t) => {
  const btn = await Selector('.button')
  const text = btn.textContent

  await t.expect(text).eql('Click here')
  await t.click(btn)
  await t.expect(text).eql('Clicked')

})
