import {
  Box,
  Button,
  FormHelperText,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import PassInput from "../../components/PassInput/PassInput";
import FormPic from "../../assets/FormPic.jpg";
import Logo from "../../assets/LogoTextFilmGard.png";

const SignUp = () => {
  return (
    <>
      <Stack flexDirection="row" justifyContent="space-between">
        <Stack
          width="404px"
          alignItems="center"
          justifyContent="center"
          height="100vh"
        >
          <Box component="img" src={Logo} width="163px" height="63px" />
          <Stack gap="20px">
            <Stack gap="5px">
              <FormHelperText>نام کاربری</FormHelperText>
              <TextField
                size="medium"
                variant="outlined"
                placeholder="نام کاربری"
              />
            </Stack>
            <Stack gap="5px">
              <FormHelperText>ایمیل</FormHelperText>
              <TextField size="medium" variant="outlined" placeholder="ایمیل" />
            </Stack>
            <PassInput label="رمز عبور" placeHolder="رمز عبور" />
            <Button variant="contained" size="large" disableElevation>
              ثبت نام
            </Button>
            <Typography variant="badge">
              حساب کاربری دارید؟{" "}
              <Typography
                variant="badge"
                color="primary"
                component={"a"}
                href="/Login"
              >
                وارد شوید
              </Typography>
            </Typography>
          </Stack>
        </Stack>
        <Box
          component="img"
          src={FormPic}
          width="80%"
          height="100vh"
          overflow="hidden"
          sx={{
            clipPath:
              "polygon(100% 0%, 0% 0%, 0% 100%, 100% 100%, 95.5% 95.5%, 100% 91%, 95.82% 86.2%, 100% 82%, 95.91% 77.29%, 100% 73%, 96% 69%, 100% 65%, 96% 61%, 100% 56%, 96% 52%, 100% 47%, 96% 43%, 100% 39%, 96% 35%, 100% 31%, 96% 27%, 100% 23%, 96% 19%, 100% 15%, 96% 11%, 100% 7%, 96% 4%)",
          }}
        />
      </Stack>
    </>
  );
};

export default SignUp;
