import { Box, Stack, Typography } from "@mui/material";
import logo from "../../assets/LogoTextFilmGard.png";
import { useState } from "react";
const NavBar = () => {
  const [isScroll, setIsScroll] = useState(false);
  window.addEventListener("scroll", () => {
    if (window.pageYOffset > 80) {
      setIsScroll(true);
    } else {
      setIsScroll(false);
    }
  });
  return (
    <Stack
      boxShadow={isScroll ? 1 : 0}
      sx={{ transition: "box-shadow 0.2s" }}
      width="100%"
      height="68px"
      px="150px"
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
      position="fixed"
      bgcolor="#fff"
      zIndex={100}
    >
      <Stack flexDirection="row" alignItems="center" gap="30px">
        <Typography variant="body2" component="a" href="/">
          صفحه اصلی
        </Typography>
        <Typography variant="body2">فیلم ها</Typography>
        <Typography variant="body2">درباره ما</Typography>
      </Stack>
      <Box component="img" src={logo} width={144} height={54} />
    </Stack>
  );
};

export default NavBar;
