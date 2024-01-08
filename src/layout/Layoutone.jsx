import React from 'react'
import { Header } from '../Navbar/Header'
import { Footer } from '../Footer/Footer'

export const Layoutone = (props) => {
  return (
    <div className={props.class}>
      <Header />
      {props.children}
      <Footer />
    </div>
  )
}
