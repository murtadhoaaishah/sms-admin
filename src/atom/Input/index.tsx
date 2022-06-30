import React from 'react'

type inputprop = {
    placeholder: string;

} & React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
const Input = ({ placeholder }: inputprop) => {
    return (
        <div className='border-[#D3D6DA] rounded-lg border-[1px] overflow-hidden flex w-full mb-6'>
            <input className=' outline-none border-none flex-grow py-[1.125rem] pl-[1.5rem]' placeholder={placeholder} />
        </div>
    )
}

export default Input
