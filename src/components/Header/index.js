import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import API from "../../API";

import RMDBLogo from "../../images/react-movie-logo.svg";
import TMDBLogo from "../../images/tmdb_logo.svg";

import {
  Wrapper,
  Content,
  LogoImg,
  TMDBLogoImg,
  LogBtn,
  User,
} from "./Header.styles";

import { Context } from "../../context";

const Header = () => {
  const [user, setUser] = useContext(Context);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogout = async () => {
    setError("");
    try {
      const session_id = user.sessionId;
      await API.logOut(session_id);

      setUser(undefined);

      navigate("/");
    } catch (err) {
      setError("Error was caught in logging out");
      console.error(error);
    }
  };

  return (
    <Wrapper>
      <Content>
        <Link to="/">
          <LogoImg src={RMDBLogo} alt="rmdb-logo" />
        </Link>
        {user ? (
          <>
            <User>Logged in as: {user.username}</User>
            <LogBtn onClick={handleLogout}>Log out</LogBtn>
          </>
        ) : (
          <Link to="/login">
            <LogBtn>Log in</LogBtn>
          </Link>
        )}
        <TMDBLogoImg src={TMDBLogo} alt="tmdb-logo" />
      </Content>
    </Wrapper>
  );
};

export default Header;
