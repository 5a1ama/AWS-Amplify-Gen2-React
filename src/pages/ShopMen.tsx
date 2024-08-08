import { Box, Typography } from "@mui/material"
import { useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import Sidebar from "../components/Sidebar"
import Navbar from "../components/Navbar"
import newArrivalsMen from '../assets/new-arrivals-men.jpg'
import trendyMen from '../assets/trendy-men.jpg'
import type { Schema } from "../../amplify/data/resource";
import { generateClient } from "aws-amplify/data";
import { useEffect, useState } from 'react';
import ProductCard from "../components/ProductCard";

const client = generateClient<Schema>();

const ShopMen = () => {

  const { categoryTitle } = useParams();
  const location = useLocation();

  const [products, setProducts] = useState<Array<Schema["Product"]["type"]>>([]);

    const fetchProducts = async () => {
        try {

            const result = await client.models.Category.list({
                filter: {
                    title: {
                        eq: categoryTitle
                    }
                }
            });

            if(!result.data[0]) {
                console.error('Category not found');
                return;
            }

            const fetchedCategory = result.data[0];

            const productsResult = await client.models.Product.list({
                filter: {
                    category: {
                        eq: fetchedCategory.id
                    }
                }
            });

            setProducts(productsResult.data);

        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, [location.pathname]);

  return (
    <Box>
        <Navbar/>
        <Box display='flex' flexDirection='row'>
            <Sidebar/>
            {location.pathname === '/shop-men' && <Box display='flex' flexDirection='column' justifyContent='center' alignItems='center' width='100%' rowGap='8vh' mt='3vh'>
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
                    backgroundImage: `url(${newArrivalsMen})`,
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
                    backgroundImage: `url(${trendyMen})`,
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
            </Box>}

            {location.pathname === `/shop-men/${categoryTitle}` && <Box display='flex' flexWrap='wrap' flexDirection='row' justifyContent='center' alignItems='center' columnGap='0.5vw' rowGap='1.5vh' maxWidth='100%' marginTop='50px'> 
                {products.length > 0 && products.map((product: any)=> 
                <ProductCard key={product.id} product={product}/>
                )}
            </Box>}

        </Box>
    </Box>
  )
}

export default ShopMen