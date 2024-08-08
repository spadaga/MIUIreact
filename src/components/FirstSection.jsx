import React from 'react'

import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';
import FImage from './FImage';
import FDivider from './FDivider';
import { red } from '@mui/material/colors';

const FirstSection = () => {
    return (
        <div>
            <Stack
                direction={{ xs: 'column', sm: 'row' }}
                // spacing={{ xs: 1, sm: 2, md: 4 }}
                sx={{display:{xs:"block" , sm: "flex", md: "flex" }}}
            >
                <Box sx={{
                   
                 

                  flex: {
                    xs: 1, // Red border on extra-small screens
                    sm: 1, // Green border on small screens
                    md: 2, // Blue border on medium screens
                    lg:2,
                  },
                    // bgcolor: 'primary.main',
                    p: 3,
                    color: 'white',
                    verticalAlign: "middle",
                    display: 'flex',
                    justifyContent:"center",
                    alignItems: 'center',    // Center vertically
                    border: {
                        xs: '0px solid red', // Red border on extra-small screens
                        sm: '0px solid green', // Green border on small screens
                        md: '0px solid blue', // Blue border on medium screens
                      },

                }}>

                    <FDivider ></FDivider>

                </Box>
                <Box sx={{
                    flex: 1,
                    // bgcolor: 'secondary.main',
                    p: 2,
                    color: 'white',
                    justifyContent: "right",
                    alignItems: "flex-end",
                    display: 'flex',
                    justifyContent: 'flex-end', // Aligns children to the right
                }}>

                    <FImage />
                </Box>
            </Stack>
        </div>
    )
}

export default FirstSection
