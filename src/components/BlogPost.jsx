import {Link, useParams} from "react-router-dom";
import { blogData } from "../assets/blogData.js";

export const BlogPost = () =>{
    const { slug } = useParams();
    const post = blogData.find(post => post.slug === slug);
    return(
        <>
            <h1>{ post.title }</h1>
            <Link to={ `/blog` }><button>Regresar</button></Link>

            <blockquote>Un Post de: @{ post.author }</blockquote>
            <div className="card">
                <p>
                    { post.content }
                </p>
            </div>
        </>
    );
}