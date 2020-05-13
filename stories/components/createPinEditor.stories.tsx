import React, {useState} from 'react';
import { storiesOf } from '@storybook/react';
import Pin from '../../src/Pin';
import PinEditor from '../../src/PinEditor';
import '../../src/scss/index.scss';
import '../../src/Pin/index.scss';
import '../../src/PinEditor/index.scss';
import { IPin } from '../Models';

const initialData = [
  {id: 1, title: "Send team meeting invites", body: "Loren Ipsum dolor sit amet. Loren Ipsum dolor sit amet."},
  {id: 2, title: "Team meeting over", body: "Some dummy text."},
  {id: 3, title: "Title 3", body: "body 3."},
];

function PinController() {
  const [pinData, setPinData] = useState(initialData);

  const [currentSelected, setCurrentSelected] = useState({id: 2, title: "Team meeting over", body: "Some dummy text."});
  const [showPin, setShowPin] = useState(true);

  function onSubmit(data: any){
    const updateArry = pinData.map((s) => {
      // Find the item with the matching id
      if(s.id === data.id) {
      // Return a new object
        return {
          ...s, ...data // copy the existing item
        };
      }
      // Leave every other item unchanged
      return s;
      });

    setPinData(updateArry);
  }

  function onClickHandler(id: number){
    setCurrentSelected(pinData[id]);
    setShowPin(true);
  }

  function onChange(update: IPin) {
    console.log(update);
  }

  return (
    <div className="pin_wrapper">
      {/* { 
        pinData.map((pin, index) => <Pin key={pin.id} index={index} data={pin} onClick={onClickHandler} />)
      } */}
      {
        pinData.map(pinContent => (
          <PinEditor key={pinContent.id} pinContent={pinContent} onChange={onChange} show={showPin} />
        )) 
      }

    </div>
  )
}

storiesOf('Components', module).add('Pin Editor', () => <PinController />);
