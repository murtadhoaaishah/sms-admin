import React from 'react'
import { useNavigate } from 'react-router'
// import FeesAndLevies from '.'
import FeesAndLeviesEmptyPageImage from '../../atom/Vectors/FeesAndLeviesEmptyPageImage'
import More from '../../atom/Vectors/More'
import Plus from '../../atom/Vectors/Plus'
// import DashboardLayout from '../../Layout/DashboardLayout'
// import FeesAndLevees from '../../atom/Vectors/fees&levees'
import EmptyPage from '../EmptyPageContent'

const Fees = () => {
    let fee = [
        {
            basic: 'Basic 1 Fees',
            more: <More />,
            amount: 'NGN305000',
            link: 'See details'

        },
        {
            basic: 'Basic 2 Fees',
            more: <More />,
            amount: 'NGN305000',
            link: 'See details'

        },
        {
            basic: 'Basic 3 Fees',
            more: <More />,
            amount: 'NGN305000',
            link: 'See details'

        },
        {
            basic: 'Basic 4 Fees',
            more: <More />,
            amount: 'NGN305000',
            link: 'See details'

        }
    ]

    const navigate = useNavigate()

    return (
        <div>
            {
                !fee.length ? <EmptyPage
                    // img= <FeesAndLeviesEmptyPageImage />
                    text='You’ve not added any fee'
                    subtext='You’ve not added any fee'
                    cta={{
                        label: 'Add fee',
                        prefixIcon: <Plus />
                    }} /> : <div className='fee-wrapper'>
                    {fee.map(({ basic, more, amount, link }, feeIndex) => <section key={`fee_${feeIndex}`} className='all-fees'>
                        <div className='basic-more'>
                            <span className='basic'>{basic}</span>
                            <span className='more'>{more}</span>
                        </div>
                        <span className='amount'>{amount}</span>
                        <span className='details' onClick={() => navigate('/')}>{link}</span>
                    </section>)}
                </div>
            }
        </div>
    )

}

export default Fees
