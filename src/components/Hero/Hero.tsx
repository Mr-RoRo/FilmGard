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
          هرچی از دنیای سینما بخواید تو فیلم گرد پیدا میشه
        </Typography>
        <Typography color="secondary.500" variant="h2">
          سرویس فیلم گرد با دسترسی به هزاران فیلم پیدا کردن فیلم را راحت تر کرده
        </Typography>
      </Stack>
      <Stack>
        <img src={HeroPhoto} width={521} height={575} />
      </Stack>
    </Stack>
  );
};

export default Hero;
