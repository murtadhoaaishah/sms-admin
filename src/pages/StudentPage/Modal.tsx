import React, { useState } from 'react'
import Tab from '../../atom/Tab'
import BulkEnrollment from './BulkEnrollment'
import ManualEnrollment from './ManualEnrollment'

const Modal = () => {
    const [activeTab, setActiveTab] = useState(0)
    return (
        <div>
            <img src="/public/vectors/borderedCross.svg" alt="close" className='top-0 left-0' />
            <Tab tab={['Manual enrollment', 'Bulk enrollment']} activeTab={activeTab} setActiveTab={setActiveTab} />

            {activeTab && <ManualEnrollment />}
            {activeTab && <BulkEnrollment />}

        </div>
    )
}

export default Modal