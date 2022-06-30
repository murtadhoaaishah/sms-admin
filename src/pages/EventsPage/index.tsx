import React from 'react'
import ArrowLeft from '../../atom/Vectors/ArrowLeft'
import ArrowRight from '../../atom/Vectors/ArrowRight'
import Grid from '../../atom/Vectors/Grid'
import Icon from '../../atom/Vectors/Icon'
import DashboardLayout from '../../Layout/DashboardLayout'
import "./Events.scss"
import { getMonth } from '../../molecule/Calender/utils'

const Events = () => {
    console.table(getMonth);

    return (
        <div>
            <DashboardLayout title='Events'>
                <section className='topbar'>
                    <div className='date'>
                        <span><ArrowLeft /></span>
                        <span><ArrowRight /></span>
                        <span>May 2020</span>
                    </div>
                    <div className='grid-icon'>
                        <span><Grid /></span>
                        <span><Icon /></span>
                    </div>
                </section>
                <main className='calender'>
                    <div className='day-div'>
                        <span className='day'>Monday</span>
                        <span className='day'>Tuesday</span>
                        <span className='day'>Wednesday</span>
                        <span className='day'>Thursday</span>
                        <span className='day'>Friday</span>
                    </div>
                    <div className={`date-div `}>
                        <div className="date-n-event">
                            <span className="date">1</span>
                            <div className="event-time">
                                <span className="event">PTA Meeting</span>
                                <span className="time">10:am - 2:00pm</span>
                            </div>
                        </div>
                        <span className="date">2</span>
                        <span className="date">3</span>
                        <span className="date">4</span>
                        <span className="date">5</span>
                        <span className="date">8</span>
                        <span className="date">9</span>
                        <span className="date">10</span>
                        <span className="date">11</span>
                        <div className="date-n-event">
                            <span className="date">12</span>
                            <div className="event-time">
                                <span className="event">PTA Meeting</span>
                                <span className="time">10:am - 2:00pm</span>
                            </div>
                        </div>
                        <span className="date">15</span>
                        <span className="date">16</span>
                        <div className="date-n-event">
                            <span className="date">17</span>
                            <div className="event-time">
                                <span className="event">PTA Meeting</span>
                                <span className="time">10:am - 2:00pm</span>
                            </div>
                        </div>
                        <span className="date">18</span>
                        <span className="date">19</span>
                        <span className="date">22</span>
                        <span className="date">23</span>
                        <span className="date">24</span>
                        <span className="date">25</span>
                        <span className="date">26</span>
                    </div>
                </main>
            </DashboardLayout>
        </div >
    )
}

export default Events
