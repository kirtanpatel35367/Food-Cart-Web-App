import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import MainContainer from './components/MainContainer'
import CreateContainer from './components/CreateContainer'
import Header from './components/Header'

const App = () => {
  return (

    <AnimatePresence mode="wait">
      <div className='w-screen h-auto flex flex-col'>
        <Header />
        <main className='mt-20 md:mt-24 px-16 w-full'>
          <Routes>
            <Route path='/*' element={<MainContainer />} />
            <Route path='/createItem' element={<CreateContainer />} />
          </Routes>
        </main>
      </div>
    </AnimatePresence>
  )
}

export default App
