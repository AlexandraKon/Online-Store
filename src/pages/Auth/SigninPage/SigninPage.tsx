import { useState } from "react";
import { useNavigate } from 'react-router';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../../firebase';
import { LoginDiv, LoginTitleDiv, LoginTitle, FormBlock, FormInput, FormCheckDiv, FormCheckInput, FormText, FormTextAcc} from '../styles';
import { FormBtn} from '../../../ui/formBtn/FormBtn';
import { Link } from "react-router-dom";
import { AiOutlineClose } from 'react-icons/ai';
import { LoginSection, LoginConteiner } from "../styles";

export const SigninPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  
  function logIn(email:string, password: string) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setError('')
    try {
      await logIn(email, password)
      navigate('/')
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <LoginSection>
      <LoginConteiner>
      <LoginDiv>
        <LoginTitleDiv>
            <LoginTitle>SIGN IN</LoginTitle>
            <Link to='/'>
                <AiOutlineClose fontSize={22}/>
            </Link>
        </LoginTitleDiv>
        <FormBlock onSubmit={handleSubmit}>
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
            <FormCheckDiv>
                <FormCheckInput type="checkbox"/>
                <FormText>Let's get personal! We'll send you only the good stuff: <br/>
                Exclusive early access to Sale, new arrivals and promotions. No nasties.</FormText>
            </FormCheckDiv>
            <FormBtn >SIGN IN</FormBtn>
            <FormTextAcc>
            <Link to='/signup'>I DO NOT HAVE AN ACCOUNT</Link>
            </FormTextAcc>
        </FormBlock>
    </LoginDiv>
        </LoginConteiner>
    </LoginSection>
    
  )
}