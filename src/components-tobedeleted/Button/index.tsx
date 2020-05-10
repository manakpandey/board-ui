import React from 'react';
import Props from './types';

export default function Button({
  type = 'button',
  children,
  className,
  disabled = false,
  small = false,
  onClick = () => {},
}: Props) {
  return (
    <button
      type={type}
      className={`${className || `board_ui__button board_ui__button__${small ? 'small' : 'medium'}`}`}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
