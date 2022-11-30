import React from 'react'
import Image from 'next/image'
import Navbar from './Navbar'
import Link from 'next/link'
import styles from "../styles/Header.module.css";
const Header = ({children,props}) => {
    //const  = props
  return (
    <>
        <div className={styles.header + " p-2 ps-3 pe-3 "}>
      <div class="row container m-auto">
        <div class="col-3">
          {" "}
          <Image
            src="/HeaderLogo.png"
            width={100}
            height={70}
            alt="headerlogo"
          />
        </div>
        <div class="col-6 m-auto">
          <Navbar />
        </div>
        <div class="col-3  m-auto">
          <div class="input-group">
            <input type="text" class="form-control" />
            <button class="btn btn-outline-secondary" type="button">
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
        {/* {children}
        <div className="row">
            <div className="container bg-dark">
                <div className="row">
                    <div className="col-12 col-lg-3">
                        <Link href="/"><Image src="/Logo.svg" height="50" width="50" /></Link>
                    </div>
                    <Navbar />
                </div>
            </div>
        </div> */}
    </>
  )
}

export default Header