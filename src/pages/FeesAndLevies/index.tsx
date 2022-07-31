// import React, { ReactNode, useState } from 'react'
// import FeeWidget from '../../atom/FeeWidget'
// import Tab from '../../atom/Tab'
// import More from '../../atom/Vectors/More'
// import DashboardLayout from '../../Layout/DashboardLayout'
// import Fees from './Fees'
// import Levies from './Levies'



// const FeesAndLevies = () => {
//     const [activeTab, setActiveTab] = useState(0)
//     const [feeDetail, setDetail] = useState(false)
//     let fee = [
//         ''
//     ]

//     let feeDetails = []

//     let fees = [
//         {
//             basic: 'Basic 1 Fees',
//             more: <More />,
//             amount: 'NGN305000',
//             link: '/dashboard/feesandlevies/feesdetails'

//         },
//         {
//             basic: 'Basic 2 Fees',
//             more: <More />,
//             amount: 'NGN305000',
//             link: '/dashboard/feesandlevies/feesdetails'


//         },
//         {
//             basic: 'Basic 3 Fees',
//             more: <More />,
//             amount: 'NGN305000',
//             link: '/dashboard/feesandlevies/feesdetails'

//         },
//         {
//             basic: 'Basic 4 Fees',
//             more: <More />,
//             amount: 'NGN305000',
//             link: '/dashboard/feesandlevies/feesdetails'

//         }
//     ]


//     return (
//         <DashboardLayout title="Fees and Levies">
//             <div>
{/* <Tab tab={["Fees", "Levies"]} activeTab={activeTab} setActiveTab={setActiveTab} />
                <main>
                    {activeTab === 0 && <Fees emptyPageContent={!fee.length ? { img: '/public/vectors/exportIcon.svg', text: 'You’ve not added any fee', subtext: 'You’ve not added any fee' } : null}>


                        <div className='flex'>
                            {!feeDetail &&
                                fees.map(({ basic, amount, more }, index) => <FeeWidget basic={basic} more={more} amount={amount} setDetails={setDetail} feeDetail={feeDetail} />)

                            }
                            {feeDetail && <p> i lll</p>}
                        </div>

                    </Fees>}
                    {activeTab === 1 && <Levies />}

                </main> */}
//             </div>
//         </DashboardLayout >
//     )
// }

// export default FeesAndLevies

import { useState } from 'react'
import Tab from '../../atom/Tab'
import DashboardLayout from '../../Layout/DashboardLayout'
import Fees from './Fees'
import Levies from './Levies'
import "./FeesAndLevies.scss"


const FeesAndLevies = () => {
    const [activeTab, setActiveTab] = useState(0)



    return (
        <DashboardLayout title='Fees And Levies'>
            <Tab tab={['Fees', 'Levies']} activeTab={activeTab} setActiveTab={setActiveTab} />


            {activeTab === 0 && <Fees />}
            {activeTab === 1 && <Levies />}
        </DashboardLayout>
    )
}

export default FeesAndLevies

