export type AuthApiErrors = {
  email?: string;
  password?: string;
};

export function request(
  endpoint: "signup" | "login",
  body: { email: string; password: string }
) {
  return fetch(`api/account/${endpoint}`, {
    method: "POST",
    body: JSON.stringify(body),
  })
    .then(
      (res) =>
        res.json() as Promise<{
          success: boolean;
          user: string;
          errors: AuthApiErrors;
        }>
    )
    .then((res) => {
      if (!!res.success) {
        return { user: res.user };
      }
      return Promise.reject({ errors: res.errors });
    });
}
