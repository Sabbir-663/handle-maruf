
import './App.css'
import Header from './Components/Header/Header'
import Cards from './Components/Cards/Cards'
import Footer from './Components/Footer/Footer'
import { useState } from 'react'


function App() {
 


  return (
    < >

     <div className='w-4/5 mx-auto'>
    <Header></Header>
     <Cards></Cards>
     </div>
     <div className='bg-[#06091A]  relative pb-[20px]'>
      <div className='w-4/5 mx-auto '>
        <Footer></Footer>
      </div>
     </div>

     
    </>
  )
}

export default App
