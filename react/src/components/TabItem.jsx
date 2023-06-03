import React from 'react'

const TabItem = ({title, index, active, setActive}) => {
    const className = active ? 'border-b-yellow-400 text-white' : 'border-none text-slate-400'
  return (
    <div>
      <div className="px-2">
            <button onClick={() => setActive(title)}>
                <span className={`hover:text-yellow-400 transition-colors border-b-2 duration-300 ${className}`}>
                    {title.toUpperCase()}
                </span>
            </button>
      </div>
    </div>
  )
}

export default TabItem
