import { useState } from 'react';
import { useNavigate } from 'react-router';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { setUser } from "../components/user/index";
import { useAppDispatch } from "../hooks/hooks";


type LoginPageProps = {};

export const LoginPage: React.FC<LoginPageProps> = () => {
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
        navigate('/');
      })
      .catch((error) => {
        setIsSignInError(true);
      });
  };

  return (
    <div>Login</div>
  )
}