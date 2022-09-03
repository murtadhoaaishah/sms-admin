import React from 'react'
import Button from '../../atom/Button'
import Export from '../../atom/Export'
import Input from '../../atom/Input'
import Filters from '../../atom/Input/Filters'
import Print from '../../atom/Print'
import SearchInput from '../../atom/SearchInput'
import FeesAndLeviesEmptyPageImage from '../../atom/Vectors/FeesAndLeviesEmptyPageImage'
import Plus from '../../atom/Vectors/Plus'
import EmptyPage from '../../pages/EmptyPageContent'

const Levies = () => {
    const levy = [{}]
    return (
        <div>
            {!levy.length ? <EmptyPage
                img={<img src="/public/vectors/feesAndLeviesEmptyPageImage.svg" />}
                text='You’ve not added any levy'
                subtext='Click on the button below to add a new levy.'
                cta={{
                    prefixIcon: <Plus />,
                    label: 'Add levy'
                }}
            /> : null}
            <div>

                <div className='mt-[43.5px] flex flex-row justify-between  items-center'>
                    <span className='text-[20px] font-normal text-[#141416]'>Basic 1 Levies</span>
                    <aside className='operations'>
                        <SearchInput />
                        <Filters />
                        <Print />
                        <Export />
                    </aside>
                </div>
                <section className='breakdown'>
                    <div className='fee-header'>
                        <span className='header1'>LEVIE NAME</span>
                        <span className='header2'>AMOUNT</span>
                    </div>
                    <div className='fee-amount'>
                        <span className='fee-name'>Late Payment</span>
                        <div className=''><Input defaultValue='#5000' customstyle='py-[1.375rem]!' /></div>
                    </div>
                    <div className='fee-amount'>
                        <span className='fee-name'>Penalty</span>
                        <div className=''><Input defaultValue='#1000' customstyle='py-[1.375rem]!' /></div>
                    </div>

                </section>
                <Button prefixIcon={<img src='/public/vectors/BluePlus.svg' />} label={'Add Fee'} customstyle={'bg-[#FFFFFF] text-[#1B72E7]'} />
            </div>
        </div>
    )
}

export default Levies