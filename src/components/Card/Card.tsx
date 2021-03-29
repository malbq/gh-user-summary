import React, { PropsWithChildren, HTMLAttributes } from 'react'
import './Card.sass'

type Props = PropsWithChildren<{}> & HTMLAttributes<HTMLDivElement>

function Card ({ children, className, ...attrs }: Props) {
  return (
    <div
      className={`Card ${className}`}
      data-testid="Card"
      {...attrs}
    >
        {children}
    </div>
  )
}

export default Card
