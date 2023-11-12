import { Box, Stack, Typography } from "@mui/material";
import TelegramIcon from "@mui/icons-material/Telegram";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
const Footer = () => {
  return (
    <Stack
      width="100%"
      height="225px"
      mt="65px"
      bgcolor="secondary.main"
      gap="30px"
      alignItems="center"
      justifyContent="center"
      px={{ xs: "10px" }}
    >
      <Stack flexDirection="row" gap="48px">
        <Typography variant="body2">About Me</Typography>
        <Typography variant="body2">Contact Me</Typography>
      </Stack>
      <Stack flexDirection="row" gap="16px">
        <TelegramIcon fontSize="large" />
        <GitHubIcon fontSize="large" />
        <TwitterIcon fontSize="large" />
      </Stack>
      <Typography textAlign={{ xs: "center" }} variant="body2">
        All rights of this service are reserved and belong to{" "}
        <Box component="span" color="primary.main">
          FilmGard
        </Box>
      </Typography>
    </Stack>
  );
};

export default Footer;
