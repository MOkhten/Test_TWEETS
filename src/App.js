import React from "react";
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchUsers } from 'redux/user/operations';
import { CardList } from 'components/CardList/CardList';


function App() {
   const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);
 
  return (
    <div >
      <CardList ></CardList> 
    </div>
  );
}

export default App;

