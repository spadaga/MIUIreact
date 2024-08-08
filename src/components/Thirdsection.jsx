import React from 'react'
import c1 from '../assets/images/c1.png'
import c2 from '../assets/images/c2.png'
import c3 from '../assets/images/c3.png'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box, Stack } from '@mui/material';

const Thirdsection = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent:'flex-start',
                alignItems: 'left',

               justifyContent: "space-between",
                pt:2,pb:2
            }}
        >
            <Stack direction={{ xs: 'column', sm: 'row' }} width="100%" spacing={2} sx={{ width: '100%', padding: 2 }} >

                <Box flexGrow={1} sx={{ border: "1px solid" }} >
                    <Card >
                        <CardMedia
                            component="img"
                            alt="green iguana"
                            height="140"
                            image={c1}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Lizard
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Share</Button>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                    </Card>
                </Box>

                <Box flexGrow={1} sx={{ border: "1px solid" }} >
                    <Card >
                        <CardMedia
                            component="img"
                            alt="green iguana"
                            height="140"
                            image={c2}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Lizard
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Share</Button>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                    </Card>
                </Box>
                <Box flexGrow={1} sx={{ border: "1px solid" }} >

                    <Card >
                        <CardMedia
                            component="img"
                            alt="green iguana"
                            height="140"
                            image={c3}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Lizard
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Share</Button>
                            <Button size="small">Learn More</Button>
                        </CardActions>

                    </Card></Box>
            </Stack>
        </Box>

    )
}

export default Thirdsection
