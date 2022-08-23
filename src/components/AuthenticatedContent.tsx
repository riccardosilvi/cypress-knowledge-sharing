import { useAuth } from "../context/AuthContext";
import { PropsWithChildren } from "react";

export function AuthenticatedContent({ children }: PropsWithChildren<{}>) {
  const { user } = useAuth();
  return user ? <>{children}</> : null;
}

export function NotAuthenticatedContent({ children }: PropsWithChildren<{}>) {
  const { user } = useAuth();
  return !user ? <>{children}</> : null;
}
