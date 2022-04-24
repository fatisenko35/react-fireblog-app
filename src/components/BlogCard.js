import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
import CardActionArea from "@material-ui/core/CardActionArea";
import { getUser } from '../helpers/firebase';


const BlogCard = ({blog}) => {
  const currentUser = getUser();
  console.log(currentUser.email);
  
  return (
    <Card sx={{maxWidth : "345px", minWidth : "345px", display : "flex", flexDirection : "column"}}> 
    <CardActionArea >
      
      <CardMedia
        component="img"
        height= "140"
        image={blog.url}
        title = {blog.title}
            />
     
      <CardContent sx={{maxHeight:"150px", margin:"0",backgroundColor:"#EFEEFE"}}>
        
        <Typography variant="body2"  color="text.secondary">
          <Typography variant="h2" sx={{fontWeight:"700",fontSize : "24px",color:"#045682", fontFamily:"Girassol", textDecoration :"none solid rgb(4, 101, 130"}}>{blog.title.toUpperCase()}</Typography>
          <p>{blog.date}</p>
          
          
        </Typography>
        <p>{blog.content.length < 100 ? blog.content : blog.content.slice(0,100)}</p>
      </CardContent>
      
      <div style={{marginLeft : "1rem", padding:"10px 10px 10px 5px"}}>
      <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
           
                color="inherit"
              >

                <AccountCircle />
              </IconButton>
        {blog.user}
      </div>
  </CardActionArea>
      <CardActions sx={{marginLeft:"1rem"}}>
        <Button size="middle">{currentUser.email === blog.user && "Update" }</Button>
        <Button size="middle">{currentUser.email === blog.user && "Delete" }</Button>
        
      </CardActions>
    
   
    </Card>
  )
}

export default BlogCard
