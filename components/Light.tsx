import React from 'react'
import Image from 'next/image'

const Light = ({ color, groupName }) => {
  const colorMap = { K: 'red', Y: 'green', S: 'orange' }

  return (
    <>
      <div>
        <Image
          src={`/${color}.png`}
          width='64'
          height='220'
          alt={'traffic light icon'}
        />
      </div>

      <span style={{ color: colorMap[color]}}>{groupName}</span>
    </>
  )
}

export default Light
