import React from 'react';
import { useRouteError } from 'react-router-dom';

const ErrorHandle = () => {
    const error = useRouteError()
    
    return (
        <div>
            <div><h1 className='text-4xl'>Ops Error problem</h1>
            <br/>
<p>{error(<div>
    <p className='text-red-500'>{error.statusText || error.message}</p>
    <p>{error.status}</p>
    <p>{error.data}</p>

</div>)}</p>
            </div>
        </div>
    );
};

export default ErrorHandle;