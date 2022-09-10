import React from 'react'
import Input from '../../../atom/Input'
import './ManualEnrollment.scss'
const ManualEnrollment = () => {
    return (
        <div>
            <span>Enroll a student by entering their details below</span>
            <span><img src="/public/vectors/avatatTL.svg" alt="avatartl" /></span>
            <div>
                <Input placeholder='First Name' />
                <Input placeholder='Last Name' />
            </div>
            <div>
                <Input placeholder='Date of Birth' />
                <Input />
            </div>
        </div>
    )
}

export default ManualEnrollment
