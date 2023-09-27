import React from 'react';
import errorLogo from "../ErrorPage/error.png";

const ErrorPage = () => {
    return (
        <div className='flex justify-center items-center'>
            <img src={errorLogo} alt="" />
        </div>
    );
};

export default ErrorPage;