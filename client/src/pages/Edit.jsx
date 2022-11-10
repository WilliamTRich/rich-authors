import React, { useState, useEffect } from 'react';
import AuthFormComponent from '../components/AuthFormComponent';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const Edit = () => {

    const { id } = useParams()
    const [author, setAuthor] = useState()
    const [loaded, setLoaded] = useState(false)
    const [errors, setErrors] = useState([]);
    const navigate = useNavigate()

    useEffect(() => {
        axios.get(`http://localhost:8000/api/author/${id}`)
            .then(res => {
                setAuthor(res.data);
                setLoaded(true);
            })
            .catch(err => console.log(err))

        // eslint-disable-next-line
    }, [])

    const updateAuthor = author => {
        axios.put(`http://localhost:8000/api/author/edit/${id}`, author)
            .then(res => {
                navigate('/')
            })
            .catch(err => {
                const errorResponse = err.response.data.errors; // Get the errors from err.response.data
                const errorArr = []; // Define a temp error array to push the messages in
                for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                    errorArr.push(errorResponse[key].message)
                }
                // Set Errors
                setErrors(errorArr);
            })
    }

    if (loaded) {
        return (
            <div>
                <AuthFormComponent initialName={author.name} onSubmit={updateAuthor} />
                {errors.map((err, index) => <p key={index} style={{
                    color: 'red',
                    fontSize: '2rem'
                }}>{err}</p>)}
            </div>
        )
    }
}

export default Edit;