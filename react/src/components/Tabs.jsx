import React, { useState } from 'react'
import TabItem from './TabItem'

const Tabs = ({list, activeTab, onTabSwitch}) => {
    const active = activeTab === '' ? list[0] : activeTab
  return (
    <div className='sticky z-1900 rounded-lg my-10 bg-gray-900 hover:bg-gray-800 '>
        <div className="container mx-auto flex text-center  py-2 border-b-gray-400 ">
            {
                list.map((item, index) => (
                    <TabItem
                        title={item}
                        key={index}
                        index={index}
                        active={active === item}
                        setActive={(onTabSwitch)}
                    />
                ))
            }
        </div>
    </div>
  )
}

export default Tabs
