import React, { useEffect, useState } from 'react';
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import blogPng from "../assets/blok.png";
import {  getUser, addUser } from '../helpers/firebase';
import { useNavigate } from 'react-router-dom';
import { style } from '@mui/system';
const useStyles = makeStyles((theme) => ({

  paper: {
    marginTop: theme.spacing(4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    padding: theme.spacing(13),
    backgroundColor: "#046582",
  },
  blogImg: {
    width: 200,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: "#046582",
    color: "white",
    fontWeight: "bold",
    outline: "none",
    border:"none",
    "&:hover": {
      color: "#046582",
      backgroundColor: "rgba(152, 151, 151, 0.5)",
     
     
    },
  },
  title: {
    fontSize: 35,
    fontFamily: "Girassol",
    color: "#046582",
  },
}));

const BlogForm = () => {
  const [blog, setBlog] = useState({title : "", url:"", content:"", email : "", date : "", user: ""})
  const currentUser = getUser();
  const navigate = useNavigate();
  const currentDate = new Date().toDateString()
  useEffect(() => {
    currentUser ? navigate("/") : console.log(currentUser)    
  }, [])
  const handleChange = (e) => {
      setBlog({...blog, [e.target.name] : e.target.value, date : currentDate, user: currentUser.email})
  }

  const handleSubmit =(e) => {
    if (blog.title === "" && blog.url === "" && blog.content === "" ) {
      alert("Please enter a value")
      return;
    }
    e.preventDefault();
    addUser(blog)
    e.target.reset()
  }

  const classes = useStyles();
  return (
   <Container component="main" maxWidth="xs" className={classes.container}>
         <CssBaseline />
      <div className={classes.paper}>
      <Avatar className={classes.avatar}>
          <img src={blogPng} alt="blog" className={classes.blogImg} />
        </Avatar>
        <Typography component="h1" variant="h5" className={classes.title}>
          ── New Blog ──
        </Typography>
        <form className={classes.form} noValidate onSubmit={handleSubmit}>
        <Grid container spacing={2}>
        <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="title"
                label="Title"
                name="title"
                // value={newBlog.title}
                autoFocus
                onChange={handleChange}

              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="url"
                label="Image URL"
                type="text"
                id="image"
              // value={newBlog.image}
              onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="outlined-multiline-static"
                required
                label="Content"
                multiline
                name="content"
                // value={newBlog.content}
                fullWidth
                rows={15}
                onChange={handleChange}
                // defaultValue="Default Value"
                variant="outlined"
              />
            </Grid>
          
          {/* <Button
            type="submit"
            // fullWidth
            // variant="contained"
            className={classes.submit}

          >
            Submit
          </Button> */}
          </Grid>
          <button type="submit" className={classes.submit} style={{width: '100%', margin: '10px 0', padding: '8px 5px'}}>Submit</button>
          
        </form>
      </div>
    </Container>
    
  )
}

export default BlogForm