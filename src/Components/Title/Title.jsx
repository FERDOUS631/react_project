import React from 'react'
import '../Title/Title.css'
const Title = ({subTitle,title}) => {
  return (
    <div className="title container">
        <p>{subTitle}</p>
        <h2>{title}</h2>

    </div>
  )
}

export default Title