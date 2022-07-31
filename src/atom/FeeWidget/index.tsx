import React, { ReactNode } from 'react'
import './feeWidget.scss'

const FeeWidget = ({ basic, more, amount, setDetails, details }: { basic: string, more: ReactNode, amount: string, setDetails: any, details: boolean }) => {
    return (
        // <div>
        <section className='all-fees'>
            <div className='basic-more'>
                <span className='basic'>{basic}</span>
                <span className='more'>{more}</span>
            </div>
            <span className='amount'>{amount}</span>
            <span className='details' onClick={() => setDetails(true)}>See details</span>
        </section>
        // </div>
    )
}

export default FeeWidget
