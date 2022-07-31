import React from 'react'
import Input from '../../atom/Input'
import Button from '../../atom/Button'
import AuthLayout from '../../Layout/AuthLayout'
const SignUp = () => {
    return (
        <AuthLayout>
            <img src="/vectors/logo.svg" alt="logo" className='h-6 mb-10' />
            <h1 className='text-2xl text-center font-medium mb-4'>Sign up</h1>
            <p className='text-base mb-10'>To sign up, fill in your personal details below</p>
            <Input placeholder='First Name' />
            <Input placeholder='Email Address' />
            <Input placeholder='last Name' />
            <Input placeholder='password' />
            <div className='w-[23.375rem]'>
                <Button label='Sign up' />

            </div>


            <aside className='flex flex-row justify-center mt-10'>
                <p className='text-[1rem] font-normal mr-[0.5rem]'>Have an account?</p>
                <a className='text-[#1B72E7] text-[1rem font-medium' href="/dashboard">Log In</a>

            </aside>
        </AuthLayout>
    )
}

export default SignUp
