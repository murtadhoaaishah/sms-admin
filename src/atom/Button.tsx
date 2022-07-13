import React, { ReactNode } from 'react'
type prop = {
    label: string;
    customstyle?: string
    prefixIcon?: ReactNode;
    suffixIcon?: ReactNode;

}

const Button = ({ label, customstyle, prefixIcon, suffixIcon }: prop) => {

    return (
        <div className='flex justify-center'>
            <button className={`py-[17px]  text-base font-medium text-[#FFFFFF] bg-[#1B72E7] border-[0.5rem] rounded-lg outline-none border-none flex w-full justify-center items-center ${customstyle}`}>
                {prefixIcon && <span className='pr-[19.33px]'>{prefixIcon}</span>} <span>{label}</span>
                {suffixIcon && <span>{suffixIcon}</span>}
            </button>
        </div>
    )
}

export default Button
