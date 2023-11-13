import NavMain from "../components/NavMain";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PostCard from "../components/PostCard";
import { PostInterface } from "../interfaces/post.interface";

const Post: React.FC = () => {
  const navigate = useNavigate();
  const [post, setPost] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      try {
        const token = localStorage.getItem("authToken");

        const response = await fetch("http://localhost:3000/api/v1/post", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.ok) {
          const data = await response.json();
          setPost((prev) => data);
        } else {
          navigate("/");
        }
      } catch (error) {
        navigate("/");
      }
    };

    getPosts();
  }, []);

  return (
    <>
      <NavMain />
      <div className="container">
        {post.map((p: PostInterface) => (
          <PostCard key={p.id} title={p.title} body={p.body} user={p.user}/>
        ))}
      </div>
    </>
  );
};

export default Post;
