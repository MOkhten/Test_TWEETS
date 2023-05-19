import React from "react";
import { useSelector } from "react-redux";
import { selectUsers } from "redux/user/selector";

import {
  Card,
  Img,
  ImgWrapper,
  TopImgStyled,
  Container,
  CardListConteiner,
  LogoContainer,
  UserInfo,
  Button,
  LineContainer,
  InfoContainer
} from "./CardList.styled";

export const CardList = () => {
  const user  = useSelector(selectUsers);
console.log(user)
    return (
        <Container>
            {
        user.length > 0 &&
          user.map(({ id, avatar, tweets, user, followers }) => {
        return (
          <CardListConteiner key={id}
          >
            <Card
              user={user}
              avatar={avatar}
              tweets={tweets}
              followers={followers}
            >
              <LogoContainer/>
              <TopImgStyled />
              <LineContainer/>
              <ImgWrapper/>
                <Img src={avatar} alt="usersAvatar" />
              
              <InfoContainer>
              <UserInfo>{user}</UserInfo>
              <UserInfo>{tweets}  tweets</UserInfo>
              <UserInfo>{followers}  followers</UserInfo>
                <Button>FOLLOW</Button>
                </InfoContainer>
            </Card>
          </CardListConteiner>
        );
      })}
        </Container>
    )
}