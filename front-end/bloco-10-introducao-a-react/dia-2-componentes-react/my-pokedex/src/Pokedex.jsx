import React from 'react';
import Pokemon from './Pokemon';
import pokemons from './data';

class Pokedex extends React.Component {
  render() {
    return (
      <div>
        {pokemons.map((pokemon) => (<Pokemon 
          key={ pokemon.name }
          pokeImg={ pokemon.image }
          pokeName={ pokemon.name }
          pokeType={ pokemon.type }
          pokeWeight={ `${pokemon.averageWeight.value} ${pokemon.averageWeight.measurementUnit}` }
        />))}
      </div>
    );
  }
}

export default Pokedex;
