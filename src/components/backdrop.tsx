import React, { FC } from 'react';

// type definitions for props
interface Props {
  onFade: string | React.CSSProperties;
  onClick: () => void;
}

const Backdrop: FC<Props> = ({ onFade, onClick }: Props) => {
  const opacity: string | React.CSSProperties = onFade; // variable for possible fade animation (opacity)

  const backdropStyles: object = {
    // css for backdrop
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
