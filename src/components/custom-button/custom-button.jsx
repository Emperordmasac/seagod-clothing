import React from 'react';

import './custom-button.scss';

const CustomButton = ({ children, isGoogleSignIn, inverted, ...OtherProps }) => (
    <button 
    className={`${inverted ? 'innverted' : ''}  ${
        isGoogleSignIn ? 'google-sign-in' : ''
     } custom-button`}
    {...OtherProps}
    >
        {children}
    </button>
);



export default CustomButton;