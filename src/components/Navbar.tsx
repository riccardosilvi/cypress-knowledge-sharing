import { Box, Stack, UpdatedButton } from "@youngagency/young-ui";
import { Link, useRouteMatch } from "react-router-dom";
import { useTheme } from "styled-components";
import { Logo } from "./Logo";
import { useAuth } from "../context/AuthContext";
import * as routes from "../routes";

function AuthSection({ url }: { url: string }) {
  return (
    <Stack direction="row" spacing="4px">
      {!url.includes(routes.LOGIN_PATH) && (
        <Link to={routes.LOGIN_PATH}>
          <UpdatedButton size="xs" variant="ghost">
            Hai già un account? <span>Accedi</span>
          </UpdatedButton>
        </Link>
      )}
      {!url.includes(routes.SIGNUP_PATH) &&
        !url.includes(routes.START_NOW_PATH) && (
          <Link to={routes.SIGNUP_PATH}>
            <UpdatedButton size="xs">
              Non hai un account? <span>Iscriviti</span>
            </UpdatedButton>
          </Link>
        )}
    </Stack>
  );
}

export const Navbar = () => {
  const { url } = useRouteMatch();
  const theme = useTheme();
  const { user } = useAuth();

  return (
    <Box
      px={["16px", null, "0"]}
      height="72px"
      display="flex"
      alignItems="center"
      justifyContent="center"
      boxShadow="0px 1px 2px rgba(0, 0, 0, 0.05)"
      position="sticky"
      top="0"
      width="100%"
      minWidth={["100%", "container.12"]}
      backgroundColor="base"
      zIndex={theme.zIndices.docked + 1}
    >
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        width="100%"
        maxWidth={["100%", "container.12"]}
      >
        <Link to={"/"}>
          <Logo height="30px" />
        </Link>
        {!user ? <AuthSection url={url} /> : null}
      </Box>
    </Box>
  );
};
