import React, { useEffect, useState } from "react";
import "./Home.css";
import axios from "axios";
import Header from "./Header";
import Banner from "./Banner";
import Row from "./Row";
import GenreBox from "./GenreBox";

const apiKey = "7e5122f42b3d47b2f9c1deaf4e1d2214";
const url = "https://api.themoviedb.org/3";
const imgUrl = "https://image.tmdb.org/t/p/original";
const upcoming = "upcoming";
const nowPlaying = "now_playing";
const popular = "popular";
const topRated = "top_rated";

const Home = () => {
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const [nowPlayingMovies, setNowPlayingMovies] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [genre, setGenre] = useState([]);

  useEffect(() => {
    axios.get(`${url}/movie/${upcoming}?api_key=${apiKey}`).then((response) => {
      setUpcomingMovies(response.data.results);
    });

    axios
      .get(`${url}/movie/${nowPlaying}?api_key=${apiKey}`)
      .then((response) => {
        setNowPlayingMovies(response.data.results);
      });

    axios.get(`${url}/movie/${popular}?api_key=${apiKey}`).then((response) => {
      setPopularMovies(response.data.results);
    });

    axios.get(`${url}/movie/${topRated}?api_key=${apiKey}`).then((response) => {
      setTopRatedMovies(response.data.results);
    });

    axios.get(`${url}/genre/movie/list?api_key=${apiKey}`).then((response) => {
      setGenre(response.data.genres);
      console.log(response.data.genres);
    });
  }, []);

  return (
    <section className="home">
      <Header />
      <Banner movie={popularMovies[0]} imgUrl={imgUrl} />
      <Row title={"Upcoming"} arr={upcomingMovies} imgUrl={imgUrl} />
      <Row title={"Now Playing"} arr={nowPlayingMovies} imgUrl={imgUrl} />
      <Row title={"Popular"} arr={popularMovies} imgUrl={imgUrl} />
      <Row title={"Top Rated"} arr={topRatedMovies} imgUrl={imgUrl} />
      <GenreBox genres={genre} />
    </section>
  );
};

export default Home;
