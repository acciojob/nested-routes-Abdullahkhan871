import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

const Layout = ({children}) => {

    // console.log(children)
  return (
    <nav>
        <ul>
            <li>
                <Link to={`/`}>Home</Link>
                <Link to={`/women`}>Women</Link>
            </li>
        </ul>


        {
            children
        }
        
    </nav>
  )
}

export default Layout