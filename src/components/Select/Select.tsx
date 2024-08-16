import { useState, useRef, useEffect } from 'react';
import clsx from 'clsx';
import { AngleDownIcon } from '../../assets';

type Option = {
  value: string;
  label: string;
};

type Props = {
  label: string;
  options: Option[];
  placeholder?: string;
  hasError?: boolean;
  validationText?: string;
  disabled?: boolean;
  className?: string;
  onChange: (value: string) => void;
  value?: string;
  name?: string;
};

const Select = ({
  label,
  options,
  placeholder = 'Select an option',
  hasError = true,
  validationText,
  disabled,
  className,
  onChange,
  value,
  name,
}: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<Option | null>(
    options.find(option => option.value === value) || null
  );
  const [focusedIndex, setFocusedIndex] = useState(-1);
  const selectRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const optionsRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (isOpen && optionsRef.current && focusedIndex >= 0) {
      const focusedOption = optionsRef.current.children[focusedIndex] as HTMLElement;
      focusedOption.scrollIntoView({ block: 'nearest' });
    }
  }, [focusedIndex, isOpen]);

  useEffect(() => {
   if(value === '') setSelectedOption(null)
  }, [value])
  

  const handleToggle = () => {
    if (!disabled) {
      setIsOpen(!isOpen);
      setFocusedIndex(-1);
    }
  };

  const handleSelect = (option: Option) => {
    setSelectedOption(option);
    onChange(option.value);
    buttonRef.current?.focus();
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (disabled) return;

    switch (event.key) {
      case 'ArrowDown':
        event.preventDefault();
        if (!isOpen) {
          setIsOpen(true);
          setFocusedIndex(0);
        } else {
          setFocusedIndex((prevIndex) => (prevIndex + 1) % options.length);
        }
        break;
      case 'ArrowUp':
        event.preventDefault();
        if (!isOpen) {
          setIsOpen(true);
          setFocusedIndex(options.length - 1);
        } else {
          setFocusedIndex((prevIndex) => (prevIndex - 1 + options.length) % options.length);
        }
        break;
      case 'Enter':
      case ' ':
        event.preventDefault();
        if (isOpen && focusedIndex >= 0) {
          handleSelect(options[focusedIndex]);
        } else {
          setIsOpen(true);
        }
        break;
      case 'Escape':
        event.preventDefault();
        setIsOpen(false);
        buttonRef.current?.focus();
        break;
      case 'Tab':
        setIsOpen(false);
        break;
    }
  };

  return (
    <div
      className={clsx('select', className, {
        'select--disabled': disabled,
        'select--error': hasError,
      })}
      ref={selectRef}
    >
      <button
        ref={buttonRef}
        className={clsx('select__input', {
          'select__input--filled': selectedOption,
          'select__input--open': isOpen,
        })}
        type="button"
        onClick={handleToggle}
        onKeyDown={handleKeyDown}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-labelledby={`${name}-label`}
        disabled={disabled}
      >
        
        <div className={clsx(
          "desktop-p5-regular",
          {
            'select--placeholder': placeholder && !selectedOption?.label,
            'select__value': selectedOption?.label,
          }
        )}>
          {selectedOption ? selectedOption.label : placeholder}
        </div>
        <div id={`${name}-label`} className="select__label desktop-p5">
          {label}
        </div>
        <div className={clsx('select__arrow', { 'select__arrow--open': isOpen })}>
          <AngleDownIcon />
        </div>
      </button>
      {isOpen && (
        <ul
          ref={optionsRef}
          className="select__options"
          role="listbox"
          aria-activedescendant={focusedIndex >= 0 ? `${name}-option-${focusedIndex}` : undefined}
        >
          {options.map((option, index) => (
            <li
              key={option.value}
              id={`${name}-option-${index}`}
              className={clsx('select__option desktop-medium', {
                'select__option--selected': selectedOption?.value === option.value,
                'select__option--focused': focusedIndex === index,
              })}
              onClick={() => handleSelect(option)}
              onDoubleClick={() => setIsOpen(false)}
              role="option"
              aria-selected={selectedOption?.value === option.value}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
      {validationText && (
        <p className="desktop-cap-medium select__message" id={`${name}-validation`}>
          {validationText}
        </p>
      )}
    </div>
  );
};

export default Select;