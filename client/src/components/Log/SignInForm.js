import React, { useState } from "react";
import axios from "axios";

const SignInForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [messageError, setMessageError] = useState("");

  const handleLogin = () => {
    // if(password.length < 4 || email.trim().length < 2 ) return setMessageError('Veuillez tres bien completer les champs');
    const URL_SERVER = process.env.REACT_APP_API_URL;
    // const emailError=document.querySelector('.email.error');
    // const passwordError=document.querySelector('.password.error');
        axios({
          method: "post",
          url: `${URL_SERVER}api/user/login`,
          // withCredentials: true,
          data: {
              email,
              password
          },
      }).then((res)=>{
        console.log(res)
          if(res.data.errors){
            setMessageError("Mot de passe ou mail incorrect");
            // emailError.innerHTML=res.data.errors.email;
            // passwordError.innerHTML=res.data.errors.password
            
          }else{
            // const currentUser=res.data.user.pseudo
            // window.location=`/home/${currentUser}`;
            window.location="/"
            // console.clear()
            // console.log(res)
          }
      })
      .catch((err)=>{
          console.log(err)
      });  
      
  }

  return (
    <div  className="sign-up-form">
      <label htmlFor="email">Email</label>
      <br />
      <input
        type="text"
        name="email"
        id="email"
        onChange={(e) => setEmail(e.target.value)} 
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
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />
      {/* <div className="password error"> {messageError} </div>
      <br/> */}
      <br/>
      <div className="password error">{messageError}</div>
      <br/>
      <input type="submit" value="Se connecter" onClick={() => handleLogin()} />
    </div>
  );
};

export default SignInForm;
