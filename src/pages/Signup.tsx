import React from 'react';
import styled from "styled-components";


const Signup = () => {
  return (
    <LoginSection>
      <LoginDiv>
        <LoginTitle>SIGN UP</LoginTitle>
        <FormBlock >
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

export default Signup