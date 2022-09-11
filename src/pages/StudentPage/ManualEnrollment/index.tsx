import React from 'react'
import Button from '../../../atom/Button'
import Input from '../../../atom/Input'
import Dropdown from '../../../atom/Vectors/dropdown'
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
                <Input placeholder='Date of Birth' prefixIcon={<img src='/public/vectors/calendar.svg' />} />
                <Input placeholder='Class' prefixIcon={<Dropdown />} />
            </div>
            <div>
                <Input />
            </div>
            <div>
                <Input placeholder='State' prefixIcon={<Dropdown />} />
                <Input placeholder='City' prefixIcon={<Dropdown />} />
            </div>
            <div>
                <Input placeholder='Date joined' prefixIcon={<img src='/public/vectors/calendar.svg' />} />
            </div>
            <div>
                <Button label='Enroll' />
                <Button label='Cancel' />


            </div>
        </div>
    )
}

export default ManualEnrollment
