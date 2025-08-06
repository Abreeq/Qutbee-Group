import React from 'react'
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom'
import Homepage from './pages/Homepage'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Businesspage from './pages/Businesspage'
import Investment from './pages/Investment'
import About from './pages/About'

export default function App() {

  function MainLayout(){
    return (
      <>
        <Navbar/>
        <Outlet/>
        <Footer/>
      </>
    )
  }

  const routes = createBrowserRouter([
    {
       path:'/',
       element:<MainLayout/>,
       children:[
        {
          path:'',
          element:<Homepage/>,
        },
        { 
          path: "/business", 
          element: <Businesspage />
        },
        { 
          path: "/investment", 
          element: <Investment/>
        },
        {
          path: "/About",
          element: <About/>
        }
       ]
      
    }
  ])
  return (
    <RouterProvider router={routes}></RouterProvider>
  )
}
