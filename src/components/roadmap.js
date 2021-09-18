import React from 'react'

function roadmap(props) {
  return (
    <div className='roadmap' ref={props.RoadmapRef}>
      <h2>BabyMBOX</h2>
      <h1>ROADMAP</h1>
      <div className='roadmap-line'></div>
      <div className='roadmap-flex'>
        <div className='roadmap-box'>
          <h1>
            2021<span> 4Q</span>
          </h1>
          <div className='roadmap-detail'>
            <h2>
              Launch and
              <br />
              Awareness
            </h2>
            <h3>10k Telegram Members</h3>
            <h3>5k Holders</h3>
            <ul>
              <li>Techrate Audit</li>
              <li>Publish Whitepaper</li>
              <li>Influencer Marketing</li>
              <li>List CMC</li>
              <li>List Coingecko</li>
            </ul>
          </div>
          </div>

          <div className='roadmap-box'>
            <h1>
              2022<span> 1Q</span>
            </h1>
            <div className='roadmap-detail'>
              <h2>
                Building strong
                <br />
                ecosystem and
                <br />
                Community
              </h2>
              <h3>20k Telegram Members</h3>
              <h3>15k Holders</h3>
              <ul>
                <li>Website Improvement</li>
                <li>List more CEX</li>
                <li>Certik Audit</li>
              </ul>
            </div>
          </div>

          <div className='roadmap-box'>
            <h1 className='roadmap-no-line'>
              2022<span> 2Q</span>
            </h1>
            <div className='roadmap-detail'>
              <h2>
                Establishment
                <br />
                as top token in
                <br />
                cryptoverse
              </h2>
              <h3>50k Telegram Members</h3>
              <h3>30k Holders</h3>
              <ul>
                <li>Announce NFT</li>
                <li>Get Elon Musk to tweet about us</li>
              </ul>
            </div>
          </div>
      </div>
    </div>
  )
}

export default roadmap
