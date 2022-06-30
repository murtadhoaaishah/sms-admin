import React from 'react'
import EmployeeEmptyPageImage from '../../atom/Vectors/EmployeeEmptyPageImage'
import Plus from '../../atom/Vectors/Plus'


import DashboardLayout from '../../Layout/DashboardLayout'
import EmptyPage from '../EmptyPageContent'

const Employees = () => {
    let employees = []
    return (
        <div>
            <DashboardLayout emptypageContent={
                employees.length === 0 ? {
                    img: <EmployeeEmptyPageImage />,
                    text: 'You have not added any parents yet',
                    subtext: 'Click the button below to start adding parents to your school.',
                    cta: {
                        label: 'Add employee',
                        prefixIcon: <Plus />
                    }
                } : undefined
            } title='Employee'>

            </DashboardLayout>
        </div>
    )
}

export default Employees
