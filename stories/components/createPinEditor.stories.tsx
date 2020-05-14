import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import PinEditor from '../../src/PinEditor';
import '../../src/scss/index.scss';
import '../../src/Pin/index.scss';
import '../../src/PinEditor/index.scss';
import { IPin } from '../Models';
// import bootstrap
import 'bootstrap/dist/css/bootstrap-reboot.min.css';

const initialData: { [id: string]: IPin } = {
  '1': { id: '1', title: 'Send team meeting invites', body: 'Loren Ipsum dolor sit amet. Loren Ipsum dolor sit amet.' },
  '2': { id: '2', title: 'Team meeting over', body: 'Some dummy text.' },
  '3': { id: '3', title: 'Title 3', body: 'body 3.' },
};

function PinController() {
  const [pinData, setPinData] = useState(initialData);

  const [currentSelected, setCurrentSelected] = useState({
    id: 2,
    title: 'Team meeting over',
    body: 'Some dummy text.',
  });
  const [showPin, setShowPin] = useState(true);

  function onSubmit(data: any) {
    const updateArry = Object.values(pinData).map((s) => {
      // Find the item with the matching id
      if (s.id === data.id) {
        // Return a new object
        return {
          ...s, ...data, // copy the existing item
        };
      }
      // Leave every other item unchanged
      return s;
    });

    // setPinData(updateArry);
  }

  function onChange(update: IPin) {
    const pin = pinData[update.id];
    if(pin) {
      pinData[pin.id] = {...pin, ...update};
      setPinData({...pinData});
    }
  }

  function onDeletePin(id: string) {

  }

  return (
    <div className="pin_wrapper">
      {/* {
        pinData.map((pin, index) => <Pin key={pin.id} index={index} data={pin} onClick={onClickHandler} />)
      } */}
      {
        Object.values(pinData).map(pinContent => (
          <PinEditor key={pinContent.id} pinContent={pinContent} onChange={onChange}  onDelete={onDeletePin} show={showPin}/>
        ))
      }

    </div>
  );
}

storiesOf('Components', module).add('Pin Editor', () => <PinController/>);
