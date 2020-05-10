import React from 'react';

const Logo = ({width = '160'}: {width?: string}) => (
  <span>
    <svg width={width} height={width} viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g opacity="0.6">
      <path d="M79.9999 0.0016098L160 48.7448V110.293L79.9999 61.5498V0.0016098Z" fill="#FF9AA2"/>
      <path d="M160 110.479V48.9313L79.9999 97.6745V159.223L160 110.479Z" fill="#8CB2FD"/>
      <path d="M0 110.291L80.0001 61.5482V0L0 48.7432V110.291Z" fill="#FFC39B"/>
      <path d="M80.0001 97.6768V159.225L0 110.482V48.9336L80.0001 97.6768Z" fill="#8DF6D0"/>
      </g>
    </svg>
  </span>
);

export default Logo;

