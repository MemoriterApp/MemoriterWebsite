import React, { FC } from 'react';
import { Link } from 'gatsby';
import * as styles from '../../styles/layout/website-language-select.module.scss';
import emoji1f1ec_1f1e7 from '../../images/emoji/1f1ec-1f1e7.svg';
import emoji1f1e9_1f1ea from '../../images/emoji/1f1e9-1f1ea.svg';

interface Props { // type definitions for props
  onAnimation: React.CSSProperties;
  onCloseLanguageSelect: () => void;
}

const WebsiteLanguageSelect: FC<Props> = ({ onAnimation, onCloseLanguageSelect }: Props) => {
  const animationStyles: React.CSSProperties = onAnimation; // gets styles for animation from the parent component

  return (
    <section className={styles.website_language_select} style={animationStyles}>
      <div className={styles.website_language_select_close} onClick={() => onCloseLanguageSelect()} />
      <p className={styles.website_language_select_title}>Select Language</p>

      <ul className={styles.website_language_select_languages}>
        <li><Link to=''><img src={emoji1f1ec_1f1e7} alt='🇬🇧' />English</Link></li>
        <li><Link to=''><img src={emoji1f1e9_1f1ea} alt='🇩🇪' />Deutsch (Beta)</Link></li>
      </ul>
    </section>
  );
};
export default WebsiteLanguageSelect;
