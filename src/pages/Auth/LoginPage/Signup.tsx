import React, { useState }from 'react';
import { LoginDiv, LoginTitleDiv, LoginTitle, FormBlock, FormInput, FormCheckDiv, FormCheckInput, FormText, FormTextAcc} from '../styles';
import { FormBtn} from '../../../ui/formBtn/FormBtn';
import { Link } from "react-router-dom";
import { AiOutlineClose } from 'react-icons/ai';

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
            <LoginTitleDiv>
                <LoginTitle>CREATE ACCOUNT</LoginTitle>
                <Link to='/'>
                    <AiOutlineClose fontSize={22}/>
                </Link>
            </LoginTitleDiv>
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
            <FormCheckDiv>
                <FormCheckInput type='checkbox'/>
                <FormText>Let's get personal! We'll send you only the good stuff: <br/>
                Exclusive early access to Sale, new arrivals and promotions. No nasties.</FormText>
            </FormCheckDiv>
            
            <FormText>By signing up you agree to <strong>Terms of Service</strong> and <strong>Privacy Policy</strong></FormText>
            <FormBtn onClick={(e) => {e.preventDefault(); handleClick(name, lastname, email, password)}}>SIGN UP</FormBtn>
                <Link to='/signin'>
                <FormTextAcc>

                    I HAVE AN ACCOUNT
                    </FormTextAcc>

                    </Link>
        </FormBlock>
    </LoginDiv>
    );
};