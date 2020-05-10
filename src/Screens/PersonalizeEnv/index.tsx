import React from 'react';
import Logo from '../../SvgIcons/Logo';
import Block from '../Primitives/Layout';
import Button from '../Primitives/Button';

interface Props {
  onSelect: () => void;
}

export default function InviteBoardRoom({ onSelect }: Props) {
  return (
    <Block>
      <div className="flex justify-between flex-column" style={{ height: '100%' }}>
        <div>
          <Logo width='154' height='18' />
          <div className='h36'>
            Personalise your environment
          </div>
        </div>
        <div>
          <Button onClick={onSelect}>Next</Button>
        </div>
      </div>
    </Block>
  );
}
