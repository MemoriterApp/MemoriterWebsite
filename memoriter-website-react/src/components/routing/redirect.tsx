//This component redirects you from the empty default page to the product page

import { FC, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Redirect: FC = () => {
    
    const navigate = useNavigate();

    useEffect(() => { //you are redirected to the product page when entering of the default page
        navigate('/product');
    });

    return null;
}

export default Redirect;