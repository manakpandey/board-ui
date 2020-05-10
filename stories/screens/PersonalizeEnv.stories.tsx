import React from 'react';
import { BgLayout } from '../../src/Screens/Primitives/Layout';
import PersonalizeEnv from '../../src/Screens/PersonalizeEnv';

import '../../src/Screens/Primitives/Layout/index.scss';
import '../../src/Screens/Primitives/Button/index.scss';
import '../../src/Screens/Primitives/Input/index.scss';
import '../../src/Screens/scss/_flex_helpers.scss';
import '../../src/Screens/scss/index.scss';

export function PersonalizeEnvStory () {
  function getUserName() {}
  return (
    <BgLayout>
      <PersonalizeEnv onSelect={getUserName} />
    </BgLayout>
  );
}

export default { title: 'Screens' };
