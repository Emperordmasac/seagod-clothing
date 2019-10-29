import React from 'react';

import './custom-button.scss';

const CustomButton = ({ children, isGoogleSignIn, ...OtherProps }) => (
    <button 
    className={`${isGoogleSignIn ? 'google-sign-in' : '' } custom-button`}
    {...OtherProps}>
        {children}
    </button>
);



export default CustomButton;