/**
 * @format
 */
import React from 'react';

type Props = {
  color?: string,
  width?: string,
  onClick?: () => void,
};


const Trash = ({ color = '#C9C9C9', width = '26', onClick = () => {} }: Props) => (
  <span onClick={onClick}><svg xmlns="http://www.w3.org/2000/svg" width={width} height={width} viewBox={`0 0 ${width} ${width}`} fill="none">
    <path
      d="M9 19.6667C9 20.6445 9.83571 21.4445 10.8571 21.4445H18.1429C19.1643 21.4445 20 20.6445 20 19.6667V10H9V19.6667ZM21 7.2222H17.75L17 6H12L11.25 7.2222H8V8.99998H21V7.2222Z"
      fill={color}/>
  </svg></span>
);

export default Trash;
