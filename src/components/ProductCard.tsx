import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import download from '../assets/download.jpg'

const ProductCard = (props: any) => {
  return (
    <Card key={props.product.id} sx={{ width: '18vw', maxWidth: '18vw', height: '80vh', maxHeight: '80vh' }}>
      <CardMedia
        sx={{ height: '60vh' }}
        image={download}
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
        <Button variant='contained' size="large" sx={{ bgcolor:'#E1D9D1' }}>View</Button>
      </CardActions>
    </Card>
  )
}

export default ProductCard