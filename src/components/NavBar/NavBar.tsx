import {
  Box,
  Drawer,
  IconButton,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import logo from "../../assets/LogoTextFilmGard.png";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
const NavBar = () => {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.between("xs", "lg"));
  const [isScroll, setIsScroll] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  window.addEventListener("scroll", () => {
    if (window.pageYOffset > 60) {
      setIsScroll(true);
    } else {
      setIsScroll(false);
    }
  });

  const handleCloseDrawer = () => {
    setIsOpen(!isOpen);
  };
  const NavItem = () => (
    <Stack
      width={{ xs: "50vw", lg: "100%" }}
      flexDirection={{ xs: "column", lg: "row" }}
      alignItems={{ lg: "center" }}
      gap="30px"
      m={{ xs: "10px" }}
    >
      <Typography variant="body2" component="a" href="/">
        Home
      </Typography>
      <Typography component="a" href="/FilmGard/Movies" variant="body2">
        Movies
      </Typography>
      <Typography variant="body2">About Us</Typography>
    </Stack>
  );
  return (
    <Stack
      boxShadow={isScroll ? 1 : 0}
      sx={{ transition: "box-shadow 0.2s" }}
      width="100%"
      height="68px"
      px={{ xs: "20px", sm: "30px", lg: "40px" }}
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
      position="fixed"
      bgcolor="#fff"
      zIndex={100}
    >
      {mobile ? (
        <>
          <IconButton onClick={handleCloseDrawer}>
            <MenuIcon color="inherit" />
          </IconButton>
          <Drawer anchor="left" open={isOpen} onClose={handleCloseDrawer}>
            {NavItem()}
          </Drawer>
        </>
      ) : (
        NavItem()
      )}

      <Box component="img" src={logo} width={144} height={54} />
    </Stack>
  );
};

export default NavBar;
