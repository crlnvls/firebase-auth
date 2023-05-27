import React from "react";

import AuthForm from "../../components/AuthForm";
import { useAuth } from "../../context/AuthContext";

const Login = () => {
  const { login } = useAuth();

  return (
    <>
      <AuthForm
        loginOrRegister={login}
        title={"Login"}
        button={"Login"}
        accountQuestion={"Don't have an account?"}
        path={"/register"}
        link={"Register"}
      />
    </>
  );
};

export default Login;
