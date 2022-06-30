import Dropdown from '../../atom/Vectors/dropdown'
import Plus from '../../atom/Vectors/Plus'
import { Children, ReactNode, useState } from 'react'

const SideNavDropDown = ({ title, children }: { title: string, children: ReactNode }) => {
    const [openModal, setOpenmodal] = useState(true)
    return (
        <div>
            <div onClick={() => setOpenmodal(!openModal)} className='flex justify-between items-center mb-[22px]'>
                <h1>{title}</h1>
                <div>
                    {openModal ? <Dropdown /> : <Dropdown />}

                </div>

            </div>
            {openModal ? <div>{children}</div> : <div className='hidden'>{children}</div>}
        </div>
    )
}

export default SideNavDropDown
