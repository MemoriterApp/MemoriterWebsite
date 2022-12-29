import React, { FC } from 'react';
import * as styles from '../../styles/layout/window-size-alert.module.scss';

// On too small screens a warning alert will be displayed, because on very small screens
// (e.g. very small phones, smart watches etc.) the page does not display correctly.

const WindowSizeAlert: FC = () => {
  return (
    <div className={styles.window_size_alert_backdrop}>
      {/*When the window or display size is to small, a warning will be shown*/}
      <div className={styles.window_size_alert}>
        {/*window not wide enough*/}
        <p className={styles.window_size_alert_heading}>Issue with device:</p>
        <p>Your screen or window is not wide enough to display the page correctly.</p>
        <p>Please rotate your device or resize your window to continue!</p>
      </div>
    </div>
  );
};
export default WindowSizeAlert;
