import React, {useState} from 'react';
import { storiesOf } from '@storybook/react';
import Pin from '../../src/Pin';
import PinPopup from '../../src/PinEditor';

const initialData = [
  {id: 1, title: "Send team meeting invites", description: "Loren Ipsum dolor sit amet. Loren Ipsum dolor sit amet."},
  {id: 2, title: "Team meeting over", description: "Some dummy text."},
  {id: 3, title: "Title 3", description: "Description 3."},
];

function PinController() {
  const [pinData, setPinData] = useState(initialData);

  const [currentSelected, setCurrentSelected] = useState({id: 2, title: "Team meeting over", description: "Some dummy text."});
  const [showPin, setShowPin] = useState(false);

  function onSubmit(data: any){
    console.log(data);

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

  return (
    <div className="pin_wrapper">
      { 
        pinData.map((pin, index) => <Pin key={pin.id} index={index} data={pin} onClick={onClickHandler} />)
      }

      {
        showPin && <PinPopup data={currentSelected} onSubmit={onSubmit} closeEditor={() => setShowPin(false)} /> 
      }

    </div>
  )
}

storiesOf('Components', module).add('Pin Editor', () => <PinController />);
