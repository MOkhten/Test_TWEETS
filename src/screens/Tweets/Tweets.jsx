import React, { useEffect } from "react";
import { useDispatch} from 'react-redux';
import { fetchUsers } from 'redux/user/operations';
import { CardList } from 'components/CardList/CardList';
// import { Spiner } from "components/Spiner";

const Tweets = () => {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

 
  return (
    <div >
      <CardList/> 
    </div>
  );
}

export default Tweets;