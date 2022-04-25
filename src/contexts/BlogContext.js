import React, { createContext, useState, useEffect } from "react";
import { getUser } from "../helpers/firebase";



 const BlogContext = createContext();

export const BlogProvider = ({children}) => {
    const [user, setUser] = useState(currentUser);
    const [blog, setBlog] = useState({title : "", url:"", content:"", email : "", date : "", user: ""});
    const currentUser = getUser();
   
    useEffect(() =>
        setUser(currentUser)
    ,[currentUser])
    const currentDate = new Date().toDateString();
    

    return(
        <BlogContext.Provider value={{user, setUser, blog, setBlog, currentDate}}>
        {children}
        </BlogContext.Provider>
    )
}
export default BlogContext