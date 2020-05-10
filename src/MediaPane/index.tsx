import React, {useState} from 'react';
import Radio from '../../src/components-tobedeleted/Radio';
import '../../src/components-tobedeleted/Radio/index.scss';
import './index.scss';
import '../scss/index.scss';

import Audio from '../../src/SvgIcons/Audio';
import Image from '../../src/SvgIcons/Image';
import OtherMedia from '../../src/SvgIcons/OtherMedia';
import Text from '../../src/SvgIcons/Text';
import CloseIcon from '../../src/SvgIcons/CloseIcon';

function MediaPane() {

  const [selected, setSelected] = useState('text');

  const data = [
    {
      value: 'text',
      content: <Text />,
    },
    {
      value: 'audio',
      content: <Audio />,
    },
    {
      value: 'others',
      content: <OtherMedia />,
    },
    {
      value: 'image',
      content: <Image />,
    },
  ];

  function onChange(value: string) {
    setSelected(value);
  }

  return (

    <div className="flex stickyNotes" style={{position: 'absolute', width: '360px', bottom: '20px'}}>
      {data.map(s => {
        return <Radio value={s.value} onChange={onChange} name={'Data'} content={s.content} isSelected={selected} />;
      })}

      <div style={{ position: 'absolute', bottom: '10px', right: '20px'}}>
        <CloseIcon />
      </div>
    </div>
  )
}

export default MediaPane;