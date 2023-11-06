import { Shadows, createTheme } from "@mui/material/styles";

// Add custom font size
declare module "@mui/material/styles" {
  interface TypographyVariants {
    badge: React.CSSProperties;
    label: React.CSSProperties;
    xSmall: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    badge?: React.CSSProperties;
    label?: React.CSSProperties;
    xSmall?: React.CSSProperties;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    badge: true;
    label: true;
    xSmall: true;
  }
}

const theme = createTheme({
  shape: {
    borderRadius: 8,
  },
  palette: {
    mode: "light",
    primary: {
      main: "#FD7427",
      contrastText: "#fff",
    },
    secondary: {
      main: "#FCFCFC",
      "100": "#F3F4F6",
      "200": "#E5E7EB",
      "300": "#D1D5DB",
      "400": "#9CA3AF",
      "500": "#6B7280",
    },
  },
  typography: {
    fontFamily: ["Vazirmatn", "sans-serif"].join(","),
    h1: {
      fontSize: "28px",
      fontWeight: "bold",
    },
    h2: {
      fontSize: "24px",
      fontWeight: "bold",
    },
    h3: {
      fontSize: "20px",
      fontWeight: "bold",
    },
    body1: {
      fontSize: "18px",
      fontWeight: "bold",
    },
    body2: {
      fontSize: "18px",
      fontWeight: "normal",
    },
    badge: {
      fontSize: "14px",
      fontWeight: "normal",
    },
    label: {
      fontSize: "13px",
      fontWeight: "normal",
    },
    xSmall: {
      fontSize: "10px",
      fontWeight: "normal",
    },
  },
  components: {
    MuiTextField: {
      variants: [
        {
          props: { size: "small" },
          style: {
            width: "100px",
          },
        },
        {
          props: { size: "medium" },
          style: {
            width: "320px",
          },
        },
      ],
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          direction: "rtl",
        },
      },
    },
    MuiIcon: {
      styleOverrides: {
        fontSizeSmall: {
          width: "17px",
          height: "17px",
        },
        fontSizeLarge: {
          width: "25px",
          height: "25px",
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        sizeSmall: {
          width: "17px",
          height: "17px",
        },
        sizeLarge: {
          width: "25px",
          height: "25px",
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          display: "flex",
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          color: "#000",
          textAlign: "right",
          fontSize: "13px",
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: "12px",
          height: "48px",
          fontSize: "13px",
          fontWeight: "normal",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        sizeLarge: {
          height: "48px",
          width: "320px",
        },
        sizeMedium: {
          height: "54px",
          width: "168px",
        },
        sizeSmall: {
          width: "87px",
          height: "48px",
        },
        root: {
          borderColor: "#3F99D2",
          borderRadius: "8px",
          ":disabled": {
            background: "#ABC6F4",
          },
        },
      },
    },
    MuiAlert: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.severity === "info" && {
            backgroundColor: "#60a5fa",
          }),
        }),
      },
    },
  },

  shadows: Array(25)
    .fill("")
    .map((_, index) =>
      index === 1
        ? "0px 1px 4px 0px rgba(0, 0, 0, 0.25)"
        : index === 2
        ? "0px 2px 4px 0px rgba(0, 0, 0, 0.25)"
        : ""
    ) as Shadows,
});

export default theme;
