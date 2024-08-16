import {ReactNode, useEffect, useState} from 'react'
import clsx from 'clsx'

type Props = {
    label: ReactNode,
    placeholder?: string,
    hasError?: boolean,
    validationText?: string,
    disabled?: boolean,
    type?: string,
    className?: string,
    onFocus?: () => void;
    onChange: (e?:any, valid?: any) => void;
    onClick?: (e?: any) => void;
    onBlur?: (e?: any) => void;
    name?: string
    value?: string

}

const TextField = ({
    placeholder,
    label,
    hasError,
    value,
    validationText,
    disabled,
    type = 'text',
    className,
    onBlur,
    onFocus,
    onChange,
    onClick,
    name
}: Props) => {
    const [focused, setFocused] = useState(false);
    const [isFilled, setIsFilled] = useState(value !== '');

    useEffect(() => {
      setIsFilled(value !== '');
    }, [value])
    
  

    const handleFocus = () => {
      setFocused(true);
      onFocus?.()
    };
  
    const handleBlur = () => {
      setFocused(false);
      onBlur?.()
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setIsFilled(e.target.value !== '');
      onChange(e)
    };

    const handleClick = () => {
      onClick?.()
    }
  return (
    <div  className={clsx(
      'textfield', className || '',
      {
        'textfield--disabled': disabled,
        'textfield--error': hasError
      }
    )}>
      <div className={clsx(
              'textfield__input',
              {
                'textfield__input--filled': isFilled,
              }
            )} >
          <input 
            type={type}
            id={name}
            name={name}
            value={value}
            className={clsx(
              'desktop-p5-regular'
            )} placeholder={focused ? placeholder : ' '}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onClick={handleClick}
            onChange={(e) => handleChange(e)}
            disabled={disabled}
          />
          <div className='desktop-p5 label'>{label}</div>
      </div>
      {validationText && <p className='desktop-cap-medium'>{validationText}</p>}
    </div>
  )
}

export default TextField