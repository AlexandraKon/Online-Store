import styled from "styled-components";

export const ShopSection = styled.section`
display: flex;
flex-direction: column;
margin-top: 30px;
margin-buttom: 30px;
`;

export const ShopDiv = styled.div`
display: flex;
`;

export const ShopDivGr = styled.div`
display: flex;
margin-top: 30px;
flex-wrap: wrap;
`;

export const ShopText = styled.p`
font-weight: 400;
color: #000F08;
margin-left: 10px;
`;

export const ShopVector = styled.img`
 width: 15px;
 height: 15px;

`;

export const ShopImg = styled.img`
width: 300px;
height: 300px;
@media (max-width: 1024px) {
    width: 150px;
height: 150px;
}
`;


export const ShopFirst = styled.img`
width: 600px;
height: 600px;
@media (max-width: 786px) {
    width: 400px;
    height: 400px;
}
`;
