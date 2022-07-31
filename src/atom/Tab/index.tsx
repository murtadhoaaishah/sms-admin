import React from 'react'
import './tab.scss'
const Tab = ({ tab, activeTab, setActiveTab }: { tab: Array<string>, activeTab: number, setActiveTab: Function }) => {

    return (
        <div className='flex items-center  border-b-[2px] border-[#EDEFF5]'>
            {tab.map((a, index) => <span key={`tab_${index}`} className={`mr-[40px] pt-[37px] pb-[16px] text-[#777E90] ${activeTab === index && 'active-tab'}`} onClick={() => setActiveTab(index)}>{a}</span>)}
        </div>

    )
}

export default Tab
