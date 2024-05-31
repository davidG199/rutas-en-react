import React from 'react';
import { Link } from 'react-router-dom';

const Nofound = () => {
    return (
        <>
            <h1 className='ms-5 mt-4'>La pagina no existe f</h1>
            <Link to="/" className='btn btn-success ms-5'>Ir a inicio</Link>
        </>
    );
}

export default Nofound;
