// 4 - Para as funções encode e decode crie os seguintes testes em Jest:
// Teste se encode e decode são funções;
// Para a função encode teste se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5, respectivamente;
// Para a função decode teste se os números 1, 2, 3, 4 e 5 são convertidos nas vogais a, e, i, o, u, respectivamente;
// Teste se as demais letras/números não são convertidos para cada caso;
// Teste se a string que é retornada pelas funções têm o mesmo número de caracteres que a string passada como parâmetro.

const { encode, decode } = require('./encodeDecode.js');

describe('testando as funções encode e decode', () => {
  it('enconde e decode são funçòes', () => {
    expect(typeof encode).toEqual('function');
    expect(typeof decode).toEqual('function');
    expect(encode('aeiou')).toEqual('12345');
    expect(decode('12345')).toEqual('aeiou');
    expect(encode('bcdf')).toEqual('bcdf');
    expect(decode('67890')).toEqual('67890');
    expect(encode('teste').length).toEqual(5);
  });
});
