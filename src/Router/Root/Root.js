import React from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import Header from '../../Components/Header/Header';

const Root = () => {
    const allData = useLoaderData()
    return (
        <div>
            <Header></Header>
            <Outlet allData={allData}></Outlet>
        </div>
    );
};

export default Root;