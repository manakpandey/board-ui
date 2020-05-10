import React, { useState } from 'react';
import LogoIcon from '../../SvgIcons/LogoIcon';
import Block from '../Block';
import Button from '../Button';
import Input from '../Input';

interface Props {
  onSubmit: (e: string) => void;
  boardName: string;
}

export default function JoinBoardRoom({ onSubmit, boardName }: Props) {
  const [name, setName] = useState('');

  function onSubmitForm(e: any) {
    e.preventDefault();
    onSubmit(name);
  }

  if (!boardName) {
    return null;
  }

  return (
    <Block>
      <div className="flex justify-between flex-column" style={{ height: '100%' }}>
        <div>
          <div className="b20l mb-20">A virtual Boardroom for all those brainstorming sessions.</div>
          <div className="mb-20">
            <LogoIcon />
          </div>
          <div className="b20b">Create . Collaborate . Create more</div>
        </div>
        <div>
          <div className="b20l mb-40">
            You are entering <span className="b20b primary">{boardName}</span> room.
          </div>

          {/* 1. create a form to submit the user name */}
          <form onSubmit={onSubmitForm}>
            <div className="flex items-end">
              <div className="flex-1">
                <Input
                  onChange={v => setName(v)}
                  label="Display Name"
                  info="e.g. Ronald Ranson"
                  placeholder="Enter your display name"
                />
              </div>
              <span style={{ marginLeft: 40, marginBottom: 30 }}>
                <Button type="submit" disabled={!!!name.length}>
                  {' '}
                  >{' '}
                </Button>{' '}
                {/* Checking if the name field is empty */}
              </span>
            </div>
          </form>
        </div>
      </div>
    </Block>
  );
}
