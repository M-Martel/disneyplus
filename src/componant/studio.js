import React, { Component } from 'react'



//cette page sert a afficher les détails d'un studios (4 au total)
export default class studio extends Component {
    state = {
        studio: [],
    }

    async getstudio(idname) {
        const walt = await fetch(`https://elorri.fr/api/disney-plus/company/${idname}`);
        const data = await walt.json();

        this.setState({
            studio: data
        });

    }
    componentDidMount() {
        this.getstudio(this.props.match.params.idname);

    }


    render() {

        const allstudio = this.state.studio.map(items => {

            return < img src={items.poster} alt="" />

        })

        return (
            <div>studio

                <h1>Bienvenu dans le détail d'un film</h1>

                {allstudio}


            </div>
        )
    }
}
