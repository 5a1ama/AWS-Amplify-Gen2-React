import { Box, Button, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { signUp } from "aws-amplify/auth";


const RegisterForm = () => {

    const [firstName, setFirstName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');


    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
          try {
            await signUp({
                username: email,
                password: password,
                options: {
                  userAttributes: {
                    email:email,
                    phone_number: phone,
                    nickname: firstName,
                  },
                }
              });
          } 
          catch (error: any) {
              console.error('Error uploading file:', error);
          }
        };

  return (
    <Box display='flex' justifyContent='center' width='100%'>
        <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column',alignItems: 'center', justifyContent:'center',
            backgroundColor:'rgba(0, 0, 0, 0.15)',
            backdropFilter: 'blur(10px)',
            width:{xs:'80%', sm:'35%'},
            height:{xs:'55%', sm:'60%'},
            pt:'10px',
            pb:'10px'
           }}>
          <Typography variant="h3" sx={{ fontSize:{xs:'50px', sm:'70px'}}}>
            Create Account
          </Typography>
            <TextField
              variant="outlined"
              margin="normal"
              required
              id="first name"
              label="first name"
              name="first name"
              autoComplete="first name"
              autoFocus
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              sx={{width:'90%', backgroundColor:'whitesmoke'}}
            />
             {/* <TextField
              variant="outlined"
              margin="normal"
              required
              id="last name"
              label="last name"
              name="last name"
              autoComplete="last name"
              autoFocus
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              sx={{width:'90%', backgroundColor:'whitesmoke'}}
            /> */}
            <TextField
              variant="outlined"
              margin="normal"
              required
              id="email"
              label="email"
              type='email'
              name="email"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              sx={{width:'90%', backgroundColor:'whitesmoke'}}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              name="password"
              label="password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              sx={{width:'90%', backgroundColor:'whitesmoke'}}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              name="confirm password"
              label="confirm password"
              type="password"
              id="confirm password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              sx={{width:'90%', backgroundColor:'whitesmoke'}}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              id="phone"
              label="phone"
              type='tel'
              name="phone"
              autoComplete="tel"
              value={phone}
              onChange={(e) =>  {
                const value = e.target.value;
                if (/^\d*$/.test(value)) {
                  setPhone(value);
                }
              }}
              sx={{width:'90%', backgroundColor:'whitesmoke'}}
            />
            <Button
              type="submit"
              variant="contained"
              color="secondary"
              sx={{ mb: 2 , mt:2,  fontSize:{xs:'22px', sm:'25px'}, width:{xs:'40%', sm:'30%'}}}
            >
              Register
            </Button>
        </Box>
      </Box>
  )
}

export default RegisterForm