import React from 'react'
import AdSense from 'react-adsense'

const Adsense = () => (
  <div>
    <AdSense.Google
      client="ca-pub-2711163549214174"
      slot="8155311520"
      style={{ display: 'block' }}
      format='auto'
      responsive='true'
      layoutKey='-gw-1+2a-9x+5c'
    />
  </div>
)

export default Adsense