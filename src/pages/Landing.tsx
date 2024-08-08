import { Box, Button } from '@mui/material'
import type { Schema } from "../../amplify/data/resource";
import { generateClient } from "aws-amplify/data";
import { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import Navbar from '../components/Navbar';

const client = generateClient<Schema>();


const Landing = () => {
    
    const [products, setProducts] = useState<Array<Schema["Product"]["type"]>>([]);

    useEffect(() => {
        client.models.Product.observeQuery().subscribe({
        next: (data) => setProducts([...data.items]),
        });
    }, []);

  const navigateAdmin = () => {
    window.location.href = '/admin';
  }

  return (
    <Box>
      <Navbar/>
      <Button onClick={navigateAdmin}>admin</Button>
      <Box display='flex' flexWrap='wrap' flexDirection='row' justifyContent='center' alignItems='center' columnGap='0.5vw' rowGap='1.5vh' maxWidth='100%' marginTop='50px'> 
        {products.length > 0 && products.map((product: any)=> 
          <ProductCard key={product.id} product={product}/>
        )}
      </Box>
    </Box>
  )
}

export default Landing