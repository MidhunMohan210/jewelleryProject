import {createContext,useState} from 'react'
import { Header } from '../components/layout/Header'
import Router from '../routes/Router'

function Layout() {


  return (
  <>
   <div className="min-h-screen">

  <Header/>
  <Router/>
</div>
  </>

  

  
  )
}

export default Layout