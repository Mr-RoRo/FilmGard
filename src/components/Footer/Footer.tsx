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
    >
      <Stack flexDirection="row" gap="48px">
        <Typography variant="body2">درباره من</Typography>
        <Typography variant="body2">تماس با من </Typography>
      </Stack>
      <Stack flexDirection="row" gap="16px">
        <TelegramIcon fontSize="large" />
        <GitHubIcon fontSize="large" />
        <TwitterIcon fontSize="large" />
      </Stack>
      <Typography variant="body2">
        کلیه حقوق این سرویس محفوظ و متعلق به{" "}
        <Box component="span" color="primary.main">
          تیم فیلم گرد
        </Box>{" "}
        می باشد
      </Typography>
    </Stack>
  );
};

export default Footer;
