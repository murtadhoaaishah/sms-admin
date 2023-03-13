// import React, { useState } from 'react'
// import Tab from '../../atom/Tab'
// import BulkEnrollment from './BulkEnrollment'
// import ManualEnrollment from './ManualEnrollment'

// const Modal = () => {
//     const [activeTab, setActiveTab] = useState(0)
//     return (
//         <div>
//             <img src="/public/vectors/borderedCross.svg" alt="close" className='top-0 left-0' />
//             <Tab tab={['Manual enrollment', 'Bulk enrollment']} activeTab={activeTab} setActiveTab={setActiveTab} />

//             {activeTab && <ManualEnrollment />}
//             {activeTab && <BulkEnrollment />}

//         </div>
//     )
// }

// export default Modal


import React, { ReactNode, useRef } from 'react'
import ModalOverlay from './ModalOverlay'
import { useClickAway } from 'react-use'
import './Modal.scss'
// import HeadingDescription from '../../atoms/Typography/HeadingDescription'
// import H3 from '../../atoms/Typography/H3'
// import CloseIcon2 from '../../atoms/Vectors/CloseIcon2'

export interface ModalProps {
    openModal?: boolean;
    children?: ReactNode;
    title?: string;
    subtext?: string;
    closeModal?: Function;
    width?: string;
    icon?: ReactNode;
    headingCenter?: boolean;
    textAlign?: string;
}

function Modal({ openModal, icon, children, title, subtext, closeModal = () => { }, width = '500px', headingCenter = false }: ModalProps) {

    const ref = useRef(null)
    useClickAway(ref, () => closeModal())

    return (
        <>
            {/* {openModal && <ModalOverlay></ModalOverlay>}

            <div className={`modal-box  ${openModal ? 'open-modal' : ''}`} style={{ width: width, }} ref={ref}>

                <div className='head'>
                    <div className={"headingText "}>
                        {title && <div className="inline-flex items-center space-x-3">{icon}<H3>{title}</H3></div>}
                        {
                            subtext && <HeadingDescription align='left'>{subtext}</HeadingDescription>
                        }
                    </div>
                    <button onClick={() => closeModal()}> */}
            {/* <CloseIcon2 /> */}
            {/* <img src='/public/vectors/borderedCross.svg' />
                    </button>
                </div>
                <div className="mt-[0px]">
                    {children}
                </div>
            </div> */}
        </>
    )
}

export default Modal