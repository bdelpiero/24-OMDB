import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchMovies } from "../redux/actions/movies";

import Home from "../components/Home";

export default ({ history }) => {
  const [data, setData] = useState({
    title: "",
    year: "",
    plot: "short",
  });
  const dispatch = useDispatch();

  const handleInputChange = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(fetchMovies(data)).then(() => history.push("/search"));
  };

  return <Home data={data} handleInputChange={handleInputChange} handleSubmit={handleSubmit} />;
};
