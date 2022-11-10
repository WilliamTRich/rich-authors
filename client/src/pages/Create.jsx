import React, { useState } from 'react';
import AuthFormComponent from '../components/AuthFormComponent';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Create = props => {

    const [authors, setAuthors] = props.authorState
    const navigate = useNavigate()
    const [errors, setErrors] = useState([]);

    const createAuthor = author => {
        axios.post('http://localhost:8000/api/author/new', author)
            .then(res => {
                setAuthors([...authors, author]);
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

    return (
        <div>
            <AuthFormComponent initialName='' onSubmit={createAuthor} />
            {errors.map((err, index) => <p key={index} style={{
                color: 'red',
                fontSize: '2rem'
            }}>{err}</p>)}
        </div>
    )
}

export default Create;