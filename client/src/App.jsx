import React, { useState } from 'react';
import { Routes, Route } from "react-router-dom";

//Pages
import Main from './pages/Main';
import Create from './pages/Create';
import Edit from './pages/Edit';


const App = () => {

    const [authors, setAuthors] = useState([])

    return (
        <Routes>
            <Route path='/' element={<Main authorState={[authors, setAuthors]} />} />
            <Route path='/new' element={<Create authorState={[authors, setAuthors]} />} />
            <Route path='/edit/:id' element={<Edit />} />
        </Routes>
    )
}

export default App;