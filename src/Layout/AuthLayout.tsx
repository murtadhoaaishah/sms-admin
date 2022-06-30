import React, { Children, ReactNode } from 'react'

const AuthLayout = ({ children }: { children: ReactNode }) => {
    return (
        <div className="Wrapper">
            <aside className='bg-[#F2F7FD] w-full h-full flex flex-col justify-center px-[5.5rem]'>
                <img src="/vectors/student-card.svg" alt="" />
                <h1 className='text-center font-bold text-xl mb-4'>Manage your school with ease</h1>
                <p className='text-center text-[#777E90]'>Take control of your organisation with our all-in-one solution for schools.</p>
                <div className='flex flex-row justify-center mt-20'>
                    <span className='w-[4rem] h-[3px] bg-[#1B72E7] hover:bg-violet-700 mr-[4px]'></span>
                    <span className='w-[4rem] h-[3px] bg-[#CCDEF7] hover:bg-violet-700 mr-[4px]'></span>
                    <span className='w-[4rem] h-[3px] bg-[#CCDEF7] hover:bg-violet-700 '></span>

                </div>
            </aside>
            <main>
                <div className='mx-auto flex items-center flex-col pt-[8.375rem] w-[23.375rem]'>
                    {children}
                </div>

            </main>
        </div>
    )
}

export default AuthLayout
