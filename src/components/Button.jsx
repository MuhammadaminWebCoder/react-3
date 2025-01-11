import React from 'react'

function button({title,extraClass,onClick,children,type}) {
  return (
    <button onClick={onClick} type={type} className={`py-2 ${extraClass} text-white rounded-md px-4`}>
        {title}
        {children}
    </button>
  )
}

export default button
