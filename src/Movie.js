import React, { Component }  from 'react';
import './Movie.css';

class Movie extends Component {
    render() {
        return(
            <div>
                <MoviePost image={this.props.image}/>
                <h1> It's {this.props.title} </h1>
            </div>
            
        )
    }
}

class MoviePost extends Component {
    render() {
        return (
            <img src={this.props.image} alt=""/>
        )
    }
}

export default Movie