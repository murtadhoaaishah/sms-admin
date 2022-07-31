import React, { ReactNode } from 'react'

type inputprop = {
    placeholder?: string;
    customstyle?: string
    prefixIcon?: ReactNode
    defaultValue?: string

} & React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
const Input = ({ placeholder, customstyle, prefixIcon, defaultValue }: inputprop) => {
    return (
        <div className={`overflow-hidden flex w-full mb-6 border-[#D3D6DA] rounded-lg border-[1px]  py-[1.125rem] pl-[1.5rem] ${customstyle}`}>
            <input className={`outline-none border-none flex-grow]`} placeholder={placeholder} defaultValue={defaultValue} />

        </div>

    )
}

export default Input
