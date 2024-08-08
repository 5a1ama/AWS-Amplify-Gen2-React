import { Box, Typography } from '@mui/material'
// import type { Schema } from "../../amplify/data/resource";
// import { generateClient } from "aws-amplify/data";
// import { useEffect, useState } from 'react';
//import ProductCard from '../components/ProductCard';
import Navbar from '../components/Navbar';
import men from '../assets/men.jpg'
import women from '../assets/women.jpg'
import kids from '../assets/kids.jpg'
import newArrivals from '../assets/new-arrivals.jpg'
import trendy from '../assets/trendy.jpg'

//const client = generateClient<Schema>();


const Landing = () => {
    
    // const [products, setProducts] = useState<Array<Schema["Product"]["type"]>>([]);

    // useEffect(() => {
    //     client.models.Product.observeQuery().subscribe({
    //     next: (data) => setProducts([...data.items]),
    //     });
    // }, []);

  return (
    <Box>
      <Navbar/>
      <Box display='flex' flexDirection='column' rowGap='8vh' justifyContent='center' alignItems='center' mt='3vh'>

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
            backgroundImage: `url(${newArrivals})`,
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
            backgroundImage: `url(${trendy})`,
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

        {/* Departments */}
        <Typography variant="h3" sx={{ userSelect: 'none', textDecoration:'underline'}}>
          Departments
        </Typography>
        <Box display='flex' flexDirection='row' justifyContent='center' alignItems='center' columnGap='5vw'>
          <Box
          onClick={() => {
            console.log('Image clicked!');
          }}
          sx={{
            width: '15vw',
            height: '45vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundImage: `url(${men})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            color: 'white', 
            cursor: 'pointer'
          }}>
            <Typography variant="h2" sx={{ userSelect: 'none'}}>
                Men
            </Typography>
          </Box>
          <Box
          onClick={() => {
            console.log('Image clicked!');
          }}
          sx={{
            width: '15vw',
            height: '45vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundImage: `url(${women})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            color: 'white', 
            cursor: 'pointer'
          }}>
            <Typography variant="h2" sx={{ userSelect: 'none'}}>
                Women
            </Typography>
          </Box>
          <Box
          onClick={() => {
            console.log('Image clicked!');
          }}
          sx={{
            width: '15vw',
            height: '45vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundImage: `url(${kids})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            color: 'white', 
            cursor: 'pointer'
          }}>
            <Typography variant="h2" sx={{ userSelect: 'none'}}>
                Kids
            </Typography>
          </Box>
        </Box>
      </Box>
      {/* <Box display='flex' flexWrap='wrap' flexDirection='row' justifyContent='center' alignItems='center' columnGap='0.5vw' rowGap='1.5vh' maxWidth='100%' marginTop='50px'> 
        {products.length > 0 && products.map((product: any)=> 
          <ProductCard key={product.id} product={product}/>
        )}
      </Box> */}
    </Box>
  )
}

export default Landing