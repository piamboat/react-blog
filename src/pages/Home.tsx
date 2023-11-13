import { useState } from "react";
import NavMain from "../components/NavMain";
import { Link, useNavigate } from "react-router-dom";
import { Box, TextField, Button } from "@mui/material";

const Home: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername((prev) => e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword((prev) => e.target.value);
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
        const response = await fetch("http://localhost:3000/api/v1/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({username, password}),
        })

        if (response.ok) {
            const data = await response.json();
            // console.log('Message:', data.message);
            // console.log('Result:', data.result);
            localStorage.setItem("authToken", data.result.token);
            localStorage.setItem("username", data.result.username);
            localStorage.setItem("userId", data.result.userId);

            navigate("/post");
        }
        else {
            console.log(`Failed login!`)
        }
    }
    catch (error)
    {
        console.log(`Error while logging in!`)
    }
  };

  return (
    <>
      <NavMain />
      <div className="container">
        <h2>Welcome to Snake Blog</h2>
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
          onSubmit={handleFormSubmit}
        >
          <div>
            <TextField
              variant="outlined"
              id="username"
              label="username"
              value={username}
              onChange={handleUsernameChange}
              size="small"
            />
          </div>
          <div>
            <TextField
              variant="outlined"
              id="password"
              label="password"
              value={password}
              onChange={handlePasswordChange}
              size="small"
            />
          </div>
          <Button type="submit" variant="outlined" style={{maxWidth: '93%', maxHeight: '20%', minWidth: '93%', minHeight: '20%'}}>
            Log in
          </Button>
        </Box>
        <div>
          No account? <Link to="/register">Register here</Link>
        </div>
      </div>
    </>
  );
};

export default Home;
