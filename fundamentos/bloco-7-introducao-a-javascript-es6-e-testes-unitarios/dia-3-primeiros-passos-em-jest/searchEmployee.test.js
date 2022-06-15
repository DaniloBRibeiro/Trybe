const searchEmployee = require('./searchEmployee.js');

describe('testa a função searchEmployee', () => {
  it('testa se searchEmployee é uma função', () => {
    expect(typeof searchEmployee).toBe('function');
  });
  it('testa o primeiro id com a primeiro detail', () => {
    expect(searchEmployee('8579-6', 'firstName')).toEqual('Ana')
  });
  it('testa o ultimo id com a segundo detail', () => {
    expect(searchEmployee('4678-2', 'lastName')).toEqual('Dodds')
  });
  it('testa o erro ID não identificado', () => {
    expect(() => { searchEmployee('46758-2', 'lastName')}).toThrow()
  });
  it('testa o erro ID inexistente', () => {
    expect(() => { searchEmployee('46758-2', 'lastName')}).toThrowError(new Error("ID não identificada"))
  });
  it('testa o erro Informação indisponível', () => {
    expect(() => { searchEmployee('4678-2', 'lastfName')}).toThrow()
  });
  it('testa o erro Informação indisponível', () => {
    expect(() => { searchEmployee('4678-2', 'lastfName')}).toThrowError(new Error("Informação indisponível"))
  });
});
