// // import {conf} from './conf/conf.js'
// import { useEffect, useState } from 'react'
// import './App.css'
// import { useDispatch } from 'react-redux'
// import authService from './appwrite/auth'
// import { login, logout } from './store/authSlice'
// import { Footer, Header } from './components'
// import { Outlet } from 'react-router-dom'

// function App() {

//   const [loading, setLoading] = useState(true)
//   const dispatch = useDispatch()

//   useEffect(() => {
//     authService.getCurrentUser()
//       .then((userData) => {
//         if (userData) {
//           dispatch(login({ userData }))
//         } else {
//           dispatch(logout())
//         }
//       })
//       .finally(() => setLoading(false))
//   }, [])

//   return !loading ? (
//     <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
//       <div className="w-full block">
//         <Header />
//         <main>
//           {/* Todo: */}
//           <Outlet />
//         </main>
//         <Footer />
//       </div>
//     </div>
//   ) : null
// }

// export default App


import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import './App.css'
import authService from "./appwrite/auth"
import {login, logout} from "./store/authSlice"
import { Footer, Header } from './components'
import { Outlet } from 'react-router-dom'

function App() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    authService.getCurrentUser()
    .then((userData) => {
      if (userData) {
        dispatch(login({userData}))
      } else {
        dispatch(logout())
      }
    })
    .finally(() => setLoading(false))
  }, [])
  
  return !loading ? (
    <div className='min-h-screen flex flex-wrap content-between bg-white '>
      <div className='w-full block'>
        <Header />
        <main>
        {/* TODO:  <Outlet /> */}
        <Outlet/>
        </main>
        <Footer />
      </div>
    </div>
  ) : null
}

export default App