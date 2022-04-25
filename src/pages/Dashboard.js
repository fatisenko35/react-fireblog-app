import React from 'react'
import BlogCard from '../components/BlogCard'
import { useFetch } from '../helpers/firebase'

const Dashboard = () => {
  const {blogList} = useFetch()
  console.log(blogList)
  return (
     <>
        {blogList && blogList.map((blog) => (
       
          <BlogCard blog={blog} />
        
      ))}
    </>
  )
}

export default Dashboard