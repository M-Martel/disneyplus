import React, { Component } from 'react'

// Cette page sert a afficher les détails d'un film
export default class movie extends Component {
    state = {

        movie: {},
    }

    async getmovie(id) {
        const brand = await fetch(`https://elorri.fr/api/disney-plus/movie/${id}`);
        const data = await brand.json();

        this.setState({
            movie: data
        });

    }

    componentDidMount() {
        this.getmovie(this.props.match.params.id);

    }


    render() {

        return (
            <div>

                <h1>Bienvenu dans le détail d'un film</h1>

                {this.state.movie.title}
                {this.state.movie.poster}
                {this.state.movie.description}

            </div>
        )
    }
}
