import React, { Component } from 'react';
import Genre from './Genre';


class GenresInDb extends Component {
    constructor() {
        super()
        this.state = {
            genresList: []
        }
    }

    componentDidMount() {
        fetch('http://localhost:3001/api/genres')
            .then(res => res.json())
            .then(genres => {return this.setState({
                genresList: genres.data
            })})
            .catch(error => console.log(error))
    }

    
    
    cambiarFondo() {
        let cardBody = document.querySelector("#genreCard")
        cardBody.classList.add("bg-secondary")
    }

    volverFondo() {
        let cardBody = document.querySelector("#genreCard")
        cardBody.classList.remove("bg-secondary")
    }
    
    render() {

        return (
            <React.Fragment>
                {/*<!-- Categories in DB -->*/}
                <div className="col-lg-6 mb-4">
                    <div className="card shadow mb-4">
                        <div id="div_h6" className="card-header py-3">
                            <h6 id="h6" className="m-0 font-weight-bold text-gray-800" onMouseOver={() => this.cambiarFondo()} onMouseOut={() => this.volverFondo()}>Genres in Data Base</h6>
                        </div>
                        <div className="card-body" id='genreCard'>
                            <div className="row">
                                {
                                    this.state.genresList.map((genre, index) => {
                                        return <Genre  {...genre} key={index} />
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>

            </React.Fragment>
        )
    }

}
export default GenresInDb;