import React from 'react';
import { BgLayout } from '../../src/Screens/Primitives/Layout';
import JoinBoardRoom from '../../src/Screens/JoinBoardRoom';

import '../../src/Screens/Primitives/Layout/index.scss';
import '../../src/Screens/Primitives/Button/index.scss';
import '../../src/Screens/Primitives/Input/index.scss';
import '../../src/Screens/scss/_flex_helpers.scss';
import '../../src/Screens/scss/index.scss';

export function JoinBoardRoomStory() {
  function getUserName(name: string) {
    console.log(name);
  }
  return (
    <BgLayout>
      <JoinBoardRoom onSubmit={getUserName} boardName={'display'} />
    </BgLayout>
  );
}

export default { title: 'Screens' };
