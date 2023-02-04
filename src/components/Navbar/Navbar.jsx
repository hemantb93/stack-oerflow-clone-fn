import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import search from "../../assets/search.svg";
import "./Navbar.css";
import Avatar from "../Avatar/Avatar";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentUser } from "../../actions/currentUser";
import jwtDecode from "jwt-decode";
// import decode from "jwt-decode";

const Navbar = () => {
  const dispatch = useDispatch();
  var User = useSelector((state) => state.currentUserReducer);
  // var User = JSON.parse(localStorage.getItem("Profile"));

  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    navigate("/");
    dispatch(setCurrentUser(null));
  };
  const handleOpen = (e) => {
    e.preventDefault();
    if (User === null) {
      alert("You have to Login to get community page");
      navigate("/Auth");
    } else {
      navigate("/CommunityPage");
    }
  };

  useEffect(() => {
    const token = User?.token;
    if (token) {
      const decodedToken = jwtDecode(token);
      // const decodedToken = decode(token);
      if (decodedToken.exp * 1000 < new Date().getTime()) {
        // handleLogout();
      }
    }
    dispatch(setCurrentUser(JSON.parse(localStorage.getItem("Profile"))));
  }, [User?.token, dispatch]);

  return (
    <nav className="main-nav">
      <div className="navbar">
        <Link to="/" className="nav-item nav-logo">
          <img src={logo} alt="logo" />
        </Link>
        <Link to="/" className="nav-item nav-btn">
          About
        </Link>
        <Link to="/" className="nav-item nav-btn">
          Products
        </Link>
        <Link to="/" className="nav-item nav-btn">
          For_Teams
        </Link>
        <Link to="/subscriptions" className="nav-item nav-btn">
          Subscriptions
        </Link>
        <Link
          to="/CommunityPage"
          className="nav-item nav-btn"
          onClick={handleOpen}
        >
          Community
        </Link>
        <form>
          <input type="text" placeholder="Search..." />
          <img src={search} alt="search" className="search-icon" width="18" />
        </form>
        {User === null ? (
          <Link to="/Auth" className="nav-item nav-link">
            Log in
          </Link>
        ) : (
          <>
            <Avatar
              backgroundColor="#009dff"
              px="10px"
              py="7px"
              borderRadius="50%"
              color="white"
            >
              <Link
                to={`/Users/${User?.result?._id}`}
                style={{ color: "white", textDecoration: "none" }}
              >
                {User.result.name.charAt(0).toUpperCase()}
              </Link>
            </Avatar>

            <button className="nav-item nav-link" onClick={handleLogout}>
              Log out
            </button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
