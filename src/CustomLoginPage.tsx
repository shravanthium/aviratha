import firebase from "firebase/compat/app";
import "firebase/compat/auth"; 
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { Login, LoginForm } from "react-admin";
import { useEffect, useState } from "react";
import { Box } from "@mui/material";
import Logo from "./logo.png";

const uiConfig = {
    signInFlow: 'popup',
    signInSuccessUrl: "/",
    signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID,]
  }
  
  export default function CustomLoginPage(props: any) {
    const [widget, setWidget] = useState(false);
    

    useEffect(() => {
        setWidget(true);
      }, [])
  
    return (
        <Login {...props}>
            <Box
            component="img"
            sx={{
                height: 64,
                bgcolor: "white"
            }}
            alt="Aviratha Logo"
            src={Logo}
        />
            <LoginForm {...props} />
            <StyledFirebaseAuth 
            firebaseAuth={firebase.auth()}
            uiConfig={uiConfig}
            />
        </Login>
        
            
    );
  }