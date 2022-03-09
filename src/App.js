import React, { Component } from 'react'
import logo from './logo.png';
import starwars from './logo-starwars.png';
import { Link } from 'react-router-dom';



export default class App extends Component {
  state = {

    lastmovies: [],

    idea: [],

  }


  async getlastmovies() {
    const idnews = await fetch("https://elorri.fr/api/disney-plus/movies");
    const data = await idnews.json();

    this.setState({
      lastmovies: data
    });

  }


  async getidea() {
    const ididea = await fetch("https://elorri.fr/api/disney-plus/suggest");
    const dataidea = await ididea.json();

    this.setState({
      idea: dataidea
    });

  }
  componentDidMount() {
    this.getlastmovies();
    this.getidea();

  }
  render() {


    const newmovies = this.state.lastmovies.map(item => {

      return <Link to={`/movie/${item.id}`}>
        < img src={item.poster} alt="" />
      </Link>
    })


    //  const newmovies = this.state.movies.map(item => {
    //  movies renvoie au tableau dans states, il faut ouvrir les chevron pour le return
    // return < img src={item.poster} /> })
    // img src pour afficher une image et poster est l'attribut disponible dans l'API (le lien).

    const newideas = this.state.idea.map(item => {

      return <Link to={`/movie/${item.id}`}>
        < img src={item.poster} alt="" />
      </Link>
    })

    //faire le .map puis stocker dans une variable et utiliser dans le JSX
    return (
      <div className='contenair'>
        {/* contient tout les éléments */}
        <header className="App-header">
          {/* contient le logo */}
          <img src={logo} className="App-logo" alt="logo" />
        </header>

        <div className='allstar'>
          {/* contient les 4 images des compagnies */}

          <div className='studio'>
            <Link to="/studio/starwars">
              <img src={starwars} className="jedi" alt="" />
            </Link>
          </div>
          <div className='studio'>
            <Link to="/studio/disney">
              <img src='/img/companies/logo-disney.png' alt="" />
            </Link>
          </div>

          <div className='studio'>
            <Link to="/studio/pixar">
              <img src='/img/companies/logo-pixar.png' alt="<wallE" />
            </Link>
          </div>

          <div className='studio'>
            <Link to="/studio/marvel">
              <img src='/img/companies/logo-marvel.png' alt="" />
            </Link>
          </div>

        </div>
        <div className='newmovie'>
          {/* contient les nouveautés: state lastMovies */}
          <h3>Nouveauté </h3>
          {newmovies}
        </div>

        <div className='topmovie'>
          {/* contient les suggestions: state idea */}

          <h3>Suggestions </h3>
          {newideas}
        </div>
      </div >

    )
  }
}



