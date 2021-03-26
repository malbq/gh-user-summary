import React, { PropsWithChildren, HTMLAttributes } from 'react'
import './Card.sass'

function Card ({ children, className }: PropsWithChildren<{}> & HTMLAttributes<HTMLDivElement>) {
  return <div className={`Card ${className}`}>{children}</div>
}

export default Card
