import React from 'react'
import { classes } from './../../constants'

export default function Bounce(props) {
  let className = 'bounce'

  if (props.isFixed) className += ` ${classes.IS_FIXED}`

  return (
      <div className={ className }>
          <div className='bounce__inner'/>
      </div>
  )
}
