import { useState } from "react";
import { Signin } from "./Signin";
import { LoginSection, TextError } from "../styles";
import { useAppDispatch } from "../../../hooks/hooks";
import { useNavigate } from 'react-router';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { setUser } from "../../../components/user/index";

type LoginPageProps = {};

export const SigninPage: React.FC<LoginPageProps> = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [isSignInError, setIsSignInError] = useState(false);
  
  const handleLogin = (email: string, password: string) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: user.refreshToken,
            name: user.displayName,
          })
        );
        navigate("/");
      })
      .catch((error) => {
        setIsSignInError(true);
      });
  };
  return (
    <LoginSection>
        <Signin handleClick={handleLogin}></Signin>
        {isSignInError ? (
          <TextError>Email or password is wrong. Please, try again.</TextError>
        ) : null
        }
    </LoginSection>
    
  )
}