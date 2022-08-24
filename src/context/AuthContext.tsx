import React from "react";
import * as authApi from "../api/auth";
import { AuthApiErrors } from "../api/auth";

type Context = ReturnType<typeof useProvideAuth>;

const AuthContext = React.createContext<Context | null>(null);

export function AuthContextProvider({ children }: React.PropsWithChildren<{}>) {
  const auth = useProvideAuth();
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}

function useAuthApi() {
  const [data, setData] = React.useState<null | string>(null);
  const [isLoading, setIsLoading] = React.useState(false);
  const [errors, setErrors] = React.useState<AuthApiErrors>({});
  const createApiEndpointRequest = React.useCallback(
    (endpointName: "signup" | "login") =>
      async (credentials: {
        email: string;
        password: string;
      }): Promise<void> => {
        if (isLoading) return;
        try {
          setIsLoading(true);
          setErrors({});
          const { user } = await authApi.request(endpointName, credentials);
          setData(user);
        } catch (e: any) {
          const thrownError = e as {
            errors: AuthApiErrors;
          };
          setErrors(thrownError.errors);
          setIsLoading(false);
          throw thrownError;
        }
      },
    [isLoading]
  );
  const resetData = React.useCallback(() => setData(null), []);
  return React.useMemo(
    () => ({
      data,
      isLoading,
      errors,
      requests: {
        signUp: createApiEndpointRequest("signup"),
        logIn: createApiEndpointRequest("login"),
      },
      resetData,
    }),
    [data, isLoading, errors, createApiEndpointRequest, resetData]
  );
}

function useProvideAuth() {
  const { data, resetData, ...api } = useAuthApi();
  return {
    user: data,
    api,
    signout: resetData,
  };
}

export function useAuth() {
  return React.useContext(AuthContext) as Context;
}
