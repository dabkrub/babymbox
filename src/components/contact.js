import React from 'react'
import twitter from '../images/twitter.png'
import telegram from '../images/telegram.png'

function contact() {
  return (
    <div className='contact'>
      <div className='contact-flex'>
        <h1>CONTACT</h1>
        <a href='https://twitter.com/CloudnineCrypto' target='_blank'>
          <span>
            <img src={twitter} />
          </span>{' '}
          CloudnineCrypto
        </a>
        <a href='https://t.me/cloud9crypto' target='_blank'>
          <span>
            <img src={telegram} />
          </span>{' '}
          CloudnineCrypto
        </a>
        <a href='https://t.me/babymbox_official' target='_blank'>
          <span>
            <img src={twitter} />
          </span>{' '}
          BabyMBOX
        </a>
      </div>
    </div>
  )
}

export default contact
