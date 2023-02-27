module.exports = function reverse (n) {
  let arr =n.toString().split('');
  return +arr.filter(item => item !== '-').reverse().join('');
}
