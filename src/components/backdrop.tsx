import React, { FC } from 'react';

interface Props {
  onFade: string | React.CSSProperties;
  onClick: () => void;
}

const Backdrop: FC<Props> = ({ onFade, onClick }: Props) => {
  const opacity: string | React.CSSProperties = onFade; // variable for possible fade animation (opacity)

  // css for backdrop
  const backdropStyles: object = {
    position: 'fixed',
    zIndex: '3',
    backgroundColor: 'var(--color-backdrop)',
    width: '100%',
    height: '100%',
    left: '0',
    top: '0',
    opacity: opacity, // dynamic style
    transition: 'opacity 800ms',
  };

  return <div style={backdropStyles} onClick={() => onClick()} />;
};
export default Backdrop;
