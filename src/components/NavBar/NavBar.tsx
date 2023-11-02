import { Button, Stack, Typography } from "@mui/material";
import logo from "../../assets/LogoTextFilmGard.png";
const NavBar = () => {
  return (
    <Stack
      boxShadow={1}
      width="100%"
      height="80px"
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
      >
        <Typography variant="body1">ثبت نام / ورود</Typography>
      </Button>
    </Stack>
  );
};

export default NavBar;
