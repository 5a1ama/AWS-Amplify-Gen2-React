import { AppBar, Box, Button, IconButton, InputBase, Toolbar, styled } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import logo from '../assets/logo.png'

const Search = styled('div')(() => ({
    position: 'absolute',
    top: '60px',
    left: '35px',
    backgroundColor: 'white',
    '&:hover': {
      backgroundColor: 'white',
    },
    height: '4vh',
    borderBottom: '2px solid black'
  }));
  
  const SearchIconWrapper = styled('div')(() => ({
    paddingLeft: '10px',
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'black',
    width: '100%',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      [theme.breakpoints.up('sm')]: {
        width: '25ch',
        '&:focus': {
          width: '35ch',
        },
      },
      '&::placeholder': {
        opacity: 1
      },
    },
  }));

function Navbar() {

  return (
    <AppBar position='sticky'>
      <Toolbar sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundColor:'white'}}>
        <Box display='flex' flexDirection='row' justifyContent='center' textAlign='center' width= '100%'>
          <Button sx={{color:'black', fontSize:'10px'}}>Create Account</Button>
          <Button sx={{color:'black', fontSize:'10px'}}>Sign in</Button>
        </Box>
        <Box display='flex' flexDirection='row' justifyContent='center' textAlign='center' width= '100%' >
          <Search>
            <SearchIconWrapper>
              <SearchIcon sx={{color:'black'}}/>
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="What are you looking for?"
              inputProps={{ 'aria-label': 'search' }}/>
          </Search>
          <Box
          component="img"
          src={logo}
          alt="logo"
          sx={{ width: '150px', height:'100px' }}
          />
          <Box position='absolute' top='55px' right='35px'>
            <IconButton>
              <FavoriteBorderOutlinedIcon sx={{ fontSize: '35px', color: 'black' }}/>
            </IconButton>
            <IconButton>
              <ShoppingCartOutlinedIcon sx={{ fontSize: '35px', color: 'black' }}/>
            </IconButton>
          </Box>
        </Box>
        <Box display='flex' flexDirection='row' justifyContent='center' textAlign='center' width= '100%'>
          <Button sx={{color:'black'}}>Men</Button>
          <Button sx={{color:'black'}}>Women</Button>
          <Button sx={{color:'black'}}>Kids</Button>
          <Button sx={{color:'black'}}>Sports</Button>
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar