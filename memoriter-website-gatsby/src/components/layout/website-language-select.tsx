import React, { FC } from 'react';
import * as styles from '../../styles/layout/website-language-select.module.scss';

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
        <li>English</li>
        <li>Deutsch (Beta)</li>
      </ul>
    </section>
  );
};
export default WebsiteLanguageSelect;