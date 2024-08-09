import { Box, Typography } from "@mui/material"
import { useState, useEffect } from "react";
import type { Schema } from "../../amplify/data/resource";
import { generateClient } from "aws-amplify/data";
import { useNavigate } from "react-router-dom";

const client = generateClient<Schema>();

const Sidebar = (props: any) => {

    const navigate = useNavigate();

    const [categories, setCategories] = useState<Array<Schema["Category"]["type"]>>([]);

    const fetchCategories = async () => {

      try {
          const fetchedCategories = await client.models.Category.list({
              filter: {
                  department: {
                      eq: props.department
                  }
              }
          });

          if(!fetchedCategories) {
              console.error('Categories not found');
              return;
          }

          setCategories(fetchedCategories.data);

      } catch (error) {
          console.error('Error fetching categories:', error);
      }
  };

  useEffect(() => {
    fetchCategories();
  }, [props.department]);  

    const handleCategoryClick = (department: string, categoryTitle: string) => {
       navigate(`/shop/${department}/${categoryTitle}`);
    }

  return (
    <Box width='20%' display='flex' flexDirection='column' pl='2vw' pt='2vh' 
    sx={{ borderRight: '2px solid rgba(0, 0, 0, 0.15)' }}>

        <Typography pb='1vh' sx={{ fontWeight: 'bold', fontSize:'25px' }}>
            Categories
        </Typography>

        <Box pl='0.5vw' mb='4vh'>
        {categories.length > 0 && categories.map((category: any)=> 
          <Typography key={category.id} onClick={() => handleCategoryClick(props.department, category.title)}  sx={{ cursor: 'pointer', textDecoration: 'underline'}}> {category.title} </Typography>
        )}
        </Box>
    </Box>
  )
}

export default Sidebar