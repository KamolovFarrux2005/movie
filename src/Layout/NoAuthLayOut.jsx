import React from 'react';
import { Outlet } from 'react-router-dom';


const NoAuthlayout = () => {
    return (
        <div>
   
            <Outlet/>
        </div>
    );
}

export default NoAuthlayout;
