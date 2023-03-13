import { useState } from 'react'
// import ArrowUp from '../../atom/Vectors/RedArrowUp'
// import Calender from '../../atom/Vectors/Calender'
// import Messanger from '../../atom/Vectors/Messanger'
// import Telephone from '../../atom/Vectors/Telephone'
import DashboardLayout from '../../Layout/DashboardLayout'
import './dashboard.scss'
import GreenArrowUp from '../../atom/Vectors/GreenArrowUp'
import RedArrowUp from '../../atom/Vectors/RedArrowUp'
import SecondCalender from '../../atom/Vectors/SecondCalender'
import Dropdown from '../../atom/Vectors/dropdown'
import Chartt from '../../molecule/chart'
import Shape from '../../atom/Vectors/Shape'
import ArrowDown from '../../atom/Vectors/ArrowDown'
import More from '../../atom/Vectors/More'
import Table from '../../atom/Table'

const DashboardPage = () => {
    const [selectedId, setSelectedId] = useState("")
    const heading = [
        { name: '', key: 'arrow' },
        { name: 'NAME', key: 'name' },
        { name: 'AMOUNT', key: 'amount' },
        { name: 'PAID VIA', key: 'paid_via' },
        { name: 'STATUS', key: 'status' },
        { name: 'DATE', key: 'date' },
        { name: '', key: 'action' }
    ]

    const tableData = [
        {
            id: '1',
            arrow: <ArrowDown />,
            name: 'Martin Geidt',
            amount: '#5000',
            paidvia: 'Remita',
            status: <span className='success px-[10px] py-[4px] text-[#15A336] rounded-lg'>success</span>,
            date: 'Oct. 14, 2021',

        },
        {
            id: '2',
            arrow: <ArrowDown />,
            name: 'Martin Geidt',
            amount: '#5000',
            paidvia: 'Remita',
            status: <span className='success px-[10px] py-[4px] text-[#15A336] rounded-lg'>success</span>,
            date: 'Oct. 14, 2021',
        },
        {
            id: '3',
            arrow: <ArrowDown />,
            name: 'Martin Geidt',
            amount: '#5000',
            paidvia: 'Remita',
            status: <span className='success px-[10px] py-[4px] text-[#15A336] rounded-lg'>success</span>,
            date: 'Oct. 14, 2021',

        },
        {
            id: '4',
            arrow: <ArrowDown />,
            name: 'Martin Geidt',
            amount: '#5000',
            paidvia: 'Remita',
            status: <span className='success px-[10px] py-[4px] text-[#15A336] rounded-lg'>success</span>,
            date: 'Oct. 14, 2021',
        }

    ]

    const data = tableData.map((item, itemIndex) => ({
        id: item.id,
        arrow: item.arrow,
        name: item.name,
        amount: item.amount,
        paid_via: item.paidvia,
        status: item.status,
        date: item.date,
        action: <span onClick={() => setSelectedId(item.id)}><More /></span>
    }))



    const statistics = [
        {
            heading: 'Total Students',
            number: '32,450',
            percentage: <div className=' percentage-arrow flex flex-row items-center rounded-lg  px-[8px]'>
                <span className='green-percentage'>26%</span>
                <span> <GreenArrowUp /></span>
            </div>
        },
        {
            heading: 'Total Employees',
            number: '32,450',
            percentage: <div className=' red-percentage-arrow flex flex-row items-center rounded-lg  px-[8px]'>
                <span className='red-percentage'>26%</span>
                <span> <RedArrowUp /></span>
            </div>
        },
        {
            heading: 'Total Events',
            number: '32,450',
            percentage: <div className=' percentage-arrow flex flex-row items-center rounded-lg  px-[8px]'>
                <span className='green-percentage'>26%</span>
                <span> <GreenArrowUp /></span>
            </div>
        },
        {
            heading: 'Total Vendors',
            number: '32,450',
            percentage: <div className=' percentage-arrow flex flex-row items-center rounded-lg  px-[8px]'>
                <span className='green-percentage'>26%</span>
                <span> <GreenArrowUp /></span>
            </div>

        }
    ]

    const communication = [
        {
            icon: <img src="/public/vectors/telephone.svg" alt="" />,
            action: 'Schedule a conference call/or send message',
            details: 'We use these details to match you with the right students'
        },
        {
            icon: <img src="/vectors/calendar.svg" alt="" />,

            action: 'Setup your calendar',
            details: 'We use these details to match you with the right students'
        },
        {
            icon: <img src="/public/vectors/message.svg" alt="" />,
            action: <span className='line-through'>Schedule a conference call/or send message</span>,
            details: 'We use these details to match you with the right students'
        }
    ]
    return (
        <DashboardLayout title={<p className='header'><span>Welcome,</span> <span className='gwen'>Gwen School</span> 👋</p>}>
            <main className='dashboard-page'>
                <section className='statistics'>{statistics.map(({ heading, number, percentage }, statisticsIndex) =>
                    <div key={`statistics_${statisticsIndex}`} className={`data flex  justify-left items-center ${statisticsIndex == statistics.length - 1 && ' border-0'}`} >
                        <span className={`py-3 ${statisticsIndex == 0 ? " flex flex-col self-start" : statisticsIndex == statistics.length - 1 ? 'flex self-end flex-col' : ''}`}>
                            <span className='heading'>{heading}</span>
                            <div className='percentage-number'>
                                <span className='number'> {number}</span>
                                <div >
                                    <span>{percentage}</span>

                                </div>
                            </div>
                        </span>
                    </div>
                )}</section>
                <p className='things'>Things to do</p>
                <aside className='communication-wrapper'>
                    {communication.map(({ icon, action, details }, communicationIndex) =>
                        <div key={`communication_${communicationIndex}`} className='communication'>
                            <div className='communication-icon'>{icon}</div>
                            <div className='action-details'>
                                <span className='action-span'>{action}</span>
                                <span className='details-span'>{details}</span>
                            </div>
                        </div>
                    )}
                </aside>
                <section className='grading-div'>
                    <span className='termly-span'>Termly grade comparison</span>
                    <div className='calender-wrapper'>
                        <SecondCalender className='second-calender' />
                        <span className='alltime-span'>All time</span>
                        <Dropdown />
                    </div>
                </section>
                <aside className='stat-summary'>
                    <section className='first-part'>
                        <div className='shape-span'>
                            <Shape className="shape" />
                            <span className="blue-num">8.29%</span>
                        </div>
                        <span className="tag">from prev. month</span>
                    </section>
                    <section className='second-part'>
                        <div className='num-span'>
                            <span className="num">2.68</span>
                            <span className="tag">Tag</span>
                        </div>
                        <div className='num-span'>
                            <span className="num">1.864</span>
                            <span className="tag">Tag</span>
                        </div>
                        <div className='num-span'>
                            <span className="num">2.86%</span>
                            <span className="tag">Growth Rate</span>
                        </div>
                    </section>
                </aside>
                <Chartt />
                <p className='transaction'>Transaction history</p>
                {/* 
                        <tr>
                            <td> <ArrowDown /></td>
                            <td className=' text-[#353945] pr-[7.375rem] text-base font-normal'>Martin Geidt</td>
                            <td className='amount text-[#353945] pr-[7.3475rem] text-base font-normal'>5000</td>
                            <td className='remita text-[#353945] pr-[10.1875rem] text-base font-normal'>Remita</td>
                            <td > <span className='status text-[#15A336] px-[10px] py-[4px] text-base rounded-lg max-w-max  font-normal'>Success</span> </td>
                            <td className='date text-[#353945] pr-[6rem] text-base font-normal'>Oct. 14, 2021</td>
                            <td> <More /></td>
                        </tr>
                        
                </table> */}
                <div>
                    <Table tableData={data} heading={heading} />
                    {/* {selectedId} */}
                </div>


            </main>

        </DashboardLayout>


    )
}

export default DashboardPage
