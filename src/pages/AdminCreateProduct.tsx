import { Box } from "@mui/material";
import AdminSidebar from "../components/AdminSidebar";
import AdminCreateProductForm from "../components/AdminCreateProductForm";

const AdminCreateProduct = () => {

  return (
    <Box display='flex' flexDirection='row' justifyContent='center' alignItems='center'>
      <AdminSidebar/>
      <AdminCreateProductForm/>
    </Box>
  )
}

export default AdminCreateProduct