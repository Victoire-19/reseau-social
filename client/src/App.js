import React from "react";
import { UidContext } from "./components/AppContext";
import Routes from "./components/Routes"
import axios from "axios";
import { useEffect, useState } from "react";

const App =() =>{
  const [Uid, setUid] = useState("");

  useEffect(() => {
    const fetchToken= async() =>{

      await axios({
        method:"get",
        url: `${process.env.REACT_APP_API_URL}jwtid`,
        withCredentials: true
      }).then((res)=>
      {
        console.log(res);
        setUid(res.data);
      })
      .catch((err)=> console.log("No token"))
    }
    fetchToken();
  },[Uid]);


  return(
    <UidContext.Provider value={Uid}>
      <Routes />
    </UidContext.Provider>

  );
  
};

export default App;
