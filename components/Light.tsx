import React from 'react'

const Light = ({ color }) => {
  const colorMap = { K: 'red', Y: 'green', S: 'orange' }

  return (
    <span style={{ color: colorMap[color]}}>{color}</span>
  )
}

export default Light
