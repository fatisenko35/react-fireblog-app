import * as React from 'react';
import { useNavigate } from 'react-router-dom'
import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import FavoriteIcon from "@mui/icons-material/Favorite";
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CardActionArea from "@material-ui/core/CardActionArea";
import { getUser } from '../helpers/firebase';
import { Grid } from '@material-ui/core';


const BlogCard = ({ blog }) => {
  const currentUser = getUser();
  const navigate = useNavigate()
  const handleClick = () => {
    currentUser ? navigate(`/detail`, { state: { blog } }) : navigate("/login")

  }
  return (

    
    
      <Card sx={{ maxWidth: 345, margin: "auto" }} >
        <CardActionArea onClick={handleClick} >
          <CardMedia
            component="img"
            height="200"
            image={blog.url}
            alt={blog.title}
            sx={{ width: 200, margin: "auto" }}
          />
          <CardContent sx={{ backgroundColor: "#FFF6EA" }}>
            <Typography gutterBottom variant="h5" component="div" sx={{ fontFamily: "'Girassol', cursive", color: "#046482" }}>
              {blog.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {blog.date}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {(blog.content.length) > 100 ? (blog.content.slice(0, 100) + "...") : (blog.content)}
            </Typography>
          </CardContent>
        </CardActionArea>
        <Typography sx={{ display: "flex", justifyContent: "flex-start", alignItems: "center", gap: "10px", marginBottom: "2rem" }}>
          <AccountCircleIcon />{blog.user}
        </Typography>
        <Typography sx={{ display: "flex", justifyContent: "flex-start", alignItems: "center", gap: "10px" }}>
          <IconButton>
            <FavoriteIcon />
          </IconButton>
          <IconButton>
            <ChatBubbleOutlineIcon />
          </IconButton>
        </Typography>

      </Card>

    

  )
}

export default BlogCard
