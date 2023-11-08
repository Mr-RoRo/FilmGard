import {
  Button,
  IconButton,
  InputAdornment,
  MenuItem,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import MovieCard from "../../components/MovieCard/MovieCard";
import axios from "axios";
import { useState, useEffect, useRef } from "react";
import { GenresList, MovieRes } from "../../components/Interface/interfaces";
import SearchIcon from "@mui/icons-material/Search";
const MoviesPage = () => {
  const [responseMovie, setResponseMovie] = useState<MovieRes>();
  const [isMovies, setMovies] = useState(false);
  const [isSearch, setSearch] = useState(false);
  const [isGenre, setGenre] = useState(false);
  const [genresList, setGenresList] = useState<GenresList[]>();
  const [selectedGenre, setSelectedGenre] = useState("No Genre");
  const searchMovie = useRef<HTMLInputElement>(null);

  const SearchFetch = (nextOrBack: number = 1) => {
    axios
      .get<MovieRes>(
        `https://moviesapi.ir/api/v1/movies?q=${
          searchMovie.current?.value
        }&page=${
          isSearch
            ? Number(responseMovie?.metadata?.current_page) + nextOrBack
            : Number(responseMovie?.metadata.current_page)
        }`
      )
      .then((res) => {
        setResponseMovie(res.data);
      })
      .catch((err) => console.log(err.message));
    setMovies(false);
    setGenre(false);
    setSearch(true);
  };

  const fetchMovies = (nextOrBack: number = 1) => {
    axios
      .get<MovieRes>(
        `https://moviesapi.ir/api/v1/movies?page=${
          isMovies
            ? Number(responseMovie?.metadata?.current_page) + nextOrBack
            : Number(responseMovie?.metadata.current_page)
        }`
      )
      .then((res) => {
        setResponseMovie(res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
    setMovies(true);
  };

  const fetchGenre = () => {
    axios
      .get<GenresList[]>("https://moviesapi.ir/api/v1/genres")
      .then((res) => {
        setGenresList(res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const fetchGenreDetail = (nextOrBack: number = 1) => {
    axios
      .get<MovieRes>(
        `https://moviesapi.ir/api/v1/genres/${selectedGenre}/movies?page=${
          isGenre
            ? Number(responseMovie?.metadata?.current_page) + nextOrBack
            : Number(responseMovie?.metadata.current_page)
        }`
      )
      .then((res) => {
        setResponseMovie(res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  useEffect(() => {
    fetchMovies(1);
    fetchGenre();
  }, []);

  return (
    <Stack justifyContent="space-between">
      <NavBar />
      <Stack mx="150px" mt="100px" mb="40px" gap="40px">
        <Stack
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Typography variant="h2">
            Movies page {responseMovie?.metadata.current_page} of{" "}
            {responseMovie?.metadata.page_count}
          </Typography>
          <Stack gap="30px" flexDirection="row" justifyContent="space-between">
            <TextField
              fullWidth
              placeholder="Search..."
              inputRef={searchMovie}
              onKeyDown={(e) => {
                if (e.keyCode == 13) {
                  SearchFetch(1);
                }
              }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton edge="end" onClick={() => SearchFetch(1)}>
                      <SearchIcon
                        fontSize="large"
                        sx={{ color: "secondary.300" }}
                      />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              select
              size="small"
              value={selectedGenre}
              onChange={(e) => {
                setSelectedGenre(e.target.value);
                axios
                  .get<MovieRes>(
                    `https://moviesapi.ir/api/v1/genres/${e.target.value}/movies?page={page}`
                  )
                  .then((res) => {
                    setResponseMovie(res.data);
                  })
                  .catch((err) => {
                    console.log(err.message);
                  });
                setMovies(false);
                setGenre(true);
                setSearch(false);
              }}
            >
              <MenuItem value="No Genre">No Genre</MenuItem>
              {genresList?.map((item) => (
                <MenuItem key={item.id} value={item.id}>
                  {item.name}
                </MenuItem>
              ))}
            </TextField>
          </Stack>
        </Stack>
        <MovieCard data={responseMovie} />
        {responseMovie && (
          <Stack flexDirection="row" justifyContent="space-between">
            <Button
              variant="outlined"
              onClick={() => {
                {
                  isMovies && fetchMovies(-1);
                  isSearch && SearchFetch(-1);
                  isGenre && fetchGenreDetail(-1);
                }
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              Previous Page
            </Button>
            <Button
              variant="outlined"
              onClick={() => {
                {
                  isMovies && fetchMovies(+1);
                  isSearch && SearchFetch(+1);
                  isGenre && fetchGenreDetail(+1);
                }
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              Next Page
            </Button>
          </Stack>
        )}
      </Stack>
      <Footer />
    </Stack>
  );
};

export default MoviesPage;
