import React, { useState, createRef } from 'react';
import { IPin } from '../Models';

interface Props {
  pinContent: IPin,
  onChange: (data: IPin) => void,
  show: boolean
}

function PinEditor({ pinContent, onChange, show }: Props) {
  const [pinTitle, setPinTitle] = useState(pinContent.title);
  const [pinBody, setPinBody] = useState(pinContent.body);
  const titleRef = createRef<HTMLTextAreaElement>();
  const bodyRef = createRef<HTMLTextAreaElement>();

  function onChangeTitle(e: React.ChangeEvent<HTMLTextAreaElement>) {
    if(titleRef.current) {
      titleRef.current.style.height = titleRef.current.scrollHeight + 'px';
    }
    const newTitle = e.currentTarget.value;
    setPinTitle(newTitle);
    const update = {
      id: pinContent.id,
      title: newTitle,
      body: pinBody,
    };
    onChange(update);
  }

  function onChangeBody(e: React.ChangeEvent<HTMLTextAreaElement>) {
    if(bodyRef.current) {
      bodyRef.current.style.height = bodyRef.current.scrollHeight + 'px';
    }
    const newBody = e.target.value;
    setPinBody(newBody);
    const update = {
      id: pinContent.id,
      title: pinTitle,
      body: newBody,
    };
    onChange(update);
  }

  return (
    show ?
      <div id={`pin_${pinContent.id}`}>
        <div className="pin_editor">
          <textarea ref={titleRef} className="pin_editor__title" defaultValue={pinContent.title} name='title' onChange={onChangeTitle}/>
          <textarea ref={bodyRef} className="pin_editor__body" autoFocus defaultValue={pinContent.body} name='body' onChange={onChangeBody}/>
        </div>
      </div> :
      null
  );
}

export default PinEditor;
