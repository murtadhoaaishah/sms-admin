import React from 'react'
import { Navigate, useNavigate } from 'react-router'
import Plus from '../../atom/Vectors/Plus'
import StudentEmptyPageImage from '../../atom/Vectors/StundentEmptyPageImage'
import DashboardLayout from '../../Layout/DashboardLayout'
import EmptyPage from '../EmptyPageContent'

const Student = () => {
    let student = []
    const navigate = useNavigate()
    return (
        <DashboardLayout emptypageContent={
            student.length === 0 ? {
                img: <StudentEmptyPageImage />,
                text: 'You have not enrolled any student yet',
                subtext: 'Click the button below to start enrolling  students to your school.',
                cta: {
                    label: 'Enroll student',
                    onClick: () => navigate('/studentdetails')
                }
            } : undefined
        } title='Student' >
        </DashboardLayout >
    )
}

export default Student
