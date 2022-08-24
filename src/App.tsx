import { Box, Stack } from "@youngagency/young-ui";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { AuthContextProvider } from "./context/AuthContext";
import { PrivateRoute } from "./components/PrivateRoute";
import * as routes from "./routes";
import { MarketsPage } from "./pages/markets/MarketsPage";
import { Homepage } from "./pages/home/Homepage";
import { SignUpPage } from "./pages/signup/SignUpPage";
import { LogInPage } from "./pages/login/LogInPage";

function App() {
  return (
    <AuthContextProvider>
      <div role="main" style={{ position: "relative", lineHeight: "1.22" }}>
        <Box width={"100vw"} height={"100vh"}>
          <Stack direction={"column"} spacing={"72px"} align={"center"}>
            <Navbar />
            <main>
              <Box
                px={["16px", null, "0"]}
                minWidth={["100%", "container.12"]}
                maxWidth={["100%", "container.12"]}
              >
                <Switch>
                  <Route path={routes.LOGIN_PATH}>
                    <LogInPage />
                  </Route>
                  <Route path={routes.SIGNUP_PATH}>
                    <SignUpPage />
                  </Route>
                  <PrivateRoute path={routes.MARKETS_PATH}>
                    <MarketsPage />
                  </PrivateRoute>
                  <Route exact path={routes.HOME_PATH}>
                    <Homepage />
                  </Route>
                </Switch>
              </Box>
            </main>
          </Stack>
        </Box>
      </div>
    </AuthContextProvider>
  );
}

export default App;
