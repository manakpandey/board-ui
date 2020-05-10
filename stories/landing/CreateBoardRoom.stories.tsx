import { storiesOf } from '@storybook/react';
import React, { useState } from 'react';
import { BgLayout } from '../../src/components-tobedeleted/Block';
import '../../src/components-tobedeleted/Block/index.scss';
import '../../src/components-tobedeleted/Button/index.scss';
import '../../src/components-tobedeleted/Input/index.scss';
import CreateBoardRoom from '../../src/components-tobedeleted/Layouts/CreateBoardRoom';
import InviteBoardRoom from '../../src/components-tobedeleted/Layouts/InviteBoardRoom';
// import css
import '../../src/scss/index.scss';

function Dashboard() {
  const [boardName, setBoardName] = useState('');
  const [invite, setInvite] = useState(false);

  function getBoardRoomName(name: string) {
    setBoardName(name);
    setInvite(true);
  }

  function onClickInvite() {}

  function onClickBoardUrl() {}

  return (
    <BgLayout>
      {invite ? (
          <InviteBoardRoom name={boardName} onClickNext={onClickBoardUrl} onClickCopy={onClickInvite} />
        ) : (
          <CreateBoardRoom onSubmit={getBoardRoomName} />
        )}
    </BgLayout>
  );
}

storiesOf('BoardRoom', module).add('Create', () => <Dashboard />);
