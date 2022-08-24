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
  passwordConfirm: string;
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
  passwordConfirm: yup
    .string()
    .oneOf([yup.ref("password")])
    .required("Campo Conferma password richiesto"),
});

const signUpDefaultInitialValues = {
  email: "",
  password: "",
  passwordConfirm: "",
};
const passwordStrengthPhrase = {
  length: "Minimo 8 caratteri,",
  lowercase: "almeno una minuscola,",
  uppercase: "almeno una maiuscola,",
  number: "almeno un numero,",
  symbol: "almeno un simbolo.",
  safe: "Password sicura",
};

export function SignUpForm() {
  const {
    api: {
      requests: { signUp: signUpRequest },
    },
  } = useAuth();
  const handleSubmit = React.useCallback(
    async (
      submittedValues: FormValues,
      { setSubmitting, setErrors }: FormikHelpers<FormValues>
    ) => {
      const { passwordConfirm, ...credentials } = validationSchema.cast(
        submittedValues
      ) as FormValues;
      try {
        setSubmitting(true);
        await signUpRequest(credentials);
      } catch (e) {
        const thrownError = e as {
          errors: AuthApiErrors;
        };
        const errors = {
          ...thrownError.errors,
          ...(!thrownError.errors.password
            ? {}
            : { passwordConfirm: thrownError.errors.password }),
        };
        setErrors(errors);
      }
      setSubmitting(false);
    },
    [signUpRequest]
  );
  return (
    <Stack justify="center" align="center" marginTop="72px" width="100%">
      <Box width="100%" maxWidth="368px">
        <Formik
          initialValues={signUpDefaultInitialValues}
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
                <PasswordField
                  name="passwordConfirm"
                  label={"Conferma password"}
                  autoComplete="new-password"
                  hasCompletedCheck
                />

                <UpdatedButton
                  type="submit"
                  form="signup"
                  isLoading={isSubmitting}
                  isDisabled={!isValid}
                  isFullWidth
                >
                  Registrati
                </UpdatedButton>
              </Stack>
            </Form>
          )}
        </Formik>
      </Box>
    </Stack>
  );
}
