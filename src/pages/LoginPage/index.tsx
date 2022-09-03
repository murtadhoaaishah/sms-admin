import React from 'react'
import AuthLayout from '../../Layout/AuthLayout'
import Input from '../../atom/Input'
import Button from '../../atom/Button'

const LoginPage = () => {
    return (
        <AuthLayout>
            <img src="/vectors/logo.svg" alt="logo" className='h-6 mb-10' />
            <h1 className='text-2xl text-center font-medium mb-4'>Log in</h1>
            <p className='text-base mb-10'>To sign up, fill in your personal details below</p>
            <div className='space-y-[24px] w-[23.375rem]'>
                <Input placeholder='First Name' customstyle='border' />
                <Input placeholder='Email Address' className='mb-[1.875rem]' customstyle='border' />
            </div>

            <div className='final-div place-self-end mb-[2.875rem] border rounded-lg my-[30px]'>
                <a className='text-[14px] text-[#1B72E7] font-normal py-[8px] px-[6px]' href='/dashboard'>Forgot password</a>
            </div>
            <div className='bg-[#1B72E7] border-[0.5rem] rounded-lg outline-none border-none overflow-hidden flex w-full justify-center'>
                <Button label='Log in' />
            </div>
            <aside className='flex flex-row justify-center mt-10'>
                <p className='text-[1rem] font-normal mr-[0.5rem]'>don't have an account?</p>
                <a className='text-[#1B72E7] text-[1rem font-medium' href="/dashboard">Sign up</a>
            </aside>
        </AuthLayout>
    )
}

export default LoginPage
