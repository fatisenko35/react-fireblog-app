import React from 'react'
import BlogCard from '../components/BlogCard'
import { useFetch } from '../helpers/firebase'
import Typography from "@material-ui/core/Typography";

import Grid from "@material-ui/core/Grid";
const Dashboard = () => {
  const {blogList} = useFetch()
  console.log(blogList)
  return (

     <div style={{border: '1px solid red', marginTop:"1rem"}}>
       <h1 style={{textAlign:"center", fontFamily: "Girassol",color: "#046582"}}>
          ── DASHBOARD ──
       </h1>
        {/* <div style={{display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", border: '1px solid red'}}> */}
        <Grid container spacing={2}>
        {blogList && blogList.map((blog) => (
       
          <Grid item xs={12} lg={3} md={4} sm={6}>
            <BlogCard blog={blog} />

          </Grid>
        
      ))}</Grid>
      
     </div>
   
    
  )
}

export default Dashboard