import React from 'react'
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom'
import Homepage from './pages/Homepage'
import About from './pages/About'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

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
          path: "/about", 
          element: <About />
        }
       ]
      
    }
  ])
  return (
    <RouterProvider router={routes}></RouterProvider>
  )
}
