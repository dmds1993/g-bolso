import React, { Component } from 'react';
import {Link} from 'react-router';

class Home extends Component {

  render() {
    return (
      <div>
  			<div>
  				<h1>Teste Front End Guia Bolso 2017</h1>
  				<p>Clique no link visualizar a listagem de Categorias.</p>
          <Link to={`/categories`}>Visualizar categorias</Link>
  			</div>
  		</div>
    );
  }
}

export default Home;
