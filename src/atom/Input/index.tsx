import React, { ReactNode } from 'react'

type inputprop = {
    placeholder?: string;
    customstyle?: string
    prefixIcon?: ReactNode
    defaultValue?: string
    align?: 'left' | 'right' | 'end' | 'center'

} & React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
const Input = ({ placeholder, customstyle, prefixIcon, defaultValue, align = 'left' }: inputprop) => {
    return (
        <div className={`overflow-hidden flex w-full border-[#D3D6DA] rounded-lg   py-[1.125rem] pl-[1.5rem] 
             ${customstyle}`}>
            <input className={`outline-none border-none flex-grow `} placeholder={placeholder} defaultValue={defaultValue} style={{ textAlign: align }} />

        </div>

    )
}

export default Input
