import React, { FC, useState } from 'react';
import * as styles from '../../styles/donate/donate-donate.module.scss';
import paypalLogo from '../../images/donate/paypal-logo.svg';

const DonateDonate: FC = () => {
  const [onHover, setOnHover] = useState<string>('brightness(1)'); //variable for the hover effect for the donate with credit card button

  const [currencySelector, setCurrencySelector] = useState<boolean>(false); //variable for enabling the selector to change currencies
  const [currency, setCurrency] = useState<string>('€'); //currently selected currency

  return (
    <section className={styles.donate_donate}>
      <form onSubmit={(event: React.FormEvent<HTMLFormElement>) => event.preventDefault()}>
        {/*option to select if you want toi donate monthly or one-time*/}
        <fieldset>
          <label className={styles.donate_donate_select}>
            <input type='radio' id='monthly' name='donation-type' />
            <div className={`${styles.donate_donate_select_button} ${styles.donate_donate_select_button_left}`}>
              {/*two classes*/}
              <label htmlFor='monthly'>Monthly</label>
            </div>
          </label>

          <label className={styles.donate_donate_select}>
            <input type='radio' id='one-time' name='donation-type' />
            <div className={`${styles.donate_donate_select_button} ${styles.donate_donate_select_button_right}`}>
              {/*two classes*/}
              <label htmlFor='one-time'>One-time</label>
            </div>
          </label>
        </fieldset>

        {/*amount of money you want to donate*/}
        <fieldset>
          <label className={styles.donate_donate_select}>
            <input type='radio' id='eur5' name='donation-amount' />
            <div className={`${styles.donate_donate_select_button} ${styles.donate_donate_select_button_left}`}>
              {/*two classes*/}
              <label htmlFor='eur5'>{currency}5.00</label>
            </div>
          </label>

          <label className={styles.donate_donate_select}>
            <input type='radio' id='eur10' name='donation-amount' />
            <div className={styles.donate_donate_select_button}>
              <label htmlFor='eur10'>{currency}10.00</label>
            </div>
          </label>

          <label className={styles.donate_donate_select}>
            <input type='radio' id='eur20' name='donation-amount' />
            <div className={`${styles.donate_donate_select_button} ${styles.donate_donate_select_button_right}`}>
              {/*two classes*/}
              <label htmlFor='eur20'>{currency}20.00</label>
            </div>
          </label>
        </fieldset>

        <fieldset>
          {/*button to donate with credit card or other methods*/}
          <button
            className={styles.donate_donate_credit_card}
            type='submit'
            onMouseEnter={() => setOnHover('brightness(0.75)')}
            onMouseLeave={() => setOnHover('brightness(1)')}
          >
            {/*the onMouseEnter and -Leave is for the fade effect on hover which was not possible in css and the background animation*/}
            <div className={styles.donate_donate_credit_card_background} style={{ filter: onHover }} />
            <span className={styles.donate_donate_credit_card_text}>Credit Card</span>
          </button>
          {/*button to nonate via paypal*/}
          <button className={styles.donate_donate_paypal}>
            <img src={paypalLogo} alt='PayPal' />
          </button>
        </fieldset>

        <fieldset>
          <button
            className={styles.donate_donate_change_currency}
            onClick={() => setCurrencySelector(!currencySelector)}
          >
            Change Currency
          </button>
          {currencySelector && (
            <select
              className={styles.donate_donate_change_currency_select}
              id='change-currency'
              name='change-currency'
            >
              <option value='euro'>€ Euro</option>
              <option value='us-dollar'>$ US Dollar</option>
            </select>
          )}
        </fieldset>
      </form>
    </section>
  );
};
export default DonateDonate;