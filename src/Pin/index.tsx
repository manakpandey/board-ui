import React, { useState } from 'react';
import './index.scss';
import _ from 'lodash';
import PinEditor from '../PinEditor';

interface Props {
  data: {
    id: number,
    title: string,
    description: string
  },
  onClick: (index: number) => void,
  index: number
}

function Pin({data, onClick, index}: Props) {
  return (
    <div className="pin_ui" onClick={() => onClick(index)}>
      <div className="pin_ui__title">
        {data.title}
      </div>

      <div className="pin_ui__description">
        {data.description}
      </div>
    </div>

  )
}

export default Pin;