import React, { useState }from 'react';
import { LoginDiv, LoginTitle, FormBlock, FormInput, FormCheckInput, FormText} from '../styles';
import { FormBtn} from '../../../ui/formBtn/FormBtn';
import { Link } from "react-router-dom";

type LoginProps = { 
    handleClick: (name: string, lastname:string, email:string, password:string) => void;
};

export const Signup: React.FC<LoginProps> = ({
    handleClick,
}) => {
    const [name, setName] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <LoginDiv>
        <LoginTitle>CREATE ACCOUNT</LoginTitle>
        <FormBlock>
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
            <FormCheckInput type='checkbox'/>
            <FormText>Let's get personal! We'll send you only the good stuff: <br/>
            Exclusive early access to Sale, new arrivals and promotions. No nasties.</FormText>
            <FormText>By signing up you agree to Terms of Service and Privacy Policy</FormText>
            <FormBtn onClick={(e) => {e.preventDefault(); handleClick(name, lastname, email, password)}}>SIGN UP</FormBtn>
            <FormText>
            <Link to='/signup'>I HAVE AN ACCOUNT</Link>
            </FormText>
        </FormBlock>
    </LoginDiv>
    );
};