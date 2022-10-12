import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../Components/Header/Header';

const Root = () => {
    // const allData = useLoaderData()
    return (
        <div>
            <Header></Header>
            <Outlet ></Outlet>
        </div>
    );
};

export default Root;