import React from 'react'
import clsx from 'clsx'
import { LoaderIcon } from '../../assets'

type Props = {
  children: any,
  className?: string,
  variant?: string,
  disabled?: boolean,
  type?: "button" | "submit" | "reset" | undefined,
  loading?: boolean,
  onClick?: () => {},
}

const Button = ({
  className,
  variant = 'primary', 
  disabled,
  loading,
  children,
  type = "button",
  onClick,
}: Props) => {
  return (
    <button className={clsx(
      'button desktop-p5',
      className,
      {
        'button--primary': variant === 'primary',
        'button--secondary': variant === 'secondary',
        'button--tertiary': variant === 'tertiary',
        'button--disabled': disabled || loading,
        'button--loading': loading,
      }
    )}
    type={type}
    disabled = {disabled}
    onClick={onClick}
    >
      {loading && <LoaderIcon className='loader' />}
      {children}
    </button>
  )
}

export default Button