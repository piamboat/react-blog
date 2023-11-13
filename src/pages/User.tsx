import NavMain from "../components/NavMain";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserInterface } from "../interfaces/user.interface";
import UserCard from "../components/UserCard";

const User: React.FC = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const token = localStorage.getItem("authToken");

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

  return (
    <>
      <NavMain />
      <div className="fixed-button-container">
        <div className="round-button">
            +
        </div>
      </div>
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
    </>
  );
};

export default User;
