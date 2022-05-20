import React, { useState } from "react";
import axios from "axios";
import SignInForm from "./SignInForm";

const SignUpForm = () => {
  const [formSubmit, setformSubmit] = useState(false);
  const [pseudo, setpseudo] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [controlPassword, setcontrolPassword] = useState("");

  const handleRegister = async (e) => {

    e.preventDefault();

    // const terms = document.querySelector("terms");
    const pseudoError = document.querySelector(".pseudo.error");
    const emailError = document.querySelector(".email.error");
    const passwordError = document.querySelector(".password.error");
    const passwordConfirmerror = document.querySelector(".password-confirm.error");
    const termsError = document.querySelector(".terms.error");

    passwordConfirmerror.innerHTML = "";
    termsError.innerHTML = "";
    if (password !== controlPassword || password==="" || pseudo==="" || email==="" || controlPassword==="") {
       if (password !== controlPassword)
        passwordConfirmerror.innerHTML = "Le mot de passe ne correspond pas";
      // if (!terms.checked)
      //   termsError.innerHTML = "Veuillez valider les conditions générales";
      if(password==="" || pseudo==="" || email==="" || controlPassword==="") 
      termsError.innerHTML = "certains des vos cases sont nulles";

    } else {
      axios({
        method: "post",
        url: `${process.env.REACT_APP_API_URL}api/user/register`,
        data: {
          pseudo,
          email,
          password,
        },
      })
        .then((res) => {
          console.log(res)
          // console.log(res.data.errors.pseudo)
          if (res.data.errors) {
            pseudoError.innerHTML = res.data.errors.pseudo;
            emailError.innerHTML = res.data.errors.email;
            passwordError.innerHTML = res.data.errors.password;
          } else{
            setformSubmit(true)
          }
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <>
      {formSubmit ? (
        <>
          <SignInForm />
          <span></span>
          <h4 className="success">
            {" "}
            Enreristrement reussi, Veuillez vous connecter{" "}
          </h4>
        </>
      ) : (
        <form action="" onSubmit={handleRegister} id="sign-up-form">
          {/* <div id="sign-up-form"> */}
          <label htmlFor="pseudo">Pseudo</label>
          <br />
          <input
            type="text"
            name="pseudo"
            id="pseudo"
            onChange={(e) => setpseudo(e.target.value)}
            value={pseudo}
          />
          <div className="pseudo error"></div>
          <br />

          <label htmlFor="email">Email</label>
          <br />
          <input
            type="text"
            name="email"
            id="email"
            onChange={(e) => setemail(e.target.value)}
            value={email}
          />
          <div className="email error"></div>
          <br />

          <label htmlFor="password">Mot de passe</label>
          <br />
          <input
            type="password"
            name="password"
            id="password"
            onChange={(e) => setpassword(e.target.value)}
            value={password}
          />
          <div className="password error"></div>
          <br />

          <label htmlFor="password-conf">Confirmer le mot de passe</label>
          <br />
          <input
            type="password"
            name="password"
            id="password-conf"
            onChange={(e) => setcontrolPassword(e.target.value)}
            value={controlPassword}
          />
          <div className="password-confirm error"></div>
          <br />
          {/* <input type="checkbox" id="terms"/> */}
          {/* <label htmlFor="terms">
            J'accepte les
            <a href="/" target="_blank" rel="noopenser noreferrer">
              conditions générales
            </a>
          </label> */}
          <div className="terms error"></div>
          <br />
          {/* <input type="submit" value="valider inscription" onClick={() => handleRegister()}/> */}
          <input type="submit" value="valider inscription" />
          {/* </div> */}
        </form>
      )}
    </>
  );
};

export default SignUpForm;
