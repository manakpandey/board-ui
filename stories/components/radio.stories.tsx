import { storiesOf } from '@storybook/react';
import React, { useState } from 'react';
import '../../src/components-tobedeleted/Button/index.scss';
import Radio from '../../src/components-tobedeleted/Radio';
import '../../src/components-tobedeleted/Radio/index.scss';
import Audio from '../../src/SvgIcons/Audio';
import Image from '../../src/SvgIcons/Image';
import OtherMedia from '../../src/SvgIcons/OtherMedia';
import Text from '../../src/SvgIcons/Text';
import '../../src/scss/index.scss';
import './styles.scss';


const data2 = [
  {
    value: 'Bistro',
    label: 'Bistro',
    content: <img src="https://cdn-minio.vrgmetri.com/cdn-web.vrgmetri.com/board-ui/Office.png" />,
  },
  {
    value: 'Office',
    label: 'Office',
    content: <img src="https://cdn-minio.vrgmetri.com/cdn-web.vrgmetri.com/board-ui/Meadows.png" />,
  },
  {
    value: 'Bedroom',
    label: 'Bedroom',
    content: <img src="https://cdn-minio.vrgmetri.com/cdn-web.vrgmetri.com/board-ui/Lakeside.png" />,
  },
  {
    value: 'Lakeside',
    label: 'Lakeside',
    content: <img src="https://cdn-minio.vrgmetri.com/cdn-web.vrgmetri.com/board-ui/Bistro.png" />,
  },
  {
    value: 'Meadows',
    label: 'Meadows',
    content: <img src="https://cdn-minio.vrgmetri.com/cdn-web.vrgmetri.com/board-ui/Bedroom.png" />,
  },
];

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

function ButtonController() {
  const [selected, setSelected] = useState('2');
  const [selected2, setSelected2] = useState('Office');

  function onChange(value: string) {
    setSelected(value);
  }

  function onChange2(value: string) {
    setSelected2(value);
  }

  return (
    <React.Fragment>
      <div className="flex stickyNotes" style={{marginLeft: -20}}>
        {data.map(s => {
          return <Radio value={s.value} onChange={onChange} name={'Data'} content={s.content} isSelected={selected} />;
        })}
      </div>

      <br/> <br/> <br/>

      <div className="flex flex-wrap envVariables" style={{marginLeft: -40}}>
        {data2.map(s => {
          return <Radio value={s.value} onChange={onChange2} label={s.label} name={'Name'} content={s.content} isSelected={selected2} />;
        })}
      </div>

    </React.Fragment>
  );
}

storiesOf('Components', module).add('Button', () => <ButtonController />);
