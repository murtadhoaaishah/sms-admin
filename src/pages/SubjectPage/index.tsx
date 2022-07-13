import React from 'react'
import Plus from '../../atom/Vectors/Plus'
import SubjectEmptyPageImage from '../../atom/Vectors/SubjectEmptyPageImage'
import DashboardLayout from '../../Layout/DashboardLayout'

const Subjects = () => {
    let subject = []
    return (
        <div>
            <DashboardLayout emptypageContent={
                subject.length === 0 ? {
                    img: <SubjectEmptyPageImage />,
                    text: 'You have not added any subject yet',
                    subtext: 'Click the button below to start subjects to your school.'
                    cta: {
                        label: 'Add Subject',
                        prefixIcon: <Plus />
                    }
                } : undefined
            }>

            </DashboardLayout>
        </div>
    )
}

export default Subjects
