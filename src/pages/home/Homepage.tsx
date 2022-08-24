import { Box, Heading, Paragraph, Stack } from "@youngagency/young-ui";
import { useAuth } from "../../context/AuthContext";
import { NotAuthenticatedContent } from "../../components/AuthenticatedContent";

export function Homepage() {
  const { user = "" } = useAuth();
  return (
    <Box mb={"32px"} textAlign={"center"}>
      <Stack direction={"column"} spacing={"16px"}>
        <Heading size="xl" weight="heavy">
          Crypto Made Easy
        </Heading>
        <Heading size="md" weight="heavy">
          Il miglior exchange italiano per acquistare Bitcoin
        </Heading>
        <Heading size="xl" weight="heavy">
          Ciao {user || "ospite"}
        </Heading>
        <NotAuthenticatedContent>
          <Paragraph size={"md"} weight={"heavy"}>
            Che ne dici di loggarti?
          </Paragraph>
        </NotAuthenticatedContent>
      </Stack>
    </Box>
  );
}
