import React, {useState, useEffect} from "react";
import { useSelector } from "react-redux";
import { selectUsers, selectIsLoading } from "redux/user/selector";
import { Spiner } from "components/Spiner";
import {
  Card,
  Img,
  ImgWrapper,
  TopImgStyled,
  ButtonConteiner,
  LogoContainer,
  UserInfo,
  Button,
  FollowBtn,
  LineContainer,
  InfoContainer,
  Container
} from "./CardList.styled";
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';


export const CardList = () => {
  const user = useSelector(selectUsers);

  const isLoading = useSelector(selectIsLoading);
  const [filter, setFilter] = useState("show all");
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

  const filterUsers = (user) => {
    switch (filter) {
      case "followings":
        return user.filter(({ id }) => followedUsers[id]);
      case "follow":
        return user.filter(({ id }) => !followedUsers[id]);
      default:
        return user;
    }
  };

  const filteredUsers = filterUsers(user);
  
  const loadMore = () => {
    setVisibleCards(prevVisibleCards => prevVisibleCards + 4);
   
  };
    return (
      <>
         <Box sx={{ minWidth: 120 }}>
      <FormControl sx={{ m: 1, width: 300 }}>
        
        <NativeSelect
    
           id="filter"
              name="filterForm"
             value={filter} onChange={(e) => setFilter(e.target.value)}
        >
          <option value="show all">Show All</option>
              <option value="follow">follow</option>
              <option value="followings">Following</option>
        </NativeSelect>
      </FormControl>
    </Box>
      <Container>
            {
        user.length > 0 &&
          filteredUsers.slice(0, visibleCards).map(({ id, avatar, tweets, user, followers }) => {
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
        </>
    )
}