import { useEffect, useState } from "react";
import type { Schema } from "../amplify/data/resource";
import { generateClient } from "aws-amplify/data";
import { Box, Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";

const client = generateClient<Schema>();

function App() {
  const [products, setProducts] = useState<Array<Schema["Product"]["type"]>>([]);
  const [lambda, setLambda] = useState("");

  useEffect(() => {
    client.models.Product.observeQuery().subscribe({
      next: (data) => setProducts([...data.items]),
    });
  }, []);


  // function createTodo() {
  //   client.models.Todo.create({ content: window.prompt("Todo content") });
  // }

  return (
    <Box display='flex' flexDirection='row'> 
      {products.length > 0 && products.map((product: any)=> 
      <Card key={products.indexOf(product)} sx={{ maxWidth: 345, maxHeight: 345, marginRight: '40px' }}>
        <CardMedia
          sx={{ height: 140 }}
          image="https://cdn.shopify.com/s/files/1/1830/5085/products/VE0007_BCAA_Capsule_90ct_2048x2048.png?v=1494855182"
          title={product.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5">
            {product.title}
          </Typography>
          <Typography variant="body1">
            {product.description}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {product.price}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="large">Add to Cart</Button>
          <Button size="large">View</Button>
        </CardActions>
      </Card>
    )}
    </Box>
  );
}

export default App;
