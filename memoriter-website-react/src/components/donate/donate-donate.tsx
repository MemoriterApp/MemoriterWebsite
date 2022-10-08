import React, { FC, useState } from 'react';

const DonateDonate: FC = () => {

    const [currency, setCurrency] = useState<string>('€'); //currently selected currency

    return (
        <section className='donate-donate'>
            <form>
                {/*option to select if you want toi donate monthly or one-time*/}
                <fieldset>
                    <label className='donate-donate-select'>
                        <input type='radio' id='monthly' name='donation-type'/>
                        <div className='donate-donate-select-button donate-donate-select-button-left'> {/*two classes*/}
                            <label htmlFor='monthly'>Monthly</label>
                        </div>
                    </label>
                    
                    <label className='donate-donate-select'>
                        <input type='radio' id='one-time' name='donation-type'/>
                        <div className='donate-donate-select-button donate-donate-select-button-right'> {/*two classes*/}
                            <label htmlFor='one-time'>One-time</label>
                        </div>
                    </label>
                </fieldset>

                {/*amount of money you want to donate*/}
                <fieldset className='donate-donate-select'>
                    <label className='donate-donate-select'>
                        <input type='radio' id='eur5' name='donation-amount'/>
                        <div className='donate-donate-select-button donate-donate-select-button-left'> {/*two classes*/}
                            <label htmlFor='eur5'>{currency}5.00</label>
                        </div>
                    </label>

                    <label className='donate-donate-select'>
                        <input type='radio' id='eur10' name='donation-amount'/>
                        <div className='donate-donate-select-button'>
                            <label htmlFor='eur10'>{currency}10.00</label>
                        </div>
                    </label>

                    <label className='donate-donate-select'>
                        <input type='radio' id='eur20' name='donation-amount'/>
                        <div className='donate-donate-select-button donate-donate-select-button-right'> {/*two classes*/}
                            <label htmlFor='eur20'>{currency}20.00</label>
                        </div>
                    </label>
                </fieldset>

                <fieldset>
                    <button>Credit Card</button>
                    <button>PayPal</button>

                    <button>Change Currency</button>
                    <select id='change-currency' name='change-currency'>
                        <option value='euro'>€ Euro</option>
                        <option value='us-dollar'>$ US Dollar</option>
                    </select>
                </fieldset>
            </form>
        </section>
    );
}

export default DonateDonate;