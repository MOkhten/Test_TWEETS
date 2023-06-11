import React, { useEffect, useState } from "react";
import { useDispatch } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import { useSelector } from "react-redux";
// import { selectUsers} from "redux/user/selector";
import { fetchUsers } from 'redux/user/operations';
import { CardList } from 'components/CardList/CardList';
import { BackLinkHref } from 'components/CardList/CardList.styled';
import { Container } from '@mui/material';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { changeFilter } from "redux/user/filterSlice";
import { BsArrowLeft } from 'react-icons/bs';

const Tweets = () => {
//   const navigate = useNavigate();
  // const users = useSelector(selectUsers);
  const [filter, setFilter] = useState('');
  const filters = ['Show all', 'Follow', 'Followings'];
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const handleChangeFilter = e => {
		setFilter(e.target.value);
		dispatch(changeFilter(e.target.value));
	};


 
  return (
    <div >
      <Container sx={{ mt: '5px' }}>
			<BackLinkHref to={`/`}>
              <BsArrowLeft />
              GO BACK
            </BackLinkHref>
			<FormControl
				variant="standard"
				sx={{
					marginTop: 1,
					mb: 5,
					width: 100,
				}}
			>
				<InputLabel id="demo-simple-select-autowidth-label">
					Select filter
				</InputLabel>
				<Select
					sx={{
						width: 250,
						height: 50,
					}}
					labelId="demo-simple-select-autowidth-label"
					id="demo-simple-select-autowidth"
					value={filter}
					onChange={handleChangeFilter}
				>
					{filters.map((item, index) => {
						return (
							<MenuItem key={index} value={item}>
								{item}
							</MenuItem>
						);
					})}
				</Select>
			</FormControl>
      {/* <Asynchronous/> */}
        <CardList /> 
        </Container>
    </div>
  );
}

export default Tweets;