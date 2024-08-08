import { Box } from '@mui/material'
import React from 'react'

import girimg from '../assets/images/student.png'

const FImage = () => {
  return (
    <div>
       <Box
        component="img"
        sx={{
          width: '400px', // adjust as needed
          height: 'auto',
          borderRadius: '0px', // rounded corners
          boxShadow: 0, // adds a shadow
          alignContent:"center",
          alignItems:"flex-end",
          justifyContent:"right"
        }}
        alt="Example Image"
        src={girimg} // replace with your image URL
      />
    </div>
  )
}

export default FImage
