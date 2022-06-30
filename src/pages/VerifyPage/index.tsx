import React from 'react'
import Button from '../../atom/Button'
//import './App.css'

type verifyprop = {
    otp: number
} & React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
const VerifyPage = ({ otp }: verifyprop) => {

    return (
        <div>
            <main className='flex flex-col items-center mx-auto w-[25%] pt-[8.656rem]'>
                <img className='h-[1.5625rem] mb-[2.5rem] text-[#141416]' src="/vectors/logo.svg" alt="logo" />
                <p className='text-[2rem] font-medium text-[#141416] bottom-4'>Verify your account</p>
                <p className='text-[1rem] font-normal mb-10'>Please enter the 4 digit code sent to Tosin@gmail.com</p>
                <aside className='flex flex-row '>
                    <span className='h-16 w-16 border-[#D3D6DA] rounded-lg border-[1px] mr-4'></span>
                    <span className='h-16 w-16 border-[#D3D6DA] rounded-lg border-[1px] mr-4'></span>
                    <span className='h-16 w-16 border-[#D3D6DA] rounded-lg border-[1px] mr-4'></span>
                    <span className='h-16 w-16 border-[#D3D6DA] rounded-lg border-[1px] mb-10'></span>
                </aside>
                <div className='bg-[#1B72E7] border-[1px] rounded-lg w-full flex justify-center mb-[3.5625rem]'>
                    <Button label='Confirm code' />
                </div>
                <aside className='flex flex-row items-center'>
                    <p className='mr-4 text-base font-normal'>Didn't get the code?</p>
                    <div className=' final-div border rounded-2xl flex justify-center py-[8px] px-[6px]'>
                        <p className='text-[14px] font-normal text-[#1B72E7]'>Resend in 00:23</p>
                    </div>
                </aside>
            </main>
        </div>
    )
}

export default VerifyPage

