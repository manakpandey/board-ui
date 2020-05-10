import React from 'react';
import Copy from '../../SvgIcons/Copy';
import LogoIcon from '../../SvgIcons/LogoIcon';
import Block from '../Block';
import Button from '../Button';
import Input from '../Input';

interface Props {
  name: string;
  onClickNext: () => void;
  onClickCopy: () => void;
}

export default function InviteBoardRoom({ name, onClickNext, onClickCopy }: Props) {
  return (
    <Block>
      <div className="flex justify-between flex-column" style={{ height: '100%' }}>
        <div>
          <div className="flex items-center mb-20">
            <LogoIcon width="52" />

            <div className="b20l ml-20">
              Your boardroom <span className="b20b primary">{name}</span> is created!
            </div>
          </div>
          <div className="b20l mb-40">
            Now, invite your peers to your boardroom for collaboration by sharing the link.
          </div>

          <div>
            <Input defaultValue={`boardrooomx.com/${name}`} readOnly buttonIcon={<Copy />} buttonFn={onClickCopy} />
          </div>
        </div>
        <div>
          <Button onClick={onClickNext}> To your Boardroom </Button>
        </div>
      </div>
    </Block>
  );
}
