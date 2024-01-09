import React from 'react'
import { Sidebar } from '../Navbar/Sidebar'
import { Footer } from '../Footer/Footer'

export const Layoutone = (props) => {
  return (
    <div className={props.class}>
      <Sidebar />
      {props.children}
      <Footer />
    </div>
  )
}
