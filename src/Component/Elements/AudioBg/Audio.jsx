import React from 'react'

const Audio = () => {
  return (
    <audio autoPlay loop controls={false}>
        <source src="./audio/backsound.mp3" type="audio/mpeg" />
    </audio>
  )
}

export default Audio