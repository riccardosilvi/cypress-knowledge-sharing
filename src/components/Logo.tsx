import {
  Box,
  BoxProps,
  styled,
  useColorModeValue,
} from "@youngagency/young-ui";
import React from "react";

const LogoImage = styled.img({ height: "100%" });

export const Logo = (props: BoxProps) => {
  const color = useColorModeValue("light", "dark");

  return (
    <Box {...props}>
      <LogoImage
        src={
          color === "light" ? "/images/logo-light.svg" : "/images/logo-dark.svg"
        }
      />
    </Box>
  );
};
