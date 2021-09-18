import React, { useState } from 'react'
import c9 from '../images/c9.png'
import hamburger from '../images/hamburger.png'
import close from '../images/close.png'

function Nav(props) {
  const [mobileNavOpen, setMobileNavOpen] = useState(false)

  const onClickHamburger = () => {
    if (mobileNavOpen === true) setMobileNavOpen(false)
    else setMobileNavOpen(true)
  }

  return (
    <div>
      <nav>
        <div className='nav-flex'>
          <img src={c9} onClick={props.scrollToTop} />
          <ul>
            <li onClick={props.scrollToFeatures} className='text-menu'>
              Features
            </li>
            <li onClick={props.scrollToTokenomics} className='text-menu'>
              Tokenomics
            </li>
            <li onClick={props.scrollToRoadmap} className='text-menu'>
              Roadmap
            </li>
            {/* <li>
              <a className='graph-button'>See Graph</a>
            </li>
            <li>
              <a className='pcs-button'>Buy on PCS</a>
            </li> */}
          </ul>
        </div>
      </nav>
      <div className='mobile-nav'>
        <div className='mobile-nav-flex'>
          <img src={c9} onClick={props.scrollToTop} />
          <img src={hamburger} onClick={onClickHamburger} id='hamburger' />
          {mobileNavOpen ? (
            <div className='mobile-nav-open'>
              <img src={close} onClick={onClickHamburger} />
              <ul>
                <li
                  onClick={() => {
                    props.scrollToFeatures()
                    onClickHamburger()
                  }}
                >
                  Features
                </li>
                <li
                  onClick={() => {
                    props.scrollToTokenomics()
                    onClickHamburger()
                  }}
                >
                  Tokenomics
                </li>
                <li
                  onClick={() => {
                    props.scrollToRoadmap()
                    onClickHamburger()
                  }}
                >
                  Roadmap
                </li>
              </ul>
            </div>
          ) : (
            <div className='mobile-nav-open mobile-nav-close'>
              <img src={close} onClick={onClickHamburger} />
              <ul>
                <li>Features</li>
                <li>Tokenomics</li>
                <li>Roadmap</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Nav
