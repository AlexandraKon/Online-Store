import React, { useState }from 'react';
import { LoginDiv, LoginTitle, FormBlock, FormInput, FormCheckInput, FormText} from '../styles';
import { FormBtn} from '../../../ui/formBtn/FormBtn';
import { Link } from "react-router-dom";

type LoginProps = { 
    handleClick: ( email:string, password:string) => void;
};

export const Signin: React.FC<LoginProps> = ({
    handleClick,
}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
    <LoginDiv>
        <LoginTitle>SIGN IN</LoginTitle>
        <FormBlock>
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
            <FormBtn onClick={(e) => {e.preventDefault(); handleClick( email, password)}}>LOG IN</FormBtn>
            <FormText>
            <Link to='/signup'>I DO NOT HAVE AN ACCOUNT</Link>
            </FormText>
        </FormBlock>
    </LoginDiv>
    );
};