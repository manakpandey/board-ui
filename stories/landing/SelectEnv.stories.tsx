import { storiesOf } from '@storybook/react';
import React from 'react';
import { BgLayout } from '../../src/components-tobedeleted/Block';
import '../../src/components-tobedeleted/Block/index.scss';
import '../../src/components-tobedeleted/Button/index.scss';
import '../../src/components-tobedeleted/Input/index.scss';
import SelectEnv from '../../src/components-tobedeleted/Layouts/SelectEnv';
// import css
import '../../src/scss/index.scss';

function Dashboard() {

  function getUserName(name: string) {
    console.log(name);
  }

  return (
    <BgLayout>
      <SelectEnv onSelect={getUserName} />
    </BgLayout>
  );
}

storiesOf('BoardRoom', module).add('Select Environment', () => <Dashboard />);
