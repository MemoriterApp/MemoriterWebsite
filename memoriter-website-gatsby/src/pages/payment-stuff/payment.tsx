import React, {FC} from "react"
import WebsiteLayout from "../../components/layout/website-layout";
import * as styles from '../styles/newsletter/newsletter.module.scss';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';

const stripePromise = loadStripe('pk_test_f3duw0VsAEM2TJFMtWQ90QAT');

const Payment: FC = () => {

    const options = {
        // passing the client secret obtained from the server
        clientSecret: '{{CLIENT_SECRET}}',
      };

    return (
        <Elements stripe={stripePromise} options={options}>
            <h1>Hello world</h1>
        </Elements>
    )
}

export default Payment;
