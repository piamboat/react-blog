import NavMain from "../components/NavMain";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  CreatingUserInterface,
  UserInterface,
} from "../interfaces/user.interface";
import UserCard from "../components/UserCard";
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

const User: React.FC = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("authToken");
  const initUser = {
    name: "",
    username: "",
    password: "",
    email: "",
    address: {
      street: "",
      suite: "",
      city: "",
      zipcode: "",
      lat: "",
      lng: "",
    },
    phone: "",
    website: "",
    company: {
      name: "",
      catchPhrase: "",
      bs: "",
    },
  };
  const [user, setUser] = useState<UserInterface[]>([]);
  const [successCreateUser, setSuccessCreateUser] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [createUser, setCreateUser] = useState<CreatingUserInterface>(initUser);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/v1/user", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.ok) {
          const data = await response.json();
          setUser((prev) => data);
        } else {
          navigate("/");
        }
      } catch (error) {
        navigate("/");
      }
    };

    getUsers();
  }, []);

  const handleCreateUser = async (e: React.FormEvent) => {
    e.preventDefault();

    const response = await fetch("http://localhost:3000/api/v1/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        name: createUser.name,
        username: createUser.username,
        password: createUser.password,
        email: createUser.email,
        address: {
          street: createUser.address.street,
          suite: createUser.address.suite,
          city: createUser.address.city,
          zipcode: createUser.address.zipcode,
          lat: createUser.address.lat,
          lng: createUser.address.lng,
        },
        phone: createUser.phone,
        website: createUser.website,
        company: {
          name: createUser.company.name,
          catchPhrase: createUser.company.catchPhrase,
          bs: createUser.company.bs,
        },
      }),
    });

    if (response.ok) {
      setSuccessCreateUser((prev) => true);
      setModalOpen((prev) => false);
      setCreateUser(initUser);
      const data = await response.json();
      setUser((prev) => [...prev, data ]);
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
          onSubmit={handleCreateUser}
        >
          <div style={{ marginBottom: 5 }}>
            <TextField
              variant="outlined"
              id="name"
              label="name"
              value={createUser.name}
              onChange={(e) =>
                setCreateUser((prev) => ({ ...prev, name: e.target.value }))
              }
              size="small"
            />
          </div>
          <div style={{ marginBottom: 5 }}>
            <TextField
              variant="outlined"
              id="username"
              label="username"
              value={createUser.username}
              onChange={(e) =>
                setCreateUser((prev) => ({
                  ...prev,
                  username: e.target.value,
                }))
              }
              size="small"
            />
          </div>
          <div style={{ marginBottom: 5 }}>
            <TextField
              variant="outlined"
              id="password"
              label="password"
              value={createUser.password}
              onChange={(e) =>
                setCreateUser((prev) => ({
                  ...prev,
                  password: e.target.value,
                }))
              }
              size="small"
            />
          </div>
          <div style={{ marginBottom: 5 }}>
            <TextField
              variant="outlined"
              id="email"
              label="email"
              value={createUser.email}
              onChange={(e) =>
                setCreateUser((prev) => ({ ...prev, email: e.target.value }))
              }
              size="small"
            />
          </div>
          <div style={{ marginBottom: 5 }}>
            <TextField
              variant="outlined"
              id="street"
              label="street"
              value={createUser.address.street}
              onChange={(e) =>
                setCreateUser((prev) => ({
                  ...prev,
                  address: {
                    ...prev.address,
                    street: e.target.value,
                  },
                }))
              }
              size="small"
            />
          </div>
          <div style={{ marginBottom: 5 }}>
            <TextField
              variant="outlined"
              id="suite"
              label="suite"
              value={createUser.address.suite}
              onChange={(e) =>
                setCreateUser((prev) => ({
                  ...prev,
                  address: {
                    ...prev.address,
                    suite: e.target.value,
                  },
                }))
              }
              size="small"
            />
          </div>
          <div style={{ marginBottom: 5 }}>
            <TextField
              variant="outlined"
              id="city"
              label="city"
              value={createUser.address.city}
              onChange={(e) =>
                setCreateUser((prev) => ({
                  ...prev,
                  address: {
                    ...prev.address,
                    city: e.target.value,
                  },
                }))
              }
              size="small"
            />
          </div>
          <div style={{ marginBottom: 5 }}>
            <TextField
              variant="outlined"
              id="zipcode"
              label="zipcode"
              value={createUser.address.zipcode}
              onChange={(e) =>
                setCreateUser((prev) => ({
                  ...prev,
                  address: {
                    ...prev.address,
                    zipcode: e.target.value,
                  },
                }))
              }
              size="small"
            />
          </div>
          <div style={{ marginBottom: 5 }}>
            <TextField
              variant="outlined"
              id="lat"
              label="lat"
              value={createUser.address.lat}
              onChange={(e) =>
                setCreateUser((prev) => ({
                  ...prev,
                  address: {
                    ...prev.address,
                    lat: e.target.value,
                  },
                }))
              }
              size="small"
            />
          </div>
          <div style={{ marginBottom: 5 }}>
            <TextField
              variant="outlined"
              id="lng"
              label="lng"
              value={createUser.address.lng}
              onChange={(e) =>
                setCreateUser((prev) => ({
                  ...prev,
                  address: {
                    ...prev.address,
                    lng: e.target.value,
                  },
                }))
              }
              size="small"
            />
          </div>
          <div style={{ marginBottom: 5 }}>
            <TextField
              variant="outlined"
              id="phone"
              label="phone"
              value={createUser.phone}
              onChange={(e) =>
                setCreateUser((prev) => ({
                  ...prev,
                  phone: e.target.value,
                }))
              }
              size="small"
            />
          </div>
          <div style={{ marginBottom: 5 }}>
            <TextField
              variant="outlined"
              id="website"
              label="website"
              value={createUser.website}
              onChange={(e) =>
                setCreateUser((prev) => ({
                  ...prev,
                  website: e.target.value,
                }))
              }
              size="small"
            />
          </div>
          <div style={{ marginBottom: 5 }}>
            <TextField
              variant="outlined"
              id="companyname"
              label="companyname"
              value={createUser.company.name}
              onChange={(e) =>
                setCreateUser((prev) => ({
                  ...prev,
                  company: {
                    ...prev.company,
                    name: e.target.value,
                  },
                }))
              }
              size="small"
            />
          </div>
          <div style={{ marginBottom: 5 }}>
            <TextField
              variant="outlined"
              id="catchphrase"
              label="catchphrase"
              value={createUser.company.catchPhrase}
              onChange={(e) =>
                setCreateUser((prev) => ({
                  ...prev,
                  company: {
                    ...prev.company,
                    catchPhrase: e.target.value,
                  },
                }))
              }
              size="small"
            />
          </div>
          <div style={{ marginBottom: 5 }}>
            <TextField
              variant="outlined"
              id="bs"
              label="bs"
              value={createUser.company.bs}
              onChange={(e) =>
                setCreateUser((prev) => ({
                  ...prev,
                  company: {
                    ...prev.company,
                    bs: e.target.value,
                  },
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
            Create User
          </Button>
        </Box>
      </Modal>
      <Snackbar
        open={successCreateUser}
        autoHideDuration={3000}
        onClose={() => setSuccessCreateUser((prev) => false)}
        message="created user success!"
      />
      <div className="container">
        {user.map((u: UserInterface) => (
          <UserCard
            key={u.id}
            name={u.name}
            email={u.email}
            phone={u.phone}
            address={u.address}
            company={u.company}
          />
        ))}
      </div>
      <div className="fixed-button-container">
        <div
          className="round-button"
          onClick={() => setModalOpen((prev) => true)}
        >
          +
        </div>
      </div>
    </>
  );
};

export default User;
