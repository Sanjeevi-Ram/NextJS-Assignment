import React from 'react'
import Link from 'next/link'
const Navbar = () => {
  return (
    <div className='col-lg-9'>
        <ul className='items'>
            <li className='item'><Link href="/about">About Us</Link></li>
            <li className='item'><Link href="/facilities">Facilities</Link></li>
            <li className='item'><Link href="/contact">Contact Us</Link></li>
            <li className='item'><Link href="/courses">Courses</Link></li>
            <li className='item'><Link href="/products">Products</Link></li>
        </ul>
    </div>
  )
}

export default Navbar