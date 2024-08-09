import { Box, Button, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { generateClient } from "aws-amplify/data";
import type { Schema } from "../../amplify/data/resource";
const client = generateClient<Schema>();

const AdminCreateCategoryForm = () => {


    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [department, setDepartment] = useState(''); 

    const handleDepartmentClick = (department: string) => {
      setDepartment(department);
    };

    const handleSubmit = async (event: React.FormEvent) => {
      event.preventDefault();

        try {
            client.models.Category.create({ title: title, description: description, department: department })
        } 
        catch (error: any) {
            console.error('Error uploading file:', error);
        }
      };

  return (
    <Box component="form" onSubmit={handleSubmit} display='flex' flexDirection='column' justifyContent='center' alignItems='center' width='100%'>

      <Box display='flex' flexDirection='column' justifyContent='center' alignItems='center' width='40vw' sx={{
        backgroundColor:'rgba(0, 0, 0, 0.15)',
        backdropFilter: 'blur(10px)',
        pt:'10px',
        pb:'10px'
       }}>
        <Typography variant="h3" sx={{ fontSize:{xs:'50px', sm:'70px'}}}>
          Create Category
        </Typography>
          <TextField
            variant="outlined"
            margin="normal"
            required
            id="title"
            label="title"
            name="title"
            autoComplete="title"
            autoFocus
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            sx={{width:'90%', backgroundColor:'whitesmoke'}}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            id="description"
            label="description"
            name="description"
            autoComplete="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            sx={{width:'90%', backgroundColor:'whitesmoke'}}
          />
          <Button
          variant="contained"
          color="primary"
          onClick={() => handleDepartmentClick('men')}>
            Men
          </Button>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => handleDepartmentClick('women')}>
            Women
          </Button>
          <Button
            variant="contained"
            color="success"
            onClick={() => handleDepartmentClick('kids')}>
            Kids
          </Button>
          
          <Button
            type="submit"
            variant="contained"
            color="secondary"
            sx={{ mb: 2 , mt:10,  fontSize:{xs:'22px', sm:'25px'}, width:{xs:'40%', sm:'30%'}}}>
            Create
          </Button>
        </Box>
    </Box>
  )
}

export default AdminCreateCategoryForm