import { useState }from 'react';
import { FooterContainer, FooterTitle, FooterText, FooterInput, FooterBtnJoin, FooterDivJoin, FooterTitulos, FooterUl, FooterLi, FooterFollow, FooterDivFollow, FooterA} from "./styles";


export const Footer = () => {
    const [email, setEmail] = useState("");


    return (
        <FooterContainer>
            <FooterTitle>SIGN UP FOR UPDATES</FooterTitle>
            <FooterText>Sign up for exclusive early sale access and tailored new arrivals.</FooterText>
            <FooterDivJoin>
                <FooterInput onChange={(e) => setEmail(e.target.value)}
                type='email'
                placeholder='Your email address'
                autoComplete='email'>
                </FooterInput>
                <FooterBtnJoin>JOIN</FooterBtnJoin>
            </FooterDivJoin>
            <FooterFollow>
                <FooterDivFollow>
                    <FooterTitulos>CUSTOMER SERVICE</FooterTitulos>
                    <FooterUl>
                        <FooterLi>CONTACT</FooterLi>
                        <FooterLi>TRACK ORDER</FooterLi>
                        <FooterLi>DELIVERY & RETURNS</FooterLi>
                        <FooterLi>PAYMENT</FooterLi>
                        <FooterLi>MAKE A RETURN</FooterLi>
                        <FooterLi>FAQ</FooterLi>
                    </FooterUl>
                </FooterDivFollow>
                <FooterDivFollow>
                    <FooterTitulos>INFO</FooterTitulos>
                    <FooterUl>
                        <FooterLi>GIFT VOUCHERS</FooterLi>
                        <FooterLi>SIZE GUIDE</FooterLi>
                        <FooterLi>CAREERS AT MODNIKKY</FooterLi>
                        <FooterLi>ABOUT US</FooterLi>
                        <FooterLi>LEGAL POLICIES</FooterLi>
                    </FooterUl>
                </FooterDivFollow>
                <FooterDivFollow>
                    <FooterTitulos>FOLLOW US</FooterTitulos>
                    <FooterUl>
                        <FooterLi>FACEBOOK</FooterLi>
                        <FooterLi>ODNOKLASSNIKI</FooterLi>
                        <FooterLi>INSTAGRAM</FooterLi>
                    </FooterUl>
                </FooterDivFollow>
                <FooterDivFollow>
                    <FooterTitulos>CONTACT US</FooterTitulos>
                    <FooterUl>
                        <FooterLi>
                            <FooterA href="mailto:hello@modnikky.com">hello@modnikky.com
                            </FooterA>
                        </FooterLi>
                        <FooterLi>+7 910 832 26XX</FooterLi>
                        <FooterLi>Visit us at Shalalaeva 23,<br/> Bologoe, Russia</FooterLi>
                        </FooterUl>
                </FooterDivFollow>
            </FooterFollow>
        </FooterContainer>
    );
}