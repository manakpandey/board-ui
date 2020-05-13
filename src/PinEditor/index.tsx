import React, { useState, ChangeEvent } from 'react';
import { IPin } from '../Models';

interface Props {
  pinContent: IPin,
  onChange: (data: IPin) => void,
  show: boolean
}

function PinEditor({pinContent, onChange, show}: Props) {

  const [pinTitle, setPinTitle] = useState(pinContent.title);
  const [pinBody, setPinBody] = useState(pinContent.body);

  function onChangeTitle(e: React.ChangeEvent<HTMLTextAreaElement>) {
    const newTitle = e.currentTarget.value;
    setPinTitle(newTitle);
    const update = {
      id: pinContent.id,
      title: newTitle,
      body: pinBody
    };
    onChange(update);
  }

  function onChangeBody(e: React.ChangeEvent<HTMLTextAreaElement>) {
    const newBody = e.target.value;
    setPinBody(newBody);
    const update = {
      id: pinContent.id,
      title: pinTitle,
      body: newBody
    };
    onChange(update);
  }

  return (
    show? 
      <div className="board_ui">
        <div className="pin_editor">
          <div className="pin_editor__title">
            <textarea defaultValue={pinContent.title} name='title' onChange={onChangeTitle}></textarea>
          </div>

          <div className="pin_editor__body" onChange={() => setPinBody}>
            <textarea autoFocus defaultValue={pinContent.body} name='body' onChange={onChangeBody}></textarea>
          </div>
        </div>
      </div>:
    null
  )
}

export default PinEditor;