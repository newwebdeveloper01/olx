import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Container.scss"
const Container = ({children}) => {
  return (
    <div className='container'>
        {children}
    </div>
  )
}

const Messages = ({link , title , icon } ) => {
  return (
  
     <NavLink className="main__link" to={link}>
          {icon}
          {title}
          </NavLink>
  )
}

const ALLButton = ({classButton , title , link}) => {
  return (
    <>
        <NavLink className={classButton}  to={link}>
            {title}
        </NavLink>
    </>
  )
}



export { Container , Messages , ALLButton}