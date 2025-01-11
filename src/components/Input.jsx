import React from 'react'

function input({inpAddClass,name,placeholder,type,onChange}) {
  return (
    <input onChange={onChange} className={`${inpAddClass} p-2 outline-none border-[1px] rounded-md border-slate-400`} type={type?type:'text'} name={name} placeholder={placeholder}/>
  )
}

export default input
