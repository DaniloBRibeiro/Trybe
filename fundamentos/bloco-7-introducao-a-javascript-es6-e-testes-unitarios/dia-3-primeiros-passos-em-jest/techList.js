// 5 - A função techList recebe como parâmetros um array contendo uma lista de tecnologias e uma string com um nome. Para cada tecnologia no array a função cria, em ordem alfabética, um objeto com a seguinte estrutura:

// {
//   tech: 'nomeTecnologia',
//   name: name,
// }

const techList = (array, string) => {
  if(array.length === 0) {
    return 'Vazio!'
  }

  const newArray = [];
  for (let index of array.sort()) {
    let obj = new Object();
    obj.tech = index;
    obj.name = string;
    newArray.push(obj);    
  }
  return newArray;
};

module.exports = techList;
