import { useState } from 'react'
import './App.css'
import SignUp from './pages/SignUp'
import LoginPage from './pages/LoginPage'
import VerifyPage from './pages/VerifyPage'
import { Route, Routes } from 'react-router'
import DashboardPage from './pages/DashboardPage'
import Student from './pages/StudentPage'
import Employees from './pages/EmployeePage'
import Parents from './pages/ParentsPage'
import Events from './pages/EventsPage'
import FeesDetails from './pages/FeesDetailsPage'
import FeesAndLevies from './pages/FeesAndLevies'


function App() {
  const [count, setCount] = useState(0)

  return (

    <Routes>
      <Route path='/signUp' element={<SignUp />} />
      <Route path='/' element={<LoginPage />} />
      <Route path='/VerifyPage' element={<VerifyPage otp={0} />} />
      <Route path='/dashboard' element={<DashboardPage />} />
      <Route path='/dashboard/student' element={<Student />} />
      <Route path='/dashboard/employees' element={<Employees />} />
      <Route path='/dashboard/parents' element={<Parents />} />
      <Route path='/dashboard/events' element={<Events />} />
      <Route path='/dashboard/feesandlevies/' element={<FeesAndLevies />} />
      <Route path='/dashboard/feesandlevies/:id' element={<FeesDetails />} />
    </Routes>

  )
}

export default App
