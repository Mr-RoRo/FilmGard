import { Stack, Typography } from "@mui/material";
import HeroPhoto from "../../assets/HeroPhoto.jpg";
const Hero = () => {
  return (
    <Stack
      flexDirection="row"
      alignItems="center"
      justifyContent="space-between"
    >
      <Stack>
        <Typography fontSize="36px">
          Everything you want from the world of cinema can be found in the
          FilmGard
        </Typography>
        <Typography color="secondary.500" variant="h2">
          FilmGard service has made it easier to find movies by accessing
          thousands of movies
        </Typography>
      </Stack>
      <Stack>
        <img src={HeroPhoto} width={521} height={575} />
      </Stack>
    </Stack>
  );
};

export default Hero;
