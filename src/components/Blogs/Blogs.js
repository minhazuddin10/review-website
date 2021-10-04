import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  return (
    <div>
      <div className="blogs">
        {blogs.map((blog) => (
          <Blog key={blog.id} blog={blog}></Blog>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
