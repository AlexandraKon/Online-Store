import { useState } from 'react';
import { useNavigate } from 'react-router';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { setUser } from "../components/user/index";
import { useAppDispatch } from "../hooks/hooks";
import { Link } from "react-router-dom";
import styled from "styled-components";


type LoginPageProps = {};

export const LoginPage: React.FC<LoginPageProps> = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [isSignInError, setIsSignInError] = useState(false);
  const handleSubmit = (email: string, password: string) => {
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
    <LoginSection>
      <LoginDiv>
        <LoginTitle>CREATE ACCOUNT</LoginTitle>
        <FormBlock >
          <FormInput
            onChange={(e) => setEmail(e.target.value)}
            type='name'
            placeholder='name'
            autoComplete='name'
          />
          <FormInput
            onChange={(e) => setEmail(e.target.value)}
            type='lastname'
            placeholder='lastname'
            autoComplete='lastname'
          />
          <FormInput
            onChange={(e) => setEmail(e.target.value)}
            type='email'
            placeholder='Email'
            autoComplete='email'
          />
          <FormInput
                onChange={(e) => setPassword(e.target.value)}
                type='password'
                placeholder='Password'
                autoComplete='current-password'
          />
          <FormCheckInput type='checkbox'/>
          <FormText>Let's get personal! We'll send you only the good stuff: <br/>
          Exclusive early access to Sale, new arrivals and promotions. No nasties.</FormText>
          <FormText>By signing up you agree to Terms of Service and Privacy Policy</FormText>
          <FormBtn>SIGN UP</FormBtn>
          <FormText>
            <Link to='/signup'>I HAVE AN ACCOUNT</Link>
          </FormText>
        </FormBlock>
      </LoginDiv>
    </LoginSection>
  )
}

const LoginSection = styled.section`

`;

const LoginTitle = styled.h2`

`;

const LoginDiv = styled.div`

`;

const FormBlock = styled.form`

`;
const FormInput = styled.input`

`;

const FormCheckInput = styled.input`

`;

const FormText = styled.p`

`;

const FormBtn = styled.input`

`;