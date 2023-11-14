import NavMain from "../components/NavMain";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PostCard from "../components/PostCard";
import {
  CreatingPostInterface,
  PostInterface,
} from "../interfaces/post.interface";
import { Snackbar, Modal, Box, Button, TextField } from "@mui/material";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  textAlign: "center",
};

const Post: React.FC = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("authToken");
  const userId = localStorage.getItem("userId");
  const initPost = {
    // don't forget to send userId when make request
    title: "",
    body: "",
  };
  const [post, setPost] = useState<PostInterface[]>([]);
  const [successCreatePost, setSuccessCreatePost] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [createPost, setCreatePost] = useState<CreatingPostInterface>(initPost);

  useEffect(() => {
    const getPosts = async () => {
      try {
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

  const handleCreatePost = async (e: React.FormEvent) => {
    e.preventDefault();

    const response = await fetch("http://localhost:3000/api/v1/post", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        userId: Number(userId),
        title: createPost.title,
        body: createPost.body,
      }),
    });

    if (response.ok) {
      setSuccessCreatePost((prev) => true);
      setModalOpen((prev) => false);
      setCreatePost(initPost);
      const data = await response.json();
      setPost((prev) => [...prev, data]);
    }
  };

  const handleDeletePost = async (delId: number) => {
    const response = await fetch(`http://localhost:3000/api/v1/post/${delId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (response.ok) {
      const updatedPost = post.filter(u => u.id !== delId)
      setPost(prev => [...updatedPost])
    }
  };

  return (
    <>
      <NavMain />
      <Modal
        open={modalOpen}
        onClose={() => setModalOpen((prev) => false)}
        aria-labelledby="Create a User"
        aria-describedby="Please fill in all fields!"
      >
        <Box
          component="form"
          sx={style}
          noValidate
          autoComplete="off"
          onSubmit={handleCreatePost}
        >
          <div style={{ marginBottom: 5 }}>
            <TextField
              variant="outlined"
              id="title"
              label="title"
              value={createPost.title}
              onChange={(e) =>
                setCreatePost((prev) => ({ ...prev, title: e.target.value }))
              }
              size="small"
            />
          </div>
          <div style={{ marginBottom: 5 }}>
            <TextField
              variant="outlined"
              id="body"
              label="body"
              value={createPost.body}
              onChange={(e) =>
                setCreatePost((prev) => ({
                  ...prev,
                  body: e.target.value,
                }))
              }
              size="small"
            />
          </div>
          <Button
            type="submit"
            variant="outlined"
            style={{
              marginTop: 5,
              maxWidth: "67%",
              maxHeight: "20%",
              minWidth: "67%",
              minHeight: "20%",
            }}
          >
            Create Post
          </Button>
        </Box>
      </Modal>
      <Snackbar
        open={successCreatePost}
        autoHideDuration={3000}
        onClose={() => setSuccessCreatePost((prev) => false)}
        message="created post success!"
      />
      <div className="container">
        {post.map((p: PostInterface) => (
          <PostCard key={p.id} postObj={p} handleDeletePost={handleDeletePost} />
        ))}
      </div>
      <div className="fixed-button-container">
        <div className="round-button" onClick={() => setModalOpen((prev) => true)}>+</div>
      </div>
    </>
  );
};

export default Post;
