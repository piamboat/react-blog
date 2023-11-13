import { Link, useLocation } from "react-router-dom";

const NavMain: React.FC = () => {
  const location = useLocation();
  return (
    <nav>
      <div className="logo">SnakeBlog</div>
      {location.pathname != "/" && (
        <div className="nav-link">
          <Link to="/user">User</Link>
          <Link to="/post">Post</Link>
        </div>
      )}
    </nav>
  );
};

export default NavMain;
