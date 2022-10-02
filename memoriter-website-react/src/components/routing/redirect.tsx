//This component redirects you from the empty default page to the product page

import { FC, useEffect } from 'react';
import { NavigateFunction, useNavigate } from 'react-router-dom';

const Redirect: FC = () => {
    
    const navigate: NavigateFunction = useNavigate();

    useEffect((): void => { //you are redirected to the product page when entering of the default page
        navigate('/product');
    });

    return null;
}

export default Redirect;