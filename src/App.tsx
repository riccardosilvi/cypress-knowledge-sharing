import { Box, Stack } from "@youngagency/young-ui";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { AuthContextProvider } from "./context/AuthContext";

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
                  <Route path="/login">login</Route>
                  <Route path="/signup">signup</Route>
                  <Route exact path="/">
                    homepage
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
