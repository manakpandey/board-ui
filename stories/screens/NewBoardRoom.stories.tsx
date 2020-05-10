import React, { useState } from 'react';
import { BgLayout } from '../../src/Screens/Primitives/Layout';
import NewBoardRoom from '../../src/Screens/NewBoardRoom';
import BoardRoomInvitation from '../../src/Screens/BoardRoomInvitation';

import '../../src/Screens/Primitives/Layout/index.scss';
import '../../src/Screens/Primitives/Button/index.scss';
import '../../src/Screens/Primitives/Input/index.scss';
import '../../src/Screens/scss/_flex_helpers.scss';
import '../../src/Screens/scss/index.scss';

export function NewBoardRoomStory () {
  const [boardName, setBoardName] = useState('');
  const [invite, setInvite] = useState(false);
  function getBoardRoomName(name: string) {
    setBoardName(name);
    setInvite(true);
  }
  function onClickInvite() {}
  function onClickBoardUrl() {}
  return (
    <BgLayout>
      {invite ? (
        <BoardRoomInvitation name={boardName} onClickNext={onClickBoardUrl} onClickCopy={onClickInvite} />
      ) : (
        <NewBoardRoom onSubmit={getBoardRoomName} />
      )}
    </BgLayout>
  );
}

export default { title: 'Screens' };
