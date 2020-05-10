import React, { useState } from 'react';
import LogoIcon from '../../SvgIcons/LogoIcon';
import Block from '../Primitives/Layout';
import Button from '../Primitives/Button';
import Input from '../Primitives/Input';

interface Props {
  onSubmit: (e: string) => void;
}

export default function NewBoardRoom({ onSubmit }: Props) {
  const [name, setName] = useState('');

  function onSubmitForm(e: any) {
    e.preventDefault();
    onSubmit(name);
  }

  return (
    <Block>
      <div className="flex justify-between flex-column" style={{height: '100%'}}>
        <div>
          <div className="f20-b300 mb-20">A virtual Boardroom for all those brainstorming sessions.</div>
          <div className="mb-20">
            <LogoIcon />
          </div>
          <div className="f20-b700">Create . Collaborate . Create more</div>
        </div>

        <div>
          {/* 1. create a form to submit the board room name */}
          <form onSubmit={onSubmitForm}>
            <div className="flex items-end">
              <div className="flex-1">
                <Input
                  onChange={v => setName(v)}
                  label="Create your room"
                  info="e.g. Design, Tech, Brainstorming etc"
                  placeholder="Name the room"
                />
              </div>
              <span style={{ marginLeft: 40, marginBottom: 30 }}>
                <Button type="submit" disabled={name.length === 0}>{' > '}</Button>
              </span>
            </div>
          </form>
        </div>
      </div>
    </Block>
  );
}
