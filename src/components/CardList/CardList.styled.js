import styled from 'styled-components';
import cardPicture from '../../images/cardPicture.png';
import logo from '../../images/Vector.png'

export const Container = styled.div`
display: flex;
flex-wrap: wrap;
text-align: center;
justify-content: center;
`;

export const CardListConteiner = styled.div`
display: flex;
flex-wrap: wrap;
margin-bottom: 32px;
margin-right: 32px;
width: 380px;
`
export const LogoContainer = styled.div`
background: url(${logo});
position: relative;
margin-top: 20px;
margin-left: 20px;
width: 76px;
height: 22px;`

export const Card = styled.div`
position: relative;
width: 380px;
height: 460px;
background-color: #471CA9;
border-radius: 20px;
`
export const Img = styled.img`
margin-top: 178px;
width: 62px;
height: 62px;
object-fit: cover;
z-index:10;
  border-radius: 50%;
  background: #5736a3;
`

export const ImgWrapper = styled.div`
display: flex;
border-radius: 50%;
border-width: 10px;
border-color: #EBD8FF;
text-align: center;
align-items: center;
justify-content: center;`

export const TopImgStyled = styled.div`
background: url(${cardPicture});
background-size: contain;
 position: absolute;
  margin-top: 28px;
  margin-left:36px;
  width: 308px;
  height: 168px;`

export const UserInfo = styled.p`
  text-transform: uppercase;
  font-size: 20px;
  font-family: Montserrat;
  font-weight: 500;
  color: #EBD8FF;`