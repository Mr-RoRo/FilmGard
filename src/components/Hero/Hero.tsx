import { Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import HeroPhoto from "../../assets/HeroPhoto.jpg";
const Hero = () => {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.between("xs", "lg"));
  return (
    <Stack
      flexDirection={{ xs: "column-reverse", sm: "row" }}
      alignItems="center"
      // justifyContent="space-between"
    >
      <Stack
        textAlign={{ xs: "center", sm: "left" }}
        width={{ xs: "300px", sm: "100%" }}
      >
        <Typography variant={mobile ? "body1" : "h1"}>
          Everything you want from the world of cinema can be found in the
          FilmGard
        </Typography>
        <Typography color="secondary.500" variant={mobile ? "body2" : "h2"}>
          FilmGard service has made it easier to find movies by accessing
          thousands of movies
        </Typography>
      </Stack>
      <Stack>
        <Stack
          component="img"
          src={HeroPhoto}
          width={{ xs: 321 , sm: 360, lg: 521 }}
          height={{ xs: 350 , sm: 380 , lg: 575 }}
        />
      </Stack>
    </Stack>
  );
};

export default Hero;
