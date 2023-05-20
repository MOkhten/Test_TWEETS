import styled from 'styled-components';
import cardPicture from '../../images/cardPicture.png';
import logo from '../../images/Vector.png';
import frame from '../../images/Ellipse 1 (Stroke).png';
import line from '../../images/Rectangle 1.png';

export const Container = styled.div`
display: flex;
flex-wrap: wrap;
text-align: center;
justify-content: center;
`;

export const ButtonConteiner = styled.div`
display: block;
width: 100%;
margin-bottom: 32px;
margin-right: 32px;

`
export const LogoContainer = styled.div`
background: url(${logo});
position: absolute;
top: 20px;
left: 20px;
width: 76px;
height: 22px;`

export const Card = styled.div`
position: relative;
display: flex;
text-align: center;
justify-content: center;
flex-wrap: wrap;
margin: 32px; 
width: 380px;
height: 517px;
background-color: #471CA9;
border-radius: 20px;
background: linear-gradient(
    114.99deg,
    #471ca9 0%,
    #5736a3 69.11%,
    #4b2a99 100%
  );
  box-shadow: -2.58px 6.87px 20.62px rgba(0, 0, 0, 0.23);
`
export const Img = styled.img`
position: absolute;
top: 188px;
left: 159px;
width: 62px;
height: 62px;
object-fit: cover;
  border-radius: 50%;
  background: #5736a3;
`

export const ImgWrapper = styled.div`
background: url(${frame});
background-repeat: no-repeat;
position: absolute;
top: 179px;
left: 145px;
width: 90px;
height: 80px;

`

export const TopImgStyled = styled.div`
background: url(${cardPicture});
background-size: contain;
 position: absolute;
  top: 28px;
  margin-left:36px;
  width: 308px;
  height: 168px;`

export const UserInfo = styled.p`
  text-transform: uppercase;
  font-size: 20px;
  font-family: Montserrat;
  font-weight: 500;
  color: #EBD8FF;
  margin-top: 16px;
  margin-bottom: 0px;`

export const Button = styled.button`
  padding: 14px 56px 14px 56px;
  color: #373737;
  background-color: #EBD8FF;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  font-size: 18px;
  font-weight: 600;
  border-radius: 10.31px;
  border-color: transparent;
  margin-top: 26px;
  margin-bottom: 34px;
  cursor: pointer;
  `

export const LineContainer = styled.div`
 margin-top: 214px;
 width: 380px;
 height: 8px;
 background: url(${line});
 box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
    inset 0px -1.71846px 3.43693px #ae7be3, inset 0px 3.43693px 2.5777px #fbf8ff;
 `

export const InfoContainer = styled.div`
 display: block;
 margin-top: 62px;
 justify-content: center;
 text-align: center;
 align-items: center;`