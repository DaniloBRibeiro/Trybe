import React, { Component } from 'react'
// import './Form.css'

class Form extends Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      estadoFavorito: '',
      idade: '',
      carroFavorito: '',

    };
  }


  handleChange(event) {
    this.setState({
      estadoFavorito: event.target.value,
    });
  }

  favCar(event) {
    this.setState({
      carroFavorito: event.target.value,
    });
  }

  idadeLa(event) {
    this.setState({
      idade: event.target.value,
    });
  }

  render() {
    return (
      <div>
        <h1>Estados e React - Tecnologia fantástica ou reagindo a regionalismos?</h1>
        <form className="form">
          <label>
            Diga qual o seu Estado favorito! De React ou do Brasil, você decide! =)
              <textarea name="estadoFavorito" value={this.state.estadoFavorito} onChange={this.handleChange} />
          </label>
          <input
            type="number"
            name="idade"
            value={this.state.idade}
            onChange={this.idadeLa}
          />
          <input
            type="checkbox"
            name="vaiComparecer"
          />
          <select name="cars" id="cars" value={this.state.carroFavorito} onChange={(item) => this.favCar(item.target.value)}>
  <option value="volvo">Volvo</option>
  <option value="saab">Saab</option>
  <option value="mercedes">Mercedes</option>
  <option value="audi">Audi</option>
</select>
        </form>
      </div>
    );
  }
}

export default Form;