import { Button, Stack, Typography } from "@mui/material";
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
      height="75px"
      px="150px"
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
      position="fixed"
      bgcolor="#fff"
      zIndex={100}
    >
      <Stack flexDirection="row" alignItems="center" gap="30px">
        <img src={logo} width={144} height={54} />
        <Typography>صفحه اصلی</Typography>
        <Typography>فیلم ها</Typography>
        <Typography>ثبت فیلم</Typography>
      </Stack>
      <Button
        disableElevation
        variant="contained"
        size="medium"
        color="primary"
        sx={{ borderRadius: "100px" }}
        href="/login"
      >
        <Typography variant="body1">ثبت نام / ورود</Typography>
      </Button>
    </Stack>
  );
};

export default NavBar;
