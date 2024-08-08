import React from 'react'
import {motion} from "framer-motion"


export default function Box() {
  return (
    <div>
      <motion.div
        animate ={{rotate: 360}}
        transition={{repeat: Infinity, duration: 1}}
        style={{
            width: 100,
            height: 100,
            border: '5px solid lightgrey',
            borderTop: `5px solid black`,
            borderRadius: '50%'
        }}


      />


    </div>
  )
}
