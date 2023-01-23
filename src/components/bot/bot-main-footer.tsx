import React, { FC, useState } from 'react';
import * as styles from '../../styles/button-footer.module.scss';
import discordIcon from '../../images/icons/discord-icon.svg';

const BotMainFooter: FC = () => {
  const [onHover, setOnHover] = useState<string>('brightness(1)'); //variable for the hover effect for the add to discord button

  return (
    <article className={styles.button_footer}>
        <p className={styles.button_footer_text}>
          Integrate the CheatTP-3 in your existing workflow.
        </p>
        {/*download button for windows*/}
        <button
          className={styles.button_footer_bot}
          onMouseEnter={() => setOnHover('brightness(0.75)')}
          onMouseLeave={() => setOnHover('brightness(1)')}
        >
          {/*the onMouseEnter and -Leave is for the fade effect on hover which was not possible in css and the background animation*/}
          <div className={styles.button_footer_bot_background} style={{ filter: onHover }} />
          <img
            className={styles.button_footer_bot_icon}
            src={discordIcon}
            alt='Discord icon'
          />
          <span className={styles.button_footer_bot_text}>Add to Discord</span>
        </button>
      </article>
  );
};
export default BotMainFooter;