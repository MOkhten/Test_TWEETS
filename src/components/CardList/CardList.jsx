import React, {useState, useEffect} from "react";
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
  FollowBtn,
  LineContainer,
  InfoContainer,
} from "./CardList.styled";


export const CardList = () => {
  const user = useSelector(selectUsers);

  const isLoading = useSelector(selectIsLoading);
  
  const [visibleCards, setVisibleCards] = useState(4);
  const [followedUsers, setFollowedUsers] = useState(JSON.parse(window.localStorage.getItem('followedUsers')) || {});

   useEffect(() => {
    localStorage.setItem('followedUsers', JSON.stringify(followedUsers));
   }, [followedUsers]);
  
  const handleFollow = (userId) => {
    setFollowedUsers(prevFollowedUsers => {
      const isFollowed = prevFollowedUsers[userId];
      const updatedFollowedUsers = { ...prevFollowedUsers };
      updatedFollowedUsers[userId] = !isFollowed;
      return updatedFollowedUsers;
      
    });
  };

  
  const loadMore = () => {
    setVisibleCards(prevVisibleCards => prevVisibleCards + 4);
   
  };
    return (
      <Container>
        
            {
        user.length > 0 &&
          user.slice(0, visibleCards).map(({ id, avatar, tweets, user, followers }) => {
            const isFollowed = followedUsers[id] || false;
        return (
          <Card key={id}
          >
              <LogoContainer/>
              <TopImgStyled />
              <LineContainer/>
              <ImgWrapper/>
                <Img src={avatar} alt="usersAvatar" />
              
              <InfoContainer>
              <UserInfo>{user}</UserInfo>
              <UserInfo>{tweets}  tweets</UserInfo>
           
              <UserInfo> {isFollowed ? (followers + 1) : (followers)} followers</UserInfo>
                {isFollowed ? (
        <FollowBtn
          onClick={() => handleFollow(id)} type="button"
        >
          Following
        </FollowBtn>
      ) : (
        <Button
          onClick={() => handleFollow(id)} type="button"
        >
          Follow
        </Button> 
      )}
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