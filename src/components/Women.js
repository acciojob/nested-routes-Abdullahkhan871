import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import WomenList from './WomenList'

const Women = () => {
  return (
    <div>
        <ul>
            <li>
                <Link to={"/women/Grooming"} >Grooming</Link>
            </li>
            <li>
                <Link to={"/women/Shirt"} >Shirt</Link>
            </li>
            <li>
                <Link to={"/women/Trouser"} >Trouser</Link>
            </li>
            <li>
                <Link to={"/women/Jewellery"} >Jewellery</Link>
            </li>
        </ul>

        <div>
            <WomenList />
        </div>
    </div>
  )
}

export default Women
