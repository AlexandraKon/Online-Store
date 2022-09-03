import { useNavigate } from 'react-router';
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useAppDispatch } from "../../../hooks/hooks";
import { LoginSection, LoginConteiner } from "../styles";
import { auth } from '../../../firebase';
import {setDoc,doc} from 'firebase/firestore';
import { db } from '../../../firebase';
import React, { useState } from 'react';

import { LoginDiv, LoginTitleDiv, LoginTitle, FormBlock, FormInput, FormCheckDiv, FormCheckInput, FormText, FormTextAcc} from '../styles';
import { FormBtn} from '../../../ui/formBtn/FormBtn';
import { Link } from "react-router-dom";
import { AiOutlineClose } from 'react-icons/ai';

type LoginPageProps = {};

export const LoginPage: React.FC<LoginPageProps> = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");


  function signUp(email:string, password:string) {
    createUserWithEmailAndPassword(auth, email, password);
    setDoc(doc (db, 'users', email), {
      savedShows: []
    })
  }

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    try {
      await signUp(email, password);
      navigate('/signin')
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <LoginSection>
      <LoginConteiner>
      <LoginDiv>
            <LoginTitleDiv>
                <LoginTitle>CREATE ACCOUNT</LoginTitle>
                <Link to='/'>
                    <AiOutlineClose fontSize={22}/>
                </Link>
            </LoginTitleDiv>
        <FormBlock onSubmit={handleSubmit}>
            <FormInput
            onChange={(e) => setName(e.target.value)}
            type='text'
            placeholder='First Name'
            autoComplete='name'
            />
            <FormInput
            onChange={(e) => setLastname(e.target.value)}
            type='text'
            placeholder='Last Name'
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
            <FormCheckDiv>
                <FormCheckInput type='checkbox'/>
                <FormText>Let's get personal! We'll send you only the good stuff: <br/>
                Exclusive early access to Sale, new arrivals and promotions. No nasties.</FormText>
            </FormCheckDiv>
            
            <FormText>By signing up you agree to <strong>Terms of Service</strong> and <strong>Privacy Policy</strong></FormText>
            <FormBtn >SIGN UP</FormBtn>
                <Link to='/signin'>
                <FormTextAcc>

                    I HAVE AN ACCOUNT
                    </FormTextAcc>

                </Link>
        </FormBlock>
    </LoginDiv>
    
      </LoginConteiner>
    </LoginSection>
  )
}