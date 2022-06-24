import React from 'react';

class Pokemon extends React.Component {
  render() {
    const { pokeName, pokeType, pokeImg, pokeWeight } = this.props;
    return (
      <div>
        <img src={[pokeImg]} alt={pokeName} />
        <p>{pokeName}</p>
        <p>{pokeType}</p>
        <p>{pokeWeight}</p>
      </div>
    );
  }
}

export default Pokemon;
