import { storiesOf } from '@storybook/react';
import React from 'react';
import Button from '../../src/components-tobedeleted/Button';
import '../../src/components-tobedeleted/Button/index.scss';
import '../../src/scss/index.scss';


function ButtonController() {
  return  <React.Fragment>
    <Button>
      Active
    </Button>

    <br/> <br/>

    <Button disabled>
      Disabled
    </Button>
  </React.Fragment>
}

storiesOf('Components', module).add('Button', () => <ButtonController />);
