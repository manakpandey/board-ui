import React from 'react';
import Props from './types';

export default function RadioButton({ name, value, onChange, isSelected, content, label }: Props) {
  const checked = isSelected === value;

  return (
    <div>
      <div className="board_ui__radio">
        <input
          type="radio"
          checked={isSelected === value}
          onChange={e => onChange(e.currentTarget.value)}
          name={name}
          value={value}
          hidden
          id={value}
        />

        <label htmlFor={value} className={`board_ui__radio__label ${checked ? 'board_ui__radio__label_active' : ''}`}>
          {content}
        </label>
      </div>

      {
        label && <div className={`board_ui__radio__label__name ${checked ? 'board_ui__radio__label__name_active' : ''}`}>{ label }</div>
      }
    </div>
  );
}
