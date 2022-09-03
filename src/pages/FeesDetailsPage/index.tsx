import { ReactNode, useState } from 'react'
import Button from '../../atom/Button'
import Export from '../../atom/Export'
import Input from '../../atom/Input'
import Filters from '../../atom/Input/Filters'
import Print from '../../atom/Print'
import SearchInput from '../../atom/SearchInput'
import { data } from '../../data'
import "./FeesDetails.scss"

const FeesDetails = () => {

    const [isClicked, setIsClicked] = useState(false)

    const remove = (id: number, value: number) => {
        data.filter((data, index) => value === index)

    }

    const filteredValue = data.map((d, index) => {
        return (
            <div className=' flex  w-full'>
                <div className='fee-amount flex-grow'>
                    <span className='fee-name'>{d.name}</span>
                    <div className={`${isClicked && <span><img src="/public/vectors/" alt="Cross.svg" /></span>}`} onClick={() => setIsClicked(true)} onFocus={() => setIsClicked(true)}>
                        <div className='w-[15rem]'>
                            <Input defaultValue={d.value} customstyle='py-[1.375rem]!' align='right' />
                        </div>
                    </div>

                </div>
                <div className=' grid place-items-center w-[30px]'>
                    <img src="/public/vectors/Cross.svg" alt="" className={`${!isClicked ? 'hidden' : 'block'}`} onClick={() => { }} />
                </div>
            </div>
        )
    })

    return (
        <div>

            <div className='mt-[43.5px] flex flex-row justify-between  items-center'>
                <span className='text-[20px] font-normal text-[#141416]'>Basic 1 Fees</span>
                <aside className='operations'>
                    <SearchInput />
                    <Filters />
                    <Print />
                    <Export />
                </aside>
            </div>
            <section className='breakdown '>
                <div className='fee-header'>
                    <span className='header1'>FEE NAME</span>
                    <span className='header2'>AMOUNT</span>
                </div>
                <>
                    <div>
                        {filteredValue}
                    </div>
                    <div className='fee-amount'>
                        <span className='fee-name'>TOTAL</span>
                        <div className=''><Input defaultValue='#305,580.00' customstyle='py-[1.375rem]!' /></div>
                    </div>
                </>
            </section>
            <Button prefixIcon={<img src='/public/vectors/BluePlus.svg' />} label={'Add Fee'} customstyle={'bg-[#FFFFFF] text-[#1B72E7] pr-[14rem]'} />
        </div>
    )
}

export default FeesDetails
