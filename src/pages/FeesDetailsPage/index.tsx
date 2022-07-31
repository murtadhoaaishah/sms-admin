import { ReactNode } from 'react'
import Export from '../../atom/Export'
import Input from '../../atom/Input'
import Filters from '../../atom/Input/Filters'
import Print from '../../atom/Print'
import SearchInput from '../../atom/SearchInput'
import Dropdown from '../../atom/Vectors/dropdown'
import "./FeesDetails.scss"

const FeesDetails = () => {
    return (
        <div>

            <div className='mt-[43.5px] flex flex-row justify-between  items-center'>
                <h1 className='text-[20px] font-normal text-[#141416]'>Basic 1 Fees</h1>
                <aside className='operations'>
                    <SearchInput />
                    <Filters />
                    <Print />
                    <Export />
                </aside>
            </div>
            <section className='breakdown'>
                <div className='fee-header'>
                    <span className='header1'>FEE NAME</span>
                    <span className='header2'>AMOUNT</span>
                </div>
                <div className='fee-amount'>
                    <span className='fee-name'>Caution fee</span>
                    <Input defaultValue="#5000.00" customstyle='outline-none' />
                </div>
            </section>

        </div>
    )
}

export default FeesDetails
