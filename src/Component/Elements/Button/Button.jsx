import React from 'react'

const Button = ({onClick, title}) => {
  return (
    <>
        <button onClick={onClick} className="px-4 py-2 rounded-md bg-slate-800 hover:bg-slate-700 text-white">
            {title}
        </button>
    </>
  )
}

export default Button