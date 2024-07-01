import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ErrorPage from './Components/errorComponents/ErrorPage.jsx'
// import AdminDashboard from './Components/dashBoardComponents/AdminDashboard.jsx'
import AddFaculty from './Components/AdminComponents/AddFaculty.jsx'
import FacultyDashboard from './Components/dashBoardComponents/FacultyDashboard.jsx'
import StudentDashboard from './Components/dashBoardComponents/StudentDashboard.jsx'
import AdminNav from './Components/AdminComponents/AdminNav.jsx'
import GetFaculty from './Components/AdminComponents/GetFaculty.jsx'
import NotAuthorized from './Components/errorComponents/NotAuthorized.jsx'

const router = createBrowserRouter([
  {
    path : '/',
    element : <App/>,
    errorElement : <ErrorPage />,
  },
  {
    path : '/auth-error',
    element : <NotAuthorized />
  },
  {
    path : '/admin',
    element : <AdminNav />,
    children : [
      {
        path : 'users/add',
        element : <AddFaculty />,
      },
      {
        path : 'users/get',
        element : <GetFaculty/>,
      }
    ]
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
