import {Link} from "react-router-dom";

export const BlogLink = ({ post }) => {
    return(

            <Link key={ post.slug } to={ `/blog/${post.slug}` }>{post.title}</Link>
        // </li>
    );
};