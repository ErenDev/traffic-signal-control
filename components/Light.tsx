import React from 'react'

const Light = ({ color, groupName }) => {
  const colorMap = { K: 'red', Y: 'green', S: 'orange' }

  return (
    <>
      <div>
        <img
          src={`/${color}.png`}
          width='90'
          height='300'
          alt={'traffic light icon'}
        />
        <h2 style={{ color: colorMap[color]}}>{groupName}</h2>
      </div>
    </>
  )
}

export default Light
