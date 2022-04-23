import React from 'react'
import BlogCard from '../components/BlogCard'
import { useFetch } from '../helpers/firebase'

const Dashboard = () => {
  const {blogList} = useFetch()
  console.log(blogList)
  return (
    <div style={{display: 'flex', gap: '25px', flexWrap : 'wrap', margin: '3rem', justifyContent: 'center'}} >
        {blogList && blogList.map((blog) => (
        <>
          <BlogCard blog={blog} />
        </>
      ))}
    </div>
   
  )
}

export default Dashboard