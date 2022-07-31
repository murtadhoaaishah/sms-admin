import React, { useState, ReactNode } from 'react'
import { useNavigate } from 'react-router'
import FeeWidget from '../../atom/FeeWidget'
import More from '../../atom/Vectors/More'
import Plus from '../../atom/Vectors/Plus'
import EmptyPage, { emptyPageProp } from '../../pages/EmptyPageContent'
import FeesDetails from '../../pages/FeesDetailsPage'

const Fees = () => {

    const [details, setDetails] = useState(false)

    let fee = [
        {
            basic: 'Basic 1 Fees',
            more: <More />,
            amount: 'NGN305000',
            link: '/dashboard/feesandlevies/feesdetails'

        },
        {
            basic: 'Basic 2 Fees',
            more: <More />,
            amount: 'NGN305000',
            link: '/dashboard/feesandlevies/feesdetails'


        },
        {
            basic: 'Basic 3 Fees',
            more: <More />,
            amount: 'NGN305000',
            link: '/dashboard/feesandlevies/feesdetails'

        },
        {
            basic: 'Basic 4 Fees',
            more: <More />,
            amount: 'NGN305000',
            link: '/dashboard/feesandlevies/feesdetails'

        }

    ]



    return (
        <div>
            {
                !fee.length ? <EmptyPage
                    img={<img src="/public/vectors/feesAndLeviesEmptyPageImage.svg" />}
                    text='You’ve not added any fee'
                    subtext='You’ve not added any fee'
                    cta={{
                        label: 'Add fee',
                        prefixIcon: <Plus />
                    }} />
                    : null}

            <div className='grid grid-cols-4 pt-8 gap-[20px]'>
                {!details && fee.map(({ basic, more, amount }, feeIndex) => <FeeWidget key={`fee_${feeIndex}`} basic={basic} more={more} amount={amount} details={details} setDetails={setDetails} />)}
            </div>

            {details && <FeesDetails />}

        </div>
    )

}

export default Fees
