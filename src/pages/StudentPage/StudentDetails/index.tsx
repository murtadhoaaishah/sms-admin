import React, { useState } from 'react'
import Button from '../../../atom/Button'
import Export from '../../../atom/Export'
import Filters from '../../../atom/Input/Filters'
import SearchInput from '../../../atom/SearchInput'
import More from '../../../atom/Vectors/More'
import AuthLayout from '../../../Layout/AuthLayout'
import DashboardLayout from '../../../Layout/DashboardLayout'

const StudentDetails = () => {
    const [selectedStudent, setSelectedStudent] = useState('')
    const studentData = [
        { name: '', key: 'avatar' },
        { name: 'FULL NAME', key: 'full name' },
        { name: 'CLASS', key: 'class' },
        { name: 'GENDER', key: 'gender' },
        { name: 'DATE', key: 'date' },
        { name: '', key: 'action' }
    ]

    const studentTableData = [
        {
            id: '1',
            name: <div>
                <span>Courtney Henry</span>
                <span>jessica.hanson@example.com</span>
            </div>,
            class: 'Grade 1',
            gender: 'Male',
            date: 'Oct. 14, 2021'
        },
        {
            id: '1',
            name: <div>
                <span>Courtney Henry</span>
                <span>jessica.hanson@example.com</span>
            </div>,
            class: 'Grade 1',
            gender: 'Male',
            date: 'Oct. 14, 2021'
        },
        {
            id: '1',
            name: <div>
                <span>Courtney Henry</span>
                <span>jessica.hanson@example.com</span>
            </div>,
            class: 'Grade 1',
            gender: 'Male',
            date: 'Oct. 14, 2021'
        },
        {
            id: '1',
            name: <div>
                <span>Courtney Henry</span>
                <span>jessica.hanson@example.com</span>
            </div>,
            class: 'Grade 1',
            gender: 'Male',
            date: 'Oct. 14, 2021'
        },
        {
            id: '1',
            name: <div>
                <span>Courtney Henry</span>
                <span>jessica.hanson@example.com</span>
            </div>,
            class: 'Grade 1',
            gender: 'Male',
            date: 'Oct. 14, 2021'
        },
        {
            id: '1',
            name: <div>
                <span>Courtney Henry</span>
                <span>jessica.hanson@example.com</span>
            </div>,
            class: 'Grade 1',
            gender: 'Male',
            date: 'Oct. 14, 2021'
        },
        {
            id: '1',
            name: <div>
                <span>Courtney Henry</span>
                <span>jessica.hanson@example.com</span>
            </div>,
            class: 'Grade 1',
            gender: 'Male',
            date: 'Oct. 14, 2021'
        },
    ]
    const data = studentTableData.map((student, index) => ({
        name: student.name,
        class: student.class,
        gender: student.gender,
        date: student.date,
        action: <span onClick={() => setSelectedStudent(student.id)}><More /></span>
    }))
    return (
        <div>
            <DashboardLayout>
                <SearchInput />
                <Filters />
                <Export />
                <Button label='Enrol student' />
            </DashboardLayout>
        </div>
    )
}

export default StudentDetails
