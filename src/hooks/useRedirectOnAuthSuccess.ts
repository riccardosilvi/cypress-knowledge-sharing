import { useAuth } from "../context/AuthContext";
import { useHistory, useLocation } from "react-router-dom";
import { HOME_PATH } from "../routes";
import { useEffect } from "react";

export function useRedirectOnAuthSuccess() {
  const { user } = useAuth();

  let history = useHistory();
  let { state = { from: { pathname: HOME_PATH } } } = useLocation();

  useEffect(() => {
    if (user) {
      // @ts-ignore
      let { from } = state;
      history.replace(from);
    }
  }, [user, history, state]);
}
