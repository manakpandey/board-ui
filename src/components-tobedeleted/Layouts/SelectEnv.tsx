import React, { useState } from 'react';
import Logo from '../../SvgIcons/Logo';
import Block from '../Block';
import Button from '../Button';

interface Props {
  onSelect: (e: string) => void;
}

export default function InviteBoardRoom({ onSelect }: Props) {
  const [env, setEnv] = useState('')

  function onClickNext(){
    onSelect(env);
  }

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
          <Button onClick={onClickNext}> Next </Button>
        </div>
      </div>
    </Block>
  );
}
