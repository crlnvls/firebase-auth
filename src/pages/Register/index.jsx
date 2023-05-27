import React from "react";

import AuthForm from "../../components/AuthForm";
import { useAuth } from "../../context/AuthContext";

const Register = () => {
  const { register } = useAuth();

  return (
    <>
      <AuthForm
        loginOrRegister={register}
        title={"Register"}
        button={"Create account"}
        accountQuestion={"Already have an account?"}
        path={"/login"}
        link={"Login"}
      />
    </>
  );
};

export default Register;
