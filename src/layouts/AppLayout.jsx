import React from 'react'
import List from '../components/List/LIst'
import Navbar from '../components/Navbar/Navbar'

const AppLayout = () => {
  return (
    <div>
      <Navbar />
      <div className="px-0 container uk-flex pt-4">
        <List />
      </div>
    </div>
  )
}

export default AppLayout
