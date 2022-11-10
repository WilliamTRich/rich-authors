import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// eslint-disable-next-line
export default props => {

    const { initialName, onSubmit } = props
    const [name, setName] = useState(initialName)

    const handleSubmit = e => {
        e.preventDefault()
        onSubmit({ name })
    }

    return (
        <div>
            <h1>Favorite Authors</h1>
            <Link to={'/'}>Home</Link>
            <h3>Add or Edit Author:</h3>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name: </label>
                    <input type="text" className="form-control" value={name} name='name' onChange={e => setName(e.target.value)} />
                </div>
                <Link to={'/'} className='btn btn-primary m-2'>Cancel</Link>
                <button className='btn btn-primary m-2' type='submit'>Submit</button>
            </form>
        </div>
    )
}
