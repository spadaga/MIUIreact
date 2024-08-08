import React from 'react'
import FirstGraph from './FirstGraph'
import Secondgraph from './Secondgraph'
import Thirdgraph from './Thirdgraph'
import { Box, Grid, Paper, Stack } from '@mui/material'

const FifthSection = () => {
    return (
        <Stack direction={{ xs: 'column', sm: 'row' }}  width="100%" textAlign="center" spacing={2}  sx={{ width: '100%', padding: 2 }} >
            <Box flexGrow={1} sx={{border:"1px solid"}} > <FirstGraph /></Box>
            <Box flexGrow={1} sx={{border:"1px solid"}}><Secondgraph /> </Box>
            <Box flexGrow={1} sx={{border:"1px solid",display:"flex",alignItems:'center'}}><Thirdgraph /> </Box>

        </Stack>
    )
}

export default FifthSection
