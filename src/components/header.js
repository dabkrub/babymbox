import React from 'react'
import logo from '../images/logo.png'
import boxlogo from '../images/boxlogo.png'

function Header() {
  return (
    <div className='header'>
      <div className='header-flex'>
        <img src={logo} id="logo"/>
        <div>
          <h1>
            BABY
            <br />
            MB
            <img src={boxlogo} />X
          </h1>
          <p>
            <strong>$MBOX</strong> is one of a few platforms on BSC that made it
            through the MVBII, hosted by Binance. $BABYMBOX is the first BSC
            token with MBOX auto-claim feature. 9% of every transaction will be
            rewarded back to holders in the form of $MBOX, while another 9% and
            1% will be burnt forever and added to the liquidity pool,
            respectively. Again, every token from Cloudnine Crypto team has a
            built-in 111PG Anti-bot code to ensure a smooth experience for our
            human buyers. When coupled with anti-whale features, such as max
            token per transaction, $BABYMBOX became an ideal platform for
            investors who saw potential in $MBOX.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Header
