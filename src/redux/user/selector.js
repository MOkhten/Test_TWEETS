
export const selectUsers = state => state.users.users;
export const selectIsLoading = state => state.users.isLoading;
export const selectError = state => state.users.error;
export const filterUsers = ({ users, filter }) => {
	const arrUsers = users.users;

	if (!filter) {
		return arrUsers;
	} else if (filter === 'Follow') {
		const resultFilter = arrUsers.filter(item => !item.isActiveBtn);
		return resultFilter;
	} else if (filter === 'Followings') {
		const resultFilter = arrUsers.filter(item => item.isActiveBtn);
		return resultFilter;
	} else if (filter === 'Show all') {
		return arrUsers;
	} else {
		return arrUsers;
	}
};