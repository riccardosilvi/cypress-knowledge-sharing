import { LogInForm } from "../../components/LogInForm";
import { useRedirectOnAuthSuccess } from "../../hooks/useRedirectOnAuthSuccess";
import { Box, Heading, Stack } from "@youngagency/young-ui";

export function LogInPage() {
  useRedirectOnAuthSuccess();

  return (
    <Box>
      <Stack direction={"column"} spacing={"32px"}>
        <Heading size="xl" weight="heavy" textAlign={"center"}>
          Accedi
        </Heading>
        <LogInForm />
      </Stack>
    </Box>
  );
}
