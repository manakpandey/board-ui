import React, {useState} from 'react';
import { storiesOf } from '@storybook/react';
import CreatePinEditor from '../../src/CreatePinEdtitor';


function CreatePinController() {
  const [showCreatePin, setShowCreatePin] = useState(false);
  
  function createPin() {
    console.log('Inside create pin function');
    setShowCreatePin(true);
  }

  return (
    <div>
      <button onClick={createPin}>Create Pin</button>
      {showCreatePin && <CreatePinEditor />}
    </div>
  )
}

storiesOf('Components', module).add('Create Pin Editor', () => <CreatePinController />);
