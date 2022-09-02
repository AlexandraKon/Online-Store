import { useState } from 'react';
import { useNavigate } from 'react-router';
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { setUser } from "../../components/user/index";
import { useAppDispatch } from "../../hooks/hooks";
import { Login } from "../../components/Auth/Login/login";

type LoginPageProps = {};

export const LoginPage: React.FC<LoginPageProps> = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleRegistration = (name: string, email: string, password: string) => {
    const auth = getAuth();
    createUserWithEmailAndPassword (auth, email, password)
    .then(({ user }) => {
      updateProfile(user, {
          displayName: name,
      })
      .then(() => {
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: user.refreshToken,
            name:user.displayName,
          })     
        );
      })
      .then(() => {
        navigate('/signup');
    })
  })
  }


  return (
    <LoginSection>
      <LoginDiv>
        <LoginTitle>CREATE ACCOUNT</LoginTitle>
        <Login handleClick={handleRegistration}>

        </Login>
        
      </LoginDiv>
    </LoginSection>
  )
}