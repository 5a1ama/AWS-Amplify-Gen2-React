import { Box, Button, IconButton, TextField, Typography } from "@mui/material";
import { getUrl, uploadData } from "aws-amplify/storage";
import { useState } from "react";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import DeleteIcon from '@mui/icons-material/Delete';
import { generateClient } from "aws-amplify/data";
//import { StorageManager } from '@aws-amplify/ui-react-storage';
//import '@aws-amplify/ui-react/styles.css';
import type { Schema } from "../../amplify/data/resource";
const client = generateClient<Schema>();

const AdminCreateProductForm = () => {

    const [selectedFile, setSelectedFile] = useState<File | null>(null);

    const handleFileChange = (event: any) => {
        setSelectedFile(event.target.files[0]);
    };

    const handleFileRemove = () => {
        setSelectedFile(null);
    };


    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [count, setCount] = useState('');
    const [categoryId, setCategoryId] = useState('');  

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        
        if (!selectedFile) {
            console.log('No file selected');
            return;
        }
        try {
            uploadData({
                path: `admin-media/${selectedFile.name}`,
                data: selectedFile
            })
            console.log('File uploaded successfully');
            const linkToStorageFile = await getUrl({path: `admin-media/${selectedFile.name}`});
            client.models.Product.create({ title: title, description: description, price: parseFloat(price), count: parseInt(count), image: linkToStorageFile.url.toString(), category:categoryId })
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
        Create Product
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
          <TextField
          variant="outlined"
          margin="normal"
          required
          id="price"
          label="price"
          name="price"
          type="number"
          autoComplete="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          sx={{width:'90%', backgroundColor:'whitesmoke'}}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          name="count"
          label="count"
          id="count"
          type="number"
          autoComplete="count"
          value={count}
          onChange={(e) => setCount(e.target.value)}
          sx={{width:'90%', backgroundColor:'whitesmoke'}}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          name="category"
          label="category"
          id="category"
          autoComplete="category"
          value={categoryId}
          onChange={(e) => setCategoryId(e.target.value)}
          sx={{width:'90%', backgroundColor:'whitesmoke'}}
        />

        <Typography variant="h6" sx={{ fontSize:    '40px' }}>
          Upload Image
        </Typography>

        <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" mt={1}>
        <Button
            variant="contained"
            component="label"
            startIcon={<CloudUploadIcon />}
            sx={{ marginBottom: 2 }}>
            Select File
            <input
            type="file"
            hidden
            onChange={handleFileChange}
            />
        </Button>
        {selectedFile && (
            <Box
            sx={{
                marginTop: '20px',
                width: '100%',
                maxWidth: '500px',
                textAlign: 'center',
                position: 'relative',
            }}
            >
            <Typography variant="body1">{selectedFile.name}</Typography>
            <IconButton
                onClick={handleFileRemove}
                sx={{
                position: 'absolute',
                top: '10px',
                right: '10px',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                color: 'white',
                '&:hover': {
                    backgroundColor: 'rgba(0, 0, 0, 0.7)',
                },
                }}
            >
                <DeleteIcon />
            </IconButton>
            </Box>
        )}
        </Box>
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

export default AdminCreateProductForm