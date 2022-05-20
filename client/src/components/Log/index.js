import React, { useState } from "react";
import SignUpForm from "./SignUpForm";
import SignInForm from "./SignInForm";

const Log = (props) => {
  const [SignInModel, setSignInModel] = useState(props.signin);
  const [SignUpModel, setSignUpModel] = useState(props.signup);

  const handleModels = (e) => {
    if (e.target.id === "register") {
      setSignInModel(false);
      setSignUpModel(true);
    } else if (e.target.id === "login") {
      setSignInModel(true);
      setSignUpModel(false);
    }
  };

  return (
    <div className="connection-form">
      <div className="form-container">
        <ul>
          <li
            onClick={handleModels}
            id="register"
            className={SignUpModel ? "active-btn" : null}
          >
            S'inscrire
          </li>
          <li
            onClick={handleModels}
            id="login"
            className={SignInModel ? "active-btn" : null}
          >
            Se connecter
          </li>
        </ul>
        {SignUpModel && <SignUpForm />}
        {SignInModel && <SignInForm />}
      </div>
    </div>
  );
};

export default Log;
