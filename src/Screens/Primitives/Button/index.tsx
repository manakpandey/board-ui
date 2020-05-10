import React from 'react';

interface Props {
  type?: 'button' | 'submit' | 'reset' | undefined,
  children: any,
  className?: string,
  disabled?: boolean,
  onClick?: () => void,
  small?: boolean
}

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
