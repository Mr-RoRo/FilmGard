import { Divider, Stack } from "@mui/material";
import NavBar from "../../components/NavBar/NavBar";
import Hero from "../../components/Hero/Hero";
import Footer from "../../components/Footer/Footer";

const HomePage = () => {
  return (
    <>
      <NavBar />
      <Stack mx="150px" mt="90px" mb="40px">
        <Hero />
        <Divider sx={{ fontSize: "20px", mt: "40px" }}>
          فیلم های برتر IMDB
        </Divider>
      </Stack>
      <Footer />
    </>
  );
};

export default HomePage;
