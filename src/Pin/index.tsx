import React, { useState } from 'react';
import _ from 'lodash';

interface Props {
  data: {
    id: number,
    title: string,
    body: string
  },
  onClick: (index: number) => void,
  index: number
}

function Pin({data, onClick, index}: Props) {
  console.log(data);

  return (
    <div className="pin_ui" onClick={() => onClick(index)}>
      <div className="pin_ui__title">
        {data.title}
      </div>

      <div className="pin_ui__body">
        {data.body}
      </div>
    </div>

  )
}

export default Pin;