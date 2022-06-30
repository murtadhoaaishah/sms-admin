import React from 'react'
import ParentEmptyPageImage from '../../atom/Vectors/ParentEmptyPageImage'
import Plus from '../../atom/Vectors/Plus'
import DashboardLayout from '../../Layout/DashboardLayout'
import EmptyPage from '../EmptyPageContent'

const Parents = () => {
    let parent = []
    return (
        <div>
            <DashboardLayout emptypageContent={
                parent.length === 0 ? {
                    img: <ParentEmptyPageImage />,
                    text: 'You have not added any parents yet',
                    subtext: 'Click the button below to start adding parents to your school.',
                    cta: {
                        label: 'Add Parent',
                        prefixIcon: <Plus />
                    }
                } : undefined
            } title='Parents' >

            </DashboardLayout >
        </div >
    )
}

export default Parents
