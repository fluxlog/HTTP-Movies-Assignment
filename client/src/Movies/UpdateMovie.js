import React, { useState } from 'react';
import axios from 'axios'

const UpdateMovie = props => {
    const [movie, setMovie] = useState({
        id: props.match.params.id
    })

    const handleChange = e => {
        setMovie({
            ...movie,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = e => {
        e.preventDefault();
        const formatMovie = {
            ...movie,
            stars: movie.stars.split(','),
        }
        axios
        .put(`http://localhost:5000/api/movies/${props.match.params.id}`, formatMovie)
        .then( res => {
            console.log(res);
            props.history.push('/')
        })
        .catch(err => { console.log(err);
        })
    };

    return (
        <div>
            <p>Edit Movies</p>
            <form onSubmit={handleSubmit}>
        <input
          placeholder="Movie Name"
          name="title"
          onChange={handleChange}/>
        <input
          placeholder="Director"
          name="director"
          onChange={handleChange}/>
        <input
          placeholder="Metascore"
          name="metascore"
          onChange={handleChange}/>
        <input
          placeholder="Stars"
          name="stars"
          onChange={handleChange}/>
        <button type="submit">Update</button>
      </form>
    </div>
  );
}

export default UpdateMovie; 