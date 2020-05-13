import React from 'react';
import { Pin } from '../PinArchive';
import { IPin, IBoard } from '../Models';

interface Props {
  boardJson: IBoard,
  updatePin: (p : IPin) => void,
  onDelete: (id: number | string) => void
}

export function Board({ updatePin, boardJson, onDelete }: Props) {

  return (
    <div className="board_ui__board flex flex-wrap">
      {Object.values(boardJson.pins).sort((a: IPin, b: IPin) => a.id > b.id ? -1 : a.id < b.id ? 1 : 0 ).map((p: IPin) => (
        <Pin key={p.id} pinProps={{...p}} onChange={updatePin} onDelete={onDelete} />
      ))}
    </div>
  );
}

