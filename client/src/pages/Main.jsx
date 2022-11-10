import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import DelButComponent from '../components/DelButComponent';

const Main = (props) => {

    const [authors, setAuthors] = props.authorState
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        const cancelToken = axios.CancelToken.source()

        console.log('I am loading')

        axios.get(`http://localhost:8000/api/authors`, { cancelToken: cancelToken.token })
            .then(res => {
                setAuthors(res.data)
                setLoaded(true)
            })
            .catch(err => {
                if (axios.isCancel(err)) console.log('Request Cancelled.')
                else console.log(err)
            })

        return () => {
            cancelToken.cancel()
        }
        // eslint-disable-next-line
    }, [loaded])

    return (
        <div>
            <h1>Favorite Authors</h1>
            <Link to={'/new'} >Add an Author</Link>
            <h3>We have quotes by:</h3>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Author</th>
                        <th scope="col">Actions Available</th>
                    </tr>
                </thead>
                <tbody>
                    {/* Loop through Authors, with edit components. */}
                    {loaded && authors.map((author, index) => {
                        return (
                            <tr key={index}>
                                <td style={{ fontSize: '2rem' }}>{author.name}</td>
                                <td>
                                    <Link to={`/edit/${author._id}`} className='btn btn-primary m-2'>Edit</Link>
                                    <DelButComponent id={author._id} setLoaded={setLoaded} />
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default Main