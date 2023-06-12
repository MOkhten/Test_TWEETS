import React, { useEffect } from "react";
import { useDispatch } from 'react-redux';
import { useSelector } from "react-redux";
import { fetchUsers } from 'redux/user/operations';
import { filterUsers } from "redux/user/selector";
import { CardList } from 'components/CardList/CardList';
import { BackLinkHref } from 'components/CardList/CardList.styled';
import { BsArrowLeft } from 'react-icons/bs';

const Tweets = () => {

  const users = useSelector(filterUsers);

  const dispatch = useDispatch();
  
 
	useEffect(() => {
		if(users.length) {
			return
		} else {
			dispatch(fetchUsers());
		}
	}, [dispatch, users.length]);
  

 
  return (
    <div >
     
			<BackLinkHref to={`/`}>
              <BsArrowLeft />
              GO BACK
            </BackLinkHref>
			
        <CardList /> 
       
    </div>
  );
}

export default Tweets;