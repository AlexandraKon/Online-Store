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


  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  return (
    <section>
      <div>
        <h2>CREATE ACCOUNT</h2>
        <form onSubmit={handleSubmit}>
          <input
            onChange={(e) => setEmail(e.target.value)}
            type='email'
            placeholder='Email'
            autoComplete='email'
          
          />
        </form>
      </div>
    </section>
  )
}