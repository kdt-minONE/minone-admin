import { useCallback } from "react";
import { useAxios } from "./axios";
import { SignupFormData } from "../pages/Signup";

export const useSignup = () => {
  const [request, response] = useAxios();

  const run = useCallback(
    (data: SignupFormData) => {
      return request({
        url: "auth/signup",
        method: "POST",
        data,
      });
    },
    [request]
  );

  return [run, response] as [typeof run, typeof response];
};

export const useLogin = () => {
  const [request, response] = useAxios();

  const run = useCallback(
    (email: string, password: string) => {
      return request({
        url: "auth/login",
        method: "POST",
        data: {
          email,
          password,
        },
      });
    },
    [request]
  );

  return [run, response] as [typeof run, typeof response];
};
