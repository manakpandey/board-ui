import React from 'react';
import { IPin } from '../Models';


interface Props {
  onChange: (p : IPin) => void,
  pinProps: IPin,
  onDelete: (id: number | string) => void
}

export function Pin({ pinProps, onChange, onDelete }: Props) {
  function pinContentModified(body: string) {
    onChange({...pinProps, body});
  }

  return (
    <div className='board_ui__pin'>
      <textarea className={`board_ui__pin_yellow`} onChange={(e: any) => pinContentModified(e.target.value)} value={pinProps.body}></textarea>
      <span className="closeBtn" onClick={() => onDelete(pinProps.id)}> x </span>
    </div>
  );
}
