import React, { FC, useState } from 'react';

const DonateDonate: FC = () => {

    const [currency, setCurrency] = useState<string>('€'); //currently selected currency

    return (
        <section>
            <form>
                <fieldset className='donate-donate-select'>
                    <input type='radio' id='monthly' name='donation-type'/>
                    <label htmlFor='monthly'>Monthly</label>
                    <input type='radio' id='one-time' name='donation-type'/>
                    <label htmlFor='one-time'>One-time</label>
                </fieldset>

                <fieldset className='donate-donate-select'>
                    <input type='radio' id='EUR5' name='donation-amount'/>
                    <label htmlFor='EUR5'>{currency}5.00</label>
                    <input type='radio' id='EUR10' name='donation-amount'/>
                    <label htmlFor='EUR10'>{currency}10.00</label>
                    <input type='radio' id='EUR20' name='donation-amount'/>
                    <label htmlFor='EUR20'>{currency}20.00</label>
                </fieldset>

                <button>Credit Card</button>
                <button>PayPal</button>

                <button>Change Currency</button>
                <select id='change-currency' name='change-currency'>
                    <option value='euro'>€ Euro</option>
                    <option value='us-dollar'>$ US Dollar</option>
                </select>
            </form>
        </section>
    );
}

export default DonateDonate;