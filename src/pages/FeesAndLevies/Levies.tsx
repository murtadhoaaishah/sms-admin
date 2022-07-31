import React from 'react'
import FeesAndLeviesEmptyPageImage from '../../atom/Vectors/FeesAndLeviesEmptyPageImage'
import Plus from '../../atom/Vectors/Plus'
import EmptyPage from '../../pages/EmptyPageContent'

const Levies = () => {
    const levy = []
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
            /> : <div></div>}
        </div>
    )
}

export default Levies