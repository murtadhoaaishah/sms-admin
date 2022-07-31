import { ReactNode } from 'react'
import Dropdown from '../../Vectors/dropdown'


const Filters = () => {
    return (

        <div className='flex flex-row items-center justify-between px-[17.33px]  border rounded-lg mr-[1rem] w-[11.25rem] h-[48px]'>

            <div className='flex flex-row items-center'>
                < img src="/public/vectors/classIcon.svg" alt="" className='mr-[8.33px]' />
                <span className='basic1 '>Basic 1</span>
            </div >
            <Dropdown />
        </div >
    )
}

export default Filters
