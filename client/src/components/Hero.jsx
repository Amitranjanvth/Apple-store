import React, { useEffect, useRef } from 'react'

const Hero = () => {

  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) videoRef.current.playbackRate = 2.1;
  })

  return (
    <section id='hero'>
      <div>
        <h1>Macbook pro</h1>
        <img src="/title.png" alt="" />
      </div>
        <video ref={videoRef} src="/videos/hero.mp4" autoPlay muted playsInline />

        <button>Buy</button>
        <p>From $1299 or $112/month for 13 months</p>
    </section>
  )
}

export default Hero

