import store from './store';

// call an action every time the state changes
store.subscribe(() => {
	console.log('Store has changed:', store.getState());
});

// dispatch the action for adding a bug
store.dispatch({
	type: 'bugAdded',
	payload: {
		description: 'Bug1',
	},
});

// dispatch the action for removing a bug
store.dispatch({
	type: 'bugRemoved',
	payload: {
		id: 1,
	},
});

console.log(store.getState());
