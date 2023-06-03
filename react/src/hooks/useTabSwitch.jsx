import React, {useState, useEffect} from 'react'

const useTabSwitch = ({tabs, defaultTab}) => {

    const [currentTab, setcurrentTab] = useState(defaultTab)


    useEffect(() => {
        setcurrentTab(defaultTab)
    }, [defaultTab])


    const handleTabSwitch = (tab) => {
        setcurrentTab(tab)
    }

    return [currentTab, handleTabSwitch]

}

export default useTabSwitch
