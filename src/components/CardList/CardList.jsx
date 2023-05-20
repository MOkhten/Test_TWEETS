import React, {useState} from "react";
import { useSelector } from "react-redux";
import { selectUsers, selectIsLoading } from "redux/user/selector";
import { Spiner } from "components/Spiner";
import {
  Card,
  Img,
  ImgWrapper,
  TopImgStyled,
  Container,
  ButtonConteiner,
  LogoContainer,
  UserInfo,
  Button,
  LineContainer,
  InfoContainer
} from "./CardList.styled";

export const CardList = () => {
  const user = useSelector(selectUsers);
  const isLoading = useSelector(selectIsLoading);
  
  const [visibleCards, setVisibleCards] = useState(4);
  
  const loadMore = () => {
    setVisibleCards(prevVisibleCards => prevVisibleCards + 4);
   
  };
    return (
        <Container>
            {
        user.length > 0 &&
          user.slice(0, visibleCards).map(({ id, avatar, tweets, user, followers }) => {
        return (
            <Card key={id}>
              <LogoContainer/>
              <TopImgStyled />
              <LineContainer/>
              <ImgWrapper/>
                <Img src={avatar} alt="usersAvatar" />
              
              <InfoContainer>
              <UserInfo>{user}</UserInfo>
              <UserInfo>{tweets}  tweets</UserInfo>
              <UserInfo>{followers}  followers</UserInfo>
                <Button 
                  type="button">FOLLOW</Button>
                </InfoContainer>
            </Card>
        );
          })}
         {visibleCards < user.length && (
        <ButtonConteiner >
        <Button onClick={loadMore}>
              LOAD MORE</Button>
            {isLoading && <Spiner />}
          </ButtonConteiner>
          )}
        </Container>
    )
}