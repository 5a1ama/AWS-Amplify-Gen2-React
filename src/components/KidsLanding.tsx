import { Box, Typography } from "@mui/material";
import newArrivalsKids from '../assets/new-arrivals-kids.jpg'
import trendyKids from '../assets/trendy-kids.jpg'

const KidsLanding = () => {
  return (
    <Box display='flex' flexDirection='column' justifyContent='center' alignItems='center' width='100%' rowGap='8vh' mt='3vh'>
                
        {/* New Arrivals */}
        <Box
        onClick={() => {
            console.log('Image clicked!');
        }}
        sx={{
            width: '55vw',
            height: '60vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundImage: `url(${newArrivalsKids})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            color: 'white', 
            cursor: 'pointer',
            pt: '35vh'
        }}>
            <Box display='flex' flexDirection='column' justifyContent='center' alignItems='center'>
                <Typography variant="h1" sx={{ userSelect: 'none'}}>
                    NEW ARRIVALS
                </Typography>
                <Typography variant="h6"  sx={{ userSelect: 'none'}}>
                    Contemporary utility,
                </Typography>
                <Typography variant="h6" sx={{ userSelect: 'none'}}>
                    Sophistication meets iconic cues.
                </Typography>
            </Box>
        </Box>

        {/* Trendy */}
        <Box
        onClick={() => {
            console.log('Image clicked!');
        }}
        sx={{
            width: '55vw',
            height: '60vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundImage: `url(${trendyKids})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            color: 'white', 
            cursor: 'pointer',
            pt: '35vh'
        }}>
            <Box display='flex' flexDirection='column' justifyContent='center' alignItems='center'>
                <Typography variant="h1" sx={{ userSelect: 'none'}}>
                    TRENDY
                </Typography>
                <Typography variant="h6"  sx={{ userSelect: 'none'}}>
                    Tailored jackets and blazers.
                </Typography>
            </Box>
        </Box>
    </Box>
  )
}

export default KidsLanding