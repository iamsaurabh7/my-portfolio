import { extendTheme } from "@chakra-ui/react";

const customTheme = extendTheme({
  colors: {
    bgPrimary: {
      500: "#14131a",
    },
    bgSecondary: {
      500: "#3a3942",
    },
    purpleText: {
      500: "rgba(178,121,216,.959)",
    },
    gradientPrimary:
      "linear-gradient(to right, #FEDA75, #FA7E1E, #D62976, #962FBF)",
    gradientSecondary:
      "linear-gradient(to right, #962FBF, #D62976, #FA7E1E, #FEDA75)",
  },
});

export default customTheme;
