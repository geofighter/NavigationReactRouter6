import { blogData } from "../assets/blogData.js";
import {BlogLink} from "./BlogLink";
import {Outlet} from "react-router-dom";

export const BlogPage = () =>{
    return(
        <>
            <h1>Blog</h1>
            {
                blogData.map(post => (
                    <li key={post.title}>
                        <BlogLink post={post}/>
                    </li>
                ))
            }
            <Outlet />
        </>

    );
}

