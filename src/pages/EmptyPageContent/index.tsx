import React, { ReactNode } from 'react'
import Button from '../../atom/Button'
import Plus from '../../atom/Vectors/Plus'
import EmptyPageContent from '../../atom/Vectors/StundentEmptyPageImage'
import "./emptypage.scss"

export type ctaprop = {
    prefixIcon?: ReactNode,
    sufixIcon?: ReactNode,
    label: string;
    onClick?: Function;

}
export type emptyPageProp = {
    text?: string;
    subtext?: string;
    img?: ReactNode;
    cta?: ctaprop;
    label?: string;

}
const EmptyPage = ({ text, subtext, img, cta }: emptyPageProp
) => {
    return (
        <main className='wrapper'>
            <div className='img'>{img}</div>

            <div className='wordings'>
                <h1 className='line1'>{text}</h1>

                <h2 className='line2'>{subtext}</h2>
                {cta && <Button label={cta.label} prefixIcon={cta.prefixIcon} customstyle='w-[10.75rem]' />}
            </div>
        </main>
    )
}

export default EmptyPage
