import { SignUpForm } from "../../components/SignUpForm";
import { useRedirectOnAuthSuccess } from "../../hooks/useRedirectOnAuthSuccess";
import { Box, Heading, Stack } from "@youngagency/young-ui";

export function SignUpPage() {
  useRedirectOnAuthSuccess();

  return (
    <Box>
      <Stack direction={"column"} spacing={"32px"}>
        <Heading size="xl" weight="heavy" textAlign={"center"}>
          Entra in Young Platform
        </Heading>
        <SignUpForm />
      </Stack>
    </Box>
  );
}
