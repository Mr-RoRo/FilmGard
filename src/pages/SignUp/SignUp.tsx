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
import axios from "axios";
import { useRef } from "react";

const SignUp = () => {
  const username = useRef<HTMLInputElement>(null);
  const email = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);
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
                inputRef={username}
                size="medium"
                variant="outlined"
                placeholder="نام کاربری"
              />
            </Stack>
            <Stack gap="5px">
              <FormHelperText>ایمیل</FormHelperText>
              <TextField
                inputRef={email}
                size="medium"
                variant="outlined"
                placeholder="ایمیل"
              />
            </Stack>
            <PassInput
              inputRef={password}
              label="رمز عبور"
              placeHolder="رمز عبور"
            />
            <Button
              variant="contained"
              size="large"
              disableElevation
              onClick={async () => {
                axios
                  .post("https://moviesapi.ir/api/v1/register", {
                    name: username.current?.value,
                    email: email.current?.value,
                    password: password.current?.value,
                  })
                  .then((res) => {
                    console.log(res.data);
                  })
                  .catch((err) => {
                    console.log(err.message);
                  });
              }}
            >
              ثبت نام
            </Button>
            <Stack gap="5px">
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
              <Typography variant="badge">
                برای برگشت به سایت{" "}
                <Typography
                  variant="badge"
                  color="primary"
                  component={"a"}
                  href="/"
                >
                  کلیک کنید
                </Typography>
              </Typography>
            </Stack>
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
