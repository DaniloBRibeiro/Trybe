const hydrate = (string) => {
  const splitString = string.split('');
  let coposAgua = 0;
  for (index of splitString) {
    const numero = parseInt(index);

    if (numero) {
      coposAgua += numero
    }
  }

  let copo = 'copo';

  if (coposAgua > 1) {
    copo = 'copos'
  }

  return `${coposAgua} ${copo} de água`
}

module.exports = hydrate
