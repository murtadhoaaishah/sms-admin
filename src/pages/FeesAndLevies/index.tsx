import React, { useState } from 'react'
import DashboardLayout from '../../Layout/DashboardLayout'
import Fees from './Fees'
import "./FeesAndLevies.scss"
import Levies from './Levies'
const FeesAndLevies = () => {
    const [activeTab, setActiveTab] = useState(0)
    return (
        <DashboardLayout title="Fees and Levies">
            {/* <div>
                <header className='flex items-center border-b-4 border-[#EDEFF5]'>
                    {
                        ["Fees", "Levies"].map((a, index) => <span className={`px-3 py-4 text-[#777E90] ${activeTab == index && "active-tab"}`} onClick={() => setActiveTab(index)}>{a}</span>)
                    }
                </header>
                <main>
                    {activeTab == 0 && <Fees />}
                    {activeTab == 1 && <Levies />}

                </main></div> */}
            <div>
                <header className='flex items-center border-b-[2px] border-[#EDEFF5]]'>
                    {["Fees", "Levies"].map((a, index) => <span className={`mr-[40px] pt-[37px] pb-[18px] text-[#777E90] ${activeTab === index && "active-tab"}`} onClick={() => setActiveTab(index)}>{a}</span>)}
                </header>
                <main>
                    {activeTab === 0 && <Fees />}
                    {activeTab === 1 && <Levies />}

                </main>
            </div>
        </DashboardLayout >
    )
}

export default FeesAndLevies
