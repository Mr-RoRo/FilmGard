import {
  Divider,
  Grid,
  Skeleton,
  Stack,
  SvgIcon,
  Typography,
} from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MovieDetailsInteface } from "../../components/Interface/interfaces";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import PublicIcon from "@mui/icons-material/Public";
import VideoCameraFrontIcon from "@mui/icons-material/VideoCameraFront";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import MilitaryTechIcon from "@mui/icons-material/MilitaryTech";
import GradeIcon from "@mui/icons-material/Grade";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import Groups2Icon from "@mui/icons-material/Groups2";
import DvrIcon from "@mui/icons-material/Dvr";

const MovieDetails = () => {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState<MovieDetailsInteface>();
  useEffect(() => {
    axios
      .get<MovieDetailsInteface>(`https://moviesapi.ir/api/v1/movies/${id}`)
      .then((res) => setMovieDetails(res.data))
      .catch((err) => console.log(err.message));
  }, []);

  const MovieInfo = [
    { id: 1, icon: CalendarMonthIcon, content: movieDetails?.released },
    { id: 2, icon: PublicIcon, content: movieDetails?.country },
    { id: 3, icon: VideoCameraFrontIcon, content: movieDetails?.director },
    { id: 4, icon: AccessTimeIcon, content: movieDetails?.runtime },
  ];
  const RatingInfo = [
    {
      id: 1,
      icon: EmojiEventsIcon,
      name: "Awards: ",
      content: movieDetails?.awards,
    },
    {
      id: 2,
      icon: MilitaryTechIcon,
      name: "Metascore: ",
      content: movieDetails?.metascore,
    },
    {
      id: 3,
      icon: GradeIcon,
      name: "Imdb Rating: ",
      content: movieDetails?.imdb_rating,
    },
    {
      id: 4,
      icon: ThumbUpIcon,
      name: "Imdb Vote: ",
      content: movieDetails?.imdb_votes,
    },
    {
      id: 5,
      icon: Groups2Icon,
      name: "Actors: ",
      content: movieDetails?.actors,
    },
    {
      id: 6,
      icon: DvrIcon,
      name: "Genre: ",
      content: movieDetails?.genres.map((genre) => {
        return genre + " ";
      }),
    },
  ];

  return (
    <Stack bgcolor="secondary.200">
      <NavBar />
      {movieDetails ? (
        <Stack
          bgcolor="#fff"
          borderRadius={1.5}
          p="15px"
          mt="120px"
          mx="150px"
          gap="20px"
        >
          <Stack flexDirection="row" width="100%">
            <Stack flexDirection="row" gap="10px">
              <Stack
                component="img"
                src={movieDetails?.poster}
                width="250px"
                height="250px"
                borderRadius={1.5}
              />
              <Stack justifyContent="space-between" height="100%" py="15px">
                <Typography variant="h1">{movieDetails?.title}</Typography>
                {MovieInfo.map((info) => (
                  <Stack
                    flexDirection="row"
                    key={info.id}
                    alignItems="center"
                    gap="5px"
                  >
                    <SvgIcon
                      color="primary"
                      fontSize="large"
                      component={info.icon}
                    />
                    <Typography variant="body1">{info.content}</Typography>
                  </Stack>
                ))}
              </Stack>
            </Stack>
            <Divider orientation="vertical" flexItem>
              Plot
            </Divider>
            <Typography py="15px" flex="1" variant="h3">
              {movieDetails?.plot}
            </Typography>
          </Stack>
          <Divider orientation="horizontal" flexItem>
            Images
          </Divider>
          <Stack flexDirection="row" justifyContent="space-between">
            {movieDetails.images.map((image, index) => (
              <Stack
                component="img"
                key={index}
                src={image}
                width="500px"
                height="300px"
                borderRadius={1.5}
              />
            ))}
          </Stack>
          <Divider orientation="horizontal" flexItem>
            More About Movie
          </Divider>
          <Grid container xl={13} spacing={2}>
            {RatingInfo.map((info) => (
              <Grid xs={6} item>
                <Stack
                  flexDirection="row"
                  alignItems="center"
                  gap="5px"
                  key={info.id}
                >
                  <SvgIcon
                    fontSize="large"
                    color="primary"
                    component={info.icon}
                  />
                  <Typography>
                    {info.name}
                    {info.content}
                  </Typography>
                </Stack>
              </Grid>
            ))}
          </Grid>
        </Stack>
      ) : (
        <Skeleton
          sx={{ alignSelf: "center", p: "15px", mt: "120px", mx: "150px" }}
          variant="rounded"
          width={1600}
          height={1200}
        />
      )}
      <Footer />
    </Stack>
  );
};

export default MovieDetails;
