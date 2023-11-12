import { Divider, Stack } from "@mui/material";
import NavBar from "../../components/NavBar/NavBar";
import Hero from "../../components/Hero/Hero";
import Footer from "../../components/Footer/Footer";
import MovieCard from "../../components/MovieCard/MovieCard";
import { useEffect, useState } from "react";
import axios from "axios";
import { MovieRes } from "../../components/Interface/interfaces";

const HomePage = () => {
  const [responseMovie, setResponseMovie] = useState<MovieRes>();
  useEffect(() => {
    const fetch = () => {
      axios
        .get<MovieRes>("https://moviesapi.ir/api/v1/movies?page=1")
        .then((res) => {
          setResponseMovie(res.data);
        })
        .catch((err) => {
          console.log(err.message);
        });
    };
    fetch();
  }, []);
  return (
    <>
      <NavBar />
      <Stack mx={{ sm: "30px", lg: "40px" }} mt="90px">
        <Hero />
        <Divider
          sx={{
            fontSize: "20px",
            mt: "40px",
            mb: "25px",
            width: { xs: "90vw", lg: "100%" },
            alignSelf: { xs: "center" },
          }}
        >
          IMDB Top Movies
        </Divider>
        <MovieCard data={responseMovie} />
      </Stack>
      <Footer />
    </>
  );
};

export default HomePage;
