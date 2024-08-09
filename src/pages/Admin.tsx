import { Box } from "@mui/material"
import AdminSidebar from "../components/AdminSidebar"
import AdminCreateCategoryForm from "../components/AdminCreateCategoryForm"
import AdminCreateProductForm from "../components/AdminCreateProductForm"

const Admin = () => {
  return (
    <Box>
      <Box display='flex' flexDirection='row'>
        <AdminSidebar/>
          {location.pathname === '/admin/create-category' && <AdminCreateCategoryForm/>}
          {location.pathname === '/admin/create-product' && <AdminCreateProductForm/>}
      </Box>
    </Box>
  )
}

export default Admin