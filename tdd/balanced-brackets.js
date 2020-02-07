function balancedbrackets(value) {
  if (value == '') {
    return value;
  }
  else if (value[0] != '[' || value[value.length - 1] != ']') {
    return 'FAIL';
  }
  else if (value.length %2 != 0) {
    return 'FAIL';
  }
  return 'OK'
}
module.exports = balancedbrackets;