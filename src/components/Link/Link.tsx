import clsx from 'clsx'
import React from 'react'
import { MenuLinkType } from '../../utils/types'

type Props = {
    link: MenuLinkType,
    enabled?: boolean,
    className?: string,
    onClick?: () => {}
}

const Link = ({link, className, enabled = false, onClick}: Props) => {
  return (
    <a 
      className={clsx( 
        'link ',
        className || '',
        {
          'link--enabled' : enabled
        }
      )}
      href={link?.target}
      onClick={onClick}
    >
      {link.name}
    </a>
  )
}

export default Link