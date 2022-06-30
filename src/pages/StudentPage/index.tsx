import React from 'react'
import Plus from '../../atom/Vectors/Plus'
import StudentEmptyPageImage from '../../atom/Vectors/StundentEmptyPageImage'
import DashboardLayout from '../../Layout/DashboardLayout'
import EmptyPage from '../EmptyPageContent'

const Student = () => {
    let student = []
    return (
        <DashboardLayout emptypageContent={
            student.length === 0 ? {
                img: <StudentEmptyPageImage />,
                text: 'You have not enrolled any student yet',
                subtext: 'Click the button below to start enrolling  students to your school.',
                cta: {
                    label: 'Enroll student',

                }
            } : undefined
        } title='Student' >
            <section></section>
        </DashboardLayout >
    )
}

export default Student
