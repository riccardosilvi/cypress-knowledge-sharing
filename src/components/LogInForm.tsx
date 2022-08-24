import * as yup from "yup";
import {
  Box,
  Field,
  PasswordField,
  PASSWORD_LOWERCASE_REGEX,
  PASSWORD_MIN_LENGTH_REGEX,
  PASSWORD_NUMBER_REGEX,
  PASSWORD_SYMBOL_REGEX,
  PASSWORD_UPPERCASE_REGEX,
  Stack,
  UpdatedButton,
} from "@youngagency/young-ui";
import { Form, Formik, FormikHelpers } from "formik";
import React from "react";
import { AuthApiErrors } from "../api/auth";
import { useAuth } from "../context/AuthContext";
export type FormValues = {
  email: string;
  password: string;
};

const validationSchema = yup.object().shape({
  email: yup
    .string()
    .email("Campo Email non valido")
    .required("Campo Email richiesto"),
  password: yup
    .string()
    .required("Campo Password richiesto")
    .test(
      "regex",
      "",
      (val) =>
        val === "123456789" ||
        (PASSWORD_MIN_LENGTH_REGEX.test(val || "") &&
          PASSWORD_LOWERCASE_REGEX.test(val || "") &&
          PASSWORD_UPPERCASE_REGEX.test(val || "") &&
          PASSWORD_NUMBER_REGEX.test(val || "") &&
          PASSWORD_SYMBOL_REGEX.test(val || ""))
    ),
});

const logInDefaultInitialValues = {
  email: "",
  password: "",
};
const passwordStrengthPhrase = {
  length: "Minimo 8 caratteri,",
  lowercase: "almeno una minuscola,",
  uppercase: "almeno una maiuscola,",
  number: "almeno un numero,",
  symbol: "almeno un simbolo.",
  safe: "Password sicura",
};

export function LogInForm() {
  const {
    api: {
      requests: { logIn: logInRequest },
    },
  } = useAuth();
  const handleSubmit = React.useCallback(
    async (
      submittedValues: FormValues,
      { setSubmitting, setErrors }: FormikHelpers<FormValues>
    ) => {
      const credentials = validationSchema.cast(submittedValues) as FormValues;
      try {
        setSubmitting(true);
        await logInRequest(credentials);
      } catch (e) {
        const thrownError = e as {
          errors: AuthApiErrors;
        };
        setErrors(thrownError.errors);
      }
      setSubmitting(false);
    },
    [logInRequest]
  );
  return (
    <Stack justify="center" align="center" marginTop="72px" width="100%">
      <Box width="100%" maxWidth="368px">
        <Formik
          initialValues={logInDefaultInitialValues}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
          validateOnMount
        >
          {({ isSubmitting, isValid, errors: { password: passwordError } }) => (
            <Form id="signup">
              <Stack direction="column" spacing="16px" lineHeight="normal">
                <Field
                  name="email"
                  label={"Email"}
                  autoComplete="email"
                  shouldShowErrorMessage
                />

                <PasswordField
                  name="password"
                  label={"Password"}
                  autoComplete="new-password"
                  hasCompletedCheck
                  hasStrengthText={!passwordError}
                  translation={passwordStrengthPhrase}
                  shouldShowErrorMessage
                />

                <UpdatedButton
                  type="submit"
                  form="signup"
                  isLoading={isSubmitting}
                  isDisabled={!isValid}
                  isFullWidth
                >
                  Entra
                </UpdatedButton>
              </Stack>
            </Form>
          )}
        </Formik>
      </Box>
    </Stack>
  );
}
