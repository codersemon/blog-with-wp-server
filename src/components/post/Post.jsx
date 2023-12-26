import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

const Post = () => {
  // blog post state
  const [blogPost, setBlogPost] = useState([]);

  const getBlogPost = async () => {
    const response = await axios.get(
      "https://devswizard.com/test/wp-json/wp/v2/posts"
    );
    setBlogPost(response.data);
    console.log(response.data);
  };

  useEffect(() => {
    getBlogPost();
  }, []);

  return <>
  <div className="container">
  {blogPost.length > 0 ? blogPost.map((item,index) => {
    return <div className="blog_item" key={index}>
        <h1 className="text-info">Post Number: {index+1}</h1>
        <h5>{item.title.rendered}</h5>
        <div dangerouslySetInnerHTML={{ __html: item.content.rendered }} />
        <br /><br />
        <hr />
        <br /><br />
    </div>
  }): 'post nei'}
  </div>
  </>;
};

export default Post;
