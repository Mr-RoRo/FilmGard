import { Chip, Grid, Skeleton, Stack, Typography } from "@mui/material";
import { MovieRes } from "../Interface/interfaces";
import StarIcon from "@mui/icons-material/Star";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import NoImage from "../NoImage/NoImage";

interface Props {
  data: MovieRes | undefined;
}

const MovieCard = ({ data }: Props) => {
  return (
    <Grid container spacing={4} justifyContent="center">
      {data
        ? data.data?.map((card) => (
            <Grid item key={card?.id}>
              <Stack
                width="363px"
                height="550px"
                bgcolor="#fff"
                border="1px solid"
                borderColor="secondary.200"
                borderRadius={1.5}
                justifyContent="space-between"
                p="8px 7px"
                sx={{
                  transition: "box-shadow 0.2s",
                  ":hover": {
                    boxShadow: "2",
                  },
                }}
              >
                <NoImage
                  src={card.poster}
                  width={347}
                  height={394}
                  alt="Movie Poster"
                />
                <Stack m="8px 9px" sx={{ direction: "ltr" }} gap="5px">
                  <Typography variant="body1">{card?.title}</Typography>
                  <Stack flexDirection="row" justifyContent="space-between">
                    <Stack flexDirection="row" gap="3px">
                      <StarIcon color="warning" fontSize="inherit" />
                      <Typography variant="body2">
                        {card?.imdb_rating}
                      </Typography>
                    </Stack>
                    <Stack flexDirection="row" gap="3px">
                      <CalendarMonthIcon fontSize="inherit" />
                      <Typography variant="body2">{card?.year}</Typography>
                    </Stack>
                  </Stack>
                  <Stack flexDirection="row" gap="5px">
                    {card.genres?.map((genre) => (
                      <Chip key={genre} label={genre} />
                    ))}
                  </Stack>
                </Stack>
              </Stack>
            </Grid>
          ))
        : [1, 2, 3, 4].map((item) => (
            <Grid item>
              <Skeleton key={item} variant="rounded" width={363} height={550} />
            </Grid>
          ))}
    </Grid>
  );
};

export default MovieCard;
