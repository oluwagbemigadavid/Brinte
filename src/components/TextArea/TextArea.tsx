import { useEffect, useState } from 'react';
import clsx from 'clsx';

type Props = {
  placeholder: string;
  hasError?: boolean;
  validationText?: string;
  disabled?: boolean;
  className?: string;
  onFocus?: () => void;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>, valid?: boolean) => void;
  onClick?: (e?: any) => void;
  onBlur?: (e?: React.FocusEvent<HTMLTextAreaElement>) => void;
  name?: string;
  value?: string;
  maxWords?: number;
};

const TextArea = ({
  placeholder,
  hasError,
  value,
  validationText,
  disabled,
  className,
  onBlur,
  onFocus,
  onChange,
  onClick,
  name,
  maxWords, 
}: Props) => {
  const [isFilled, setIsFilled] = useState(value !== '');
  const [wordCount, setWordCount] = useState(0);
  const [error, setError] = useState(hasError || false)
  const [message, setMessage] = useState(validationText || '')

  useEffect(() => {
    setWordCount(countWords(value || ''));
    setIsFilled(value !== '');
    setError(hasError || false)
    setMessage(validationText || '')
  }, [value ,hasError, validationText]);

 
  const countWords = (text: string) => {
    return text.trim().split(/\s+/).filter(word => word !== '').length;
  };

  const handleFocus = () => {
    onFocus?.();
  };

  const handleBlur = (e: React.FocusEvent<HTMLTextAreaElement>) => {
    onBlur?.(e);
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newText = e.target.value;
    const wordsArray = newText.trim().split(/\s+/);
    const newWordCount = wordsArray.length;

    if (maxWords && maxWords > 0) {
      if (newWordCount <= maxWords) {
        setIsFilled(newText !== '');
        setWordCount(newWordCount);
        onChange(e, !!newText);
        setError(hasError || false)
        setMessage(validationText || '')
      } else {
        const truncatedText = wordsArray.slice(0, maxWords).join(' ');
        setIsFilled(truncatedText !== '');
        setWordCount(maxWords);
        e.target.value = truncatedText;
        onChange({
          ...e,
          target: {
            ...e.target,
            value: truncatedText
          }
        }, !!truncatedText);
        setError(true)
        setMessage('Word limit reached')
      }
    } else {
      onChange(e, !!newText);
    }
    
  };

  const handleClick = () => {
    onClick?.();
  };

  return (
    <div className={clsx('textarea', className || '', {
      'textarea--disabled': disabled,
      'textarea--error': error,
    })}>
      <div className={clsx('textarea__input', { 'textarea__input--filled': isFilled })}>
        <textarea
          name={name}
          id={name}
          value={value}
          className={clsx('desktop-p5-regular')}
          placeholder={placeholder}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onClick={handleClick}
          onChange={handleChange}
          disabled={disabled}
        />
      </div>
      <div className='textarea__footer'>
        {message && <p className='desktop-cap-medium textarea__message'>{message}</p>}
       {maxWords && <p className='desktop-cap-medium'> {wordCount}/{maxWords}</p>}
      </div>
    </div>
  );
};

export default TextArea;
