import React from 'react';
import Button from '../Button';

interface Props {
  type?: string,
  label?: string,
  info?: string,
  placeholder?: string,
  onChange?: (e: string) => void,
  defaultValue?: string,
  readOnly?: boolean,
  buttonIcon?: any,
  buttonFn?: () => void
}

export default function Input({
  type = 'text',
  label,
  info,
  placeholder,
  onChange,
  buttonFn,
  buttonIcon,
  defaultValue,
  readOnly = false,
}: Props) {
  return (
    <div className="board_ui__input_wrapper">
      {label && <label className="board_ui__input__label">{label}</label>}
      <div className='board_ui__input_container'>
        <input
          type={type}
          className={`${buttonIcon ? 'board_ui__input board_ui__input__padding_right' : 'board_ui__input'}`}
          placeholder={placeholder}
          defaultValue={defaultValue}
          onChange={onChange ? (e: any) => onChange(e.target.value) : () => {}}
          readOnly={readOnly}
        />
        {
          buttonIcon && <div className={'board_ui__input__btn'}>
            <Button onClick={buttonFn} small> {buttonIcon} </Button>
          </div>
        }
      </div>
      {info && <span className="board_ui__input__info">{info}</span>}
    </div>
  );
}
