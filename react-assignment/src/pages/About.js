import React from 'react'
import image from '../thumb.jpg'

const About = () => {
  return (
    <section className='section about-section'>
      <h1 className='section-title'>about</h1>
      <img src={image} style={{ height: "100px", width: "100px", margin: "0 auto", borderRadius: "50%" }} />
      <h3 style={{ textAlign: "center", padding: "  24px  0 0 0" }}>Computer Engineer</h3>
      <p style={{ textAlign: "justify" }}>

        Hello, I am Bhabin Khadka and I am graduate from Kathmandu University as Computer Engineer. I work in a friendly environment where I can utilize my technical and leadership skills. I am an active participant and I contribute in development and implementation of real world applications.
      </p>
    </section>
  )
}

export default About
