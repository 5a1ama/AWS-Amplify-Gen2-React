import { Box } from "@mui/material"
import { useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import type { Schema } from "../../amplify/data/resource";
import { generateClient } from "aws-amplify/data";
import { useEffect, useState } from 'react';
import Sidebar from "../components/Sidebar"
import Navbar from "../components/Navbar"
import ProductCard from "../components/ProductCard";
import MenLanding from "../components/MenLanding";
import WomenLanding from "../components/WomenLanding";

const client = generateClient<Schema>();

const Shop = () => {

    const { department, categoryTitle } = useParams();
    const location = useLocation();

    const [products, setProducts] = useState<Array<Schema["Product"]["type"]>>([]);

    const fetchProducts = async () => {
        try {

            const result = await client.models.Category.list({
                filter: {
                    title: {
                        eq: categoryTitle
                    },
                    department: {
                        eq: department
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
        <Box >
            {location.pathname === '/men' && 
            <Box display='flex' flexDirection='row'>
                <Sidebar department={"men"}/>
                <MenLanding/>
            </Box>}

            {location.pathname === '/women' && 
            <Box display='flex' flexDirection='row'>
                <Sidebar department={"women"}/>
                <WomenLanding/>
            </Box>}

            {location.pathname === `/men/${categoryTitle}` && 
            <Box display='flex' flexDirection='row'>
                <Sidebar department={"men"}/>
                <Box display='flex' flexWrap='wrap' flexDirection='row' justifyContent='center' alignItems='center' columnGap='0.5vw' rowGap='1.5vh' maxWidth='100%' marginTop='50px'> 
                    {products.length > 0 && products.map((product: any)=> 
                    <ProductCard key={product.id} product={product}/>
                    )}
                </Box>
            </Box>}

            {location.pathname === `/women/${categoryTitle}` && 
            <Box display='flex' flexDirection='row'>
                <Sidebar department={"women"}/>
                <Box display='flex' flexWrap='wrap' flexDirection='row' justifyContent='center' alignItems='center' columnGap='0.5vw' rowGap='1.5vh' maxWidth='100%' marginTop='50px'> 
                    {products.length > 0 && products.map((product: any)=> 
                    <ProductCard key={product.id} product={product}/>
                    )}
                </Box>
            </Box>}
        </Box>
    </Box>
  )
}

export default Shop