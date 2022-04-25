import React, { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { IconButton } from "@mui/material";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
// import AppContext from "../contexts/AppContext";
import Button from "@mui/material/Button";
import { DeleteUser, getUser } from "../helpers/firebase";


function Detail() {
  const  currentUser = getUser();

  const location = useLocation();
  const [detail, setDetail] = useState({});
  const navigate = useNavigate();
  
  useEffect(() => {
    setDetail(location.state.blog);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  console.log(detail.user);

  const DeleteClick = () =>{
    DeleteUser(location.state.blog.id);
    navigate("/")
  }
  const EditClick = () =>{
    navigate("/update", {state:{detail}})
    
  }

  return (
    <div style={{ marginTop: "2rem" }}>
      {currentUser ? (
        <Card sx={{ maxWidth: "80vw", margin: "auto" }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="200"
              image={detail.url}
              alt={detail.item}
              sx={{ width: 200, margin: "auto" }}
            />
            <CardContent sx={{ backgroundColor: "#FFF6EA" }}>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={{ fontFamily: "'Girassol', cursive", color: "#046482" }}
              >
                {detail.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {detail.date}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {detail.content}
              </Typography>
            </CardContent>
          </CardActionArea>
          <Typography
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              gap: "10px",
              marginBottom: "2rem",
            }}
          >
            <AccountCircleIcon />
            {detail.user}:{currentUser.user}
          </Typography>
          <Typography
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <IconButton>
              <FavoriteIcon />
            </IconButton>
            <IconButton>
              <ChatBubbleOutlineIcon />
            </IconButton>
          </Typography>
        </Card>
      ) : (
        "Not Found"
      )}
      {currentUser.email === detail.user && (
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            marginTop: "1rem",
          }}
        >
            
          <Button variant="contained" color="success" onClick={EditClick}>
            Update
          </Button>
          <Button variant="contained" color="error" onClick={DeleteClick}>
            Delete
          </Button>
        </div>
      )}
    </div>
  );
}

export default Detail;
