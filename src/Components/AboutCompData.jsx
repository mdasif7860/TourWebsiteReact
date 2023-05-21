import React from 'react'

const AboutCompData = (props) => {
  return (
    <div>
      <div className="aboutComp-content">
      <h2>{props.Heading}</h2>
      <p>{props.Text}</p>
      </div>
    </div>
  )
}

export default AboutCompData
