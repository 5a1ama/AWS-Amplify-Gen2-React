import { Box } from '@mui/material'
import type { Schema } from "../../amplify/data/resource";
import { generateClient } from "aws-amplify/data";
import { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import Navbar from '../components/Navbar';
import { uploadData } from 'aws-amplify/storage';

const client = generateClient<Schema>();

const Landing = () => {

    const [file, setFile] = useState<File | null>(null);

    const handleChange = (event: any) => {
      setFile(event.target.files[0]);
    };

    const uploadFile = async () => {
      if (!file) {
        console.log('No file selected');
        return;
      }
      try {
        uploadData({
          path: `admin-media/${file.name}`,
          data: file
      })
      }
      catch (error) {
        console.error('Error uploading file:', error);
      }
    };

    
    const [products, setProducts] = useState<Array<Schema["Product"]["type"]>>([]);

    useEffect(() => {
        client.models.Product.observeQuery().subscribe({
        next: (data) => setProducts([...data.items]),
        });
    }, []);

  return (
    <Box>
      <Navbar/>
      <Box display='flex' flexWrap='wrap' flexDirection='row' justifyContent='center' alignItems='center' columnGap='0.5vw' rowGap='1.5vh' maxWidth='100%' marginTop='50px'> 
        {products.length > 0 && products.map((product: any)=> 
          <ProductCard key={product.id} product={product}/>
        )}
      </Box>
      <div>
      <input type="file" onChange={handleChange} />
        <button onClick={uploadFile}>
          Upload
        </button>
      </div>
    </Box>
  )
}

export default Landing