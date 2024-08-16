import React from 'react'
import clsx from 'clsx'

type Props = {
    status: 'operational' | 'partial outage' | 'outage'
}

const StatusIndicator = ({status}: Props) => {
  return (
    <div 
      className={clsx(
        'indicator', {
            'indicator--operational': status === 'operational',
            'indicator--partial': status === 'partial outage',
            'indicator--outage': status === 'outage',
        }
      )}
    >
    </div>
  ) 
}

export default StatusIndicator