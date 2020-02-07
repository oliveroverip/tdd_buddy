const balancedbrackets = require('./balanced-brackets');

test('is empty', () => {
  expect(balancedbrackets('')).toBe("");
});
test('starts with [ and ends with ]', () => {
  expect(balancedbrackets('[')).toBe("FAIL");
  expect(balancedbrackets('][')).toBe("FAIL");
});
test('ends with ]', () => {
  expect(balancedbrackets('[]')).toBe("OK");
});
test('even number of brackets', () => {
  expect(balancedbrackets('[]]')).toBe("FAIL");
  expect(balancedbrackets('[][]')).toBe("OK");
  //test('even number of balanced brackets', () => {
  //expect(balancedbrackets('[]][[]')).toBe("FAIL");
});
