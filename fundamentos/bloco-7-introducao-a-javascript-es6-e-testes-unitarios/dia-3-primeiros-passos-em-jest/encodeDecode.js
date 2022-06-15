function encode(string) {
  string = string.split('');
  for (let i in string) {
    if (string[i] === 'a') {
      string[i] = '1';
    } else if (string[i] === 'e') {
      string[i] = '2';
    } else if (string[i] === 'i') {
      string[i] = '3';
    } else if (string[i] === 'o') {
      string[i] = '4';
    } else if (string[i] === 'u') {
      string[i] = '5';
    }
  }
  string = string.join('');
  return string;
}
function decode(string) {
  string = string.split('');
  for (let i in string) {
    if (string[i] === '1') {
      string[i] = 'a';
    } else if (string[i] === '2') {
      string[i] = 'e';
    } else if (string[i] === '3') {
      string[i] = 'i';
    } else if (string[i] === '4') {
      string[i] = 'o';
    } else if (string[i] === '5') {
      string[i] = 'u';
    }
  }
  string = string.join('');
  return string;
}


const functions = { encode, decode };
module.exports = functions;