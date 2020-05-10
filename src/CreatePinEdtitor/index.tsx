import React from 'react';
import MediaPane from '../MediaPane';
import './index.scss';
import '../../src/scss/_components.scss';

export default function CreatePinEditor() {

  return (
    <div className="createPinEditor_ui">
      <div className="flex items-center justify-center">
        <textarea className="text-title b14b" placeholder="Title"></textarea>
      </div>

      <div className="flex">
        <textarea className="text-content b14l" placeholder="Enter text here"></textarea>
      </div>

      <MediaPane />
    </div>
  )
}