import React from 'react';

import { CustomButonContainer } from './custom-button.styles';


const CustomButton = ({ children, ...props }) => (
    <CustomButonContainer {...props}>
        {children}
    </CustomButonContainer>
);



export default CustomButton;