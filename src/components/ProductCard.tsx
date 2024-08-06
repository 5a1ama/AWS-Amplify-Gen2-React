import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'

const ProductCard = (props: any) => {
  return (
    <Card key={props.product.id} sx={{ width: 300, maxWidth: 300, height: 450, maxHeight: 450, marginRight: '40px', bgcolor:'gray' }}>
      <CardMedia
        sx={{ height: 300 }}
        image="https://cdn.shopify.com/s/files/1/1830/5085/products/VE0007_BCAA_Capsule_90ct_2048x2048.png?v=1494855182"
        title={props.product.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5">
          {props.product.title}
        </Typography>
        <Typography variant="body1">
          {props.product.description}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.product.price}
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant='contained' size="large">Add to Cart</Button>
        <Button variant='contained' size="large">View</Button>
      </CardActions>
    </Card>
  )
}

export default ProductCard