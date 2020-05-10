import { storiesOf } from '@storybook/react';
import React from 'react';
import { BgLayout } from '../../src/components-tobedeleted/Block';
import '../../src/components-tobedeleted/Block/index.scss';
import '../../src/components-tobedeleted/Button/index.scss';
import '../../src/components-tobedeleted/Input/index.scss';
import JoinBoardRoom from '../../src/components-tobedeleted/Layouts/JoinBoardRoom';
// import css
import '../../src/scss/index.scss';

function Dashboard() {

  function getUserName(name: string) {
    console.log(name);
  }

  return (
    <BgLayout>
      <JoinBoardRoom onSubmit={getUserName} boardName={'display'} />
    </BgLayout>
  );
}

storiesOf('BoardRoom', module).add('Join', () => <Dashboard />);
