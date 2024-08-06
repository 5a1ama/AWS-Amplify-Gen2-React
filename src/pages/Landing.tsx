import { Box } from '@mui/material'
import type { Schema } from "../../amplify/data/resource";
import { generateClient } from "aws-amplify/data";
import { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';

const client = generateClient<Schema>();

const Landing = () => {

    const [products, setProducts] = useState<Array<Schema["Product"]["type"]>>([]);

    useEffect(() => {
        client.models.Product.observeQuery().subscribe({
        next: (data) => setProducts([...data.items]),
        });
    }, []);

  return (
    <Box display='flex' flexDirection='row' bgcolor='white'> 
      {products.length > 0 && products.map((product: any)=> 
        <ProductCard product={product}/>
      )}
    </Box>
  )
}

export default Landing