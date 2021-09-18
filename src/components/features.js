import React from 'react'
import antibot from '../images/antibot.png'
import antiwhale from '../images/antiwhale.png'
import box from '../images/distributionbox.png'
import mobileAntibot from '../images/mobile-antibot.png'
import mobileAntiwhale from '../images/mobile-antiwhale.png'
import mobileBox from '../images/mobile-box.png'

function features(props) {
  return (
    <div className='features' ref={props.FeaturesRef}>
      <h2>BabyMBOX</h2>
      <h1>FEATURES</h1>
      <div className='features-line'></div>
      <div className='features-flex'>
        <div className='features-box'>
          <img src={antibot} />
          <img src={mobileAntibot} className='mobile' />
          <h1>Anti-Bot</h1>
          <h2>
            WE
            <br />
            DARE
            <br />
            YOU
            <br />
            TO
            <br />
            SNIPE
          </h2>
        </div>
        <div className='features-box'>
          <img src={antiwhale} />
          <img src={mobileAntiwhale} className='mobile' />
          <h1>Anti-Whale</h1>
          <p>
            <strong>Max buy</strong>: 0.5 <br />
            <strong>token Max Sell</strong>: 0.1 <br />
            <strong>token Max holding</strong>: 5% per wallet
          </p>
        </div>
        <div className='features-box'>
          <img src={box} />
          <img src={mobileBox} className='mobile' />
          <h1>Distribution in $MBox</h1>
          <p>
            $MBOX auto-claim 9% of every transaction will be rewarded back to
            holders
          </p>
        </div>
      </div>
    </div>
  )
}

export default features
