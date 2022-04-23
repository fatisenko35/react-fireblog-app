import React, { useState, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import cw from "../assets/cw.jpeg";
import { textAlign } from '@mui/system';
import { useNavigate } from 'react-router-dom';
import { signOut } from '@firebase/auth';
import { getUser, logout } from '../helpers/firebase';

export default function Navbar() {
  const [auth, setAuth] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const currentUser = getUser();
 const navigate = useNavigate();
  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    // navigate("/")
  };
  // useEffect(() => {
  //   currentUser ? navigate("/") : navigate("/login")
  // }, [currentUser])

  return (
    <Box sx={{ flexGrow: 1 }}>

      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick= {() => navigate(currentUser && "/")}
          >
            <img
              src={cw}
              alt="clarusway_logo"
              style={{ width: '40px', height: 'auto' }}
            />
          </IconButton>
          <Typography variant="h5" style={{ textAlign: "center" }} component="div" sx={{ flexGrow: 1 }}>
            {"<Fatihsenko /> Blog"}
          </Typography>
          
            <div style={{ display: "flex"}}>
            <Typography variant="h5" style={{ margin: "10px" }} component="div" sx={{ flexGrow: 1 }}>
            {currentUser && currentUser.displayName}
          </Typography>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >

                <AccountCircle />
              </IconButton>
            
                {
                  !currentUser ? (
                    <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                      <MenuItem onClick={()=>{
                        navigate("/login")
                        handleClose();
                      
                      }}>Login</MenuItem>
                      <MenuItem onClick={()=>{
                        navigate("/register")
                        handleClose();
                      
                      }}>Register</MenuItem>

                      </Menu>

                  )

                    : (
                      <Menu
                      id="menu-appbar"
                      anchorEl={anchorEl}
                      anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                      }}
                      keepMounted
                      transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                      }}
                      open={Boolean(anchorEl)}
                      onClose={handleClose}
                      style={{display: 'flex', flexDirection: 'column'}}
                    >
                      
                        <MenuItem onClick={handleClose}>Profile</MenuItem>
                        <MenuItem onClick={()=>{
                          handleClose();
                          navigate("/blog-form")
                        
                        }}>New Blog</MenuItem>
                        <MenuItem onClick={()=>{
                          handleClose();
                          logout()
                          
                          
                          
                        
                        }}>Logout</MenuItem>
                        </Menu>
        

                    )

                }
             
            </div>
          
        </Toolbar>
      </AppBar>
    </Box>
  );
}
