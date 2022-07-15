import React from 'react';
import { useMemo } from 'react';

export const Hijo = React.memo (({ numero, incrementar }) => {

    console.log('  Me volví a generar :(  ');

    return (
        <button
            className="btn btn-primary mr-3 mt-3 mb-3"
            onClick={ () => incrementar(numero) }
        >
            { numero }
        </button>
    )
})
