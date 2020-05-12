import React from 'react';
import './index.scss';
import CloseIcon from '../SvgIcons/CloseIcon';


interface Data {
  id: number,
  title: string,
  description: string
}

interface Props {
  data: Data,
  onSubmit: (data: Data) => void,
  closeEditor: () => void
}

function PinEditor({data, onSubmit, closeEditor}: Props) {

  function onSubmitForm(e: any){
    e.preventDefault();
    const new_data: Data = {
      id: data.id,
      title: e.target.title.value,
      description: e.target.description.value
    }
    onSubmit(new_data);
    closeEditor();
  }

  return (
    <div className="overlay">
      <div className="pin_editor">
        <form onSubmit={onSubmitForm}>
          <div className="pin_editor__title">
            <textarea defaultValue={data.title} name='title'></textarea>
            <button type='submit' className="close_btn_wrapper"><CloseIcon /></button>
          </div>

          <div className="pin_editor__description">
            <textarea autoFocus defaultValue={data.description} name='description'></textarea>
          </div>
        </form>
      </div>
    </div>
  )
}

export default PinEditor;