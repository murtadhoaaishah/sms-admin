import React from 'react'



const SearchInput = () => {
    return (
        <div className='flex items-center border rounded-lg px-[12px] py-[8px] mr-4 w-[18.75rem] h-[48px]'>
            <img src='/public/vectors/searchIcon.svg' className='pr-[9.34px]' />
            <input placeholder=' Search for anything...' className='font-[normal] text-[14px] text-[#777E90] outline-none border-none' />
        </div>
    )
}

export default SearchInput
