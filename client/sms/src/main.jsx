import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ErrorPage from './Components/errorComponents/ErrorPage.jsx'
import AdminDashboard from './Components/dashBoardComponents/AdminDashboard.jsx'
import FacultyDashboard from './Components/dashBoardComponents/FacultyDashboard.jsx'
import StudentDashboard from './Components/dashBoardComponents/StudentDashboard.jsx'

const router = createBrowserRouter([
  {
    path : '/',
    element : <App/>,
    errorElement : <ErrorPage />,
  },
  {
    path : '/admin',
    element : <AdminDashboard />
  },
  {
    path : '/faculty',
    element : <FacultyDashboard />
  },
  {
    path : '/student',
    element : <StudentDashboard />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>,
)
