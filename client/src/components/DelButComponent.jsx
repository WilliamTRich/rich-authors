import React from 'react';
import axios from 'axios';

// eslint-disable-next-line
export default props => {
    const { id, setLoaded } = props

    const deleteAuthor = e => {
        axios.delete(`http://localhost:8000/api/author/delete/${id}`)
            .then(res => setLoaded(false))
            .catch(err => console.log(err))
    }

    return <button className='btn btn-danger m-2' onClick={deleteAuthor}>Delete</button>
}
