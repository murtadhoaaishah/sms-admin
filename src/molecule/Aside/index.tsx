import { useState } from 'react'
import "./Aside.scss"
import Dropdown from '../../atom/Vectors/dropdown'
import Employees from '../../atom/Vectors/employess'
import Events from '../../atom/Vectors/events'
import Parents from '../../atom/Vectors/Parent'
import Parent from '../../atom/Vectors/Parent'
import Student from '../../atom/Vectors/student'
import Home from '../../atom/Vectors/home'
import Classes from '../../atom/Vectors/classes'
import Attendance from '../../atom/Vectors/attendance'
import Timetabling from '../../atom/Vectors/timetabling'
import Subjects from '../../atom/Vectors/subjects'
import ScoringAndGrading from '../../atom/Vectors/scoring&grading'
import SittingArrangement from '../../atom/Vectors/sittingArrangement'
import Reports from '../../atom/Vectors/reports'
import Payroll from '../../atom/Vectors/payroll'
import Payments from '../../atom/Vectors/payments'
import FeesAndLevees from '../../atom/Vectors/fees&levees'
import RolesAndPermissions from '../../atom/Vectors/roles&permissions'
import Support from '../../atom/Vectors/support'
import Settings from '../../atom/Vectors/settings'
import Logout from '../../atom/Vectors/logout'
import { useNavigate } from 'react-router-dom'
import SideBarDropDown from '../../molecule/SideNavDropDown'
const data = [
    {
        title: 'ADMINISTRATION',
        submenu: [
            {
                icon: <Student />,
                menulink: 'Student',
                link: '/dashboard/student'
            },
            {
                icon: <Parents />,
                menulink: 'Parents',
                link: '/dashboard/parents'
            },
            {
                icon: <Employees />,
                menulink: 'Employees',
                link: '/dashboard/employees'
            },
            {
                icon: <Events />,
                menulink: 'Events',
                link: '/dashboard/events'
            }
        ]
    },

    {
        title: 'ACADEMICS',
        submenu: [
            {
                icon: <Classes />,
                menulink: 'Classes',
                link: '/dashboard/classes'
            },
            {
                icon: <Attendance />,
                menulink: 'Attendance',
                link: '/dashboard/attendance'
            },
            {
                icon: <Timetabling />,
                menulink: 'Timetabling',
                link: '/dashboard/timetabling'
            },
            {
                icon: <Subjects />,
                menulink: 'Subjects',
                link: '/dashboard/subjects'
            },
            {
                icon: <ScoringAndGrading />,
                menulink: 'Scoring & Grading',
                link: '/dashboard/scoring&grading'
            },
            {
                icon: <SittingArrangement />,
                menulink: 'Sitting Arrangement',
                link: '/dashboard/sittingarrangement'
            },
            {
                icon: <Reports />,
                menulink: 'Reports',
                link: '/dashboard/reports'
            }
        ]
    },
    {
        title: 'FINANCE',
        submenu: [
            {
                icon: <Payroll />,
                menulink: 'Payroll',
                link: '/dashboard/payroll'
            },
            {
                icon: <Payments />,
                menulink: 'Payments',
                link: '/dashboard/payments'
            },
            {
                icon: <FeesAndLevees />,
                menulink: 'Fees & Levies',
                link: '/dashboard/feesandlevies'
            }
        ]
    },

]
const othersItems = [
    {
        icon: <RolesAndPermissions />,
        menulink: 'Roles & Permissions',
        link: '/dashboard/role&permissions'
    },
    {
        icon: <Support />,
        menulink: 'Support',
        link: '/dashboard/support'
    },
    {
        icon: <Settings />,
        menulink: 'Settings',
        link: '/dashboard/settings'
    },
    {
        icon: <Logout />,
        menulink: 'Logout',
        link: '/dashboard/logout'
    }
]


const Aside = () => {
    const [dropdown, setDropdown] = useState(false)

    const navigate = useNavigate()



    return (
        <main>
            <img src="/public/vectors/logo.svg" alt="logo" className='image' />
            <section>
                <div className='dashboard-div'>
                    <Home color={'#1B72E7'} className='home' />
                    <p className='dashboard' onClick={() => navigate('/dashboard')} >Dashboard</p>
                </div>
                {data.map(({ title, submenu }, dataiIndex) => {
                    return <aside key={`data_${dataiIndex}`}>
                        <SideBarDropDown title={title}>
                            {submenu.map(({ icon, menulink, link }, submenuIndex) => {
                                return <div className='icon-div' key={`submenu_${submenuIndex}`} onClick={() => navigate(link)} > <span className='icon'>{icon}</span> <span className='menu-link'>{menulink}</span></div>
                            })}
                        </SideBarDropDown>
                    </aside>
                })}
                <div className=' mt-[4.25rem] space-y-9'>
                    {othersItems.map(({ icon, menulink, link }, otherItemsIndex) =>
                        <div key={`otherItems_${otherItemsIndex}`} className='other-icon-div'>
                            <span className='icon'>{icon}</span>
                            <span className='menu-link'>{menulink}</span>
                        </div>
                    )}
                </div>
            </section>
        </main >
    )
}

export default Aside
