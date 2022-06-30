import React, { Children, ReactNode } from 'react'
import Navbar from '../atom/Navbar'
import Aside from '../molecule/Aside'
import EmptyPage from '../pages/EmptyPageContent'
import { emptyPageProp } from '../pages/EmptyPageContent'

type dashboardProp = {
    children: ReactNode
    title?: ReactNode;
    emptypageContent?: emptyPageProp | undefined
}

const DashboardLayout = ({ children, title, emptypageContent }: dashboardProp) => {
    return (
        <div className='grid grid-cols-[16.25rem,1fr] overflow-hidden'>
            <Aside />
            <div>
                <Navbar />

                <main className='h-screen overflow-auto pl-[1.5rem] pt-[1.5rem]'>
                    <h1 className='text-[1.5rem] font-medium text-[#141416]'>{title}</h1>
                    {
                        emptypageContent ? <EmptyPage {...emptypageContent} /> : children || null
                    }

                </main>
            </div>



        </div >
    )
}

export default DashboardLayout
