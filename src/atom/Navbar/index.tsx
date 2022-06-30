import React from 'react'
import './nav.scss'
import Avatar from '../Vectors/Avartar'

const Navbar = () => {
    return (

        <nav>
            <div className='notification' >
                <img src="/public/vectors/Notification.svg" alt="notification" />
            </div>

            <div className='admin'>
                <Avatar className='avatar' />
                <p>Admin</p>
            </div>
        </nav>
    )
}

export default Navbar
