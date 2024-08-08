import { Box, Typography } from "@mui/material"
import { useNavigate } from "react-router-dom"


const AdminSidebar = () => {

    const navigate = useNavigate();

    const navCreateProduct = () => {
        navigate('/admin/create-product');
    }
    
    const navAllProducts = () => {
        navigate('/admin/all-products');
    }
    
    const navDeleteProduct = () => {
        navigate('/admin/all-products')
    }

  return (

    <Box width='15%' height='100%' position='absolute' top='0px' left='0px' display='flex' flexDirection='column' pl='2vw' pt='2vh' 
    sx={{ borderRight: '2px solid rgba(0, 0, 0, 0.15)' }}>

        <Typography pb='1vh' sx={{ fontWeight: 'bold', fontSize:'25px' }}>
            Categories
        </Typography>

        <Box pl='0.5vw' mb='4vh'>
            <Typography onClick={navAllProducts} sx={{ cursor: 'pointer', textDecoration: 'underline'}}>
                All Categories
            </Typography>
            <Typography onClick={navCreateProduct} sx={{ cursor: 'pointer', textDecoration: 'underline'}}>
                Create Category
            </Typography>
            <Typography onClick={navDeleteProduct} sx={{ cursor: 'pointer', textDecoration: 'underline'}}>
                Update Category
            </Typography>
            <Typography onClick={navDeleteProduct} sx={{ cursor: 'pointer', textDecoration: 'underline'}}>
                Delete Category
            </Typography>
        </Box>

        <Typography pb='1vh' sx={{ fontWeight: 'bold', fontSize:'25px' }}>
            Products
        </Typography>

        <Box pl='0.5vw'>
            <Typography onClick={navAllProducts} sx={{ cursor: 'pointer', textDecoration: 'underline'}}>
                All Products
            </Typography>
            <Typography onClick={navCreateProduct} sx={{ cursor: 'pointer', textDecoration: 'underline'}}>
                Create Product
            </Typography>
            <Typography onClick={navDeleteProduct} sx={{ cursor: 'pointer', textDecoration: 'underline'}}>
                Update Product
            </Typography>
            <Typography onClick={navDeleteProduct} sx={{ cursor: 'pointer', textDecoration: 'underline'}}>
                Delete Product
            </Typography>
        </Box>
    </Box>
    
  )
}

export default AdminSidebar