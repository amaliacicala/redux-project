let lastId = 0;

function reducer(state = [], action) {
	switch (action.type) {
		case 'bugAdded': // case for adding a bug
			return [
				...state, // all the bugs in the current state
				{
					// a new bug object
					id: ++lastId, // every time a new bug gets added, the id gets incremented
					description: action.payload.description, // takes the description from the action payload
					resolved: false,
				},
			];

		case 'bugRemoved': // case for removing a bug
			return state.filter((bug) => bug.id !== action.payload.id); // returns all bugs whose id does not correspond with the one from the bug that got removed

		default: // if the type of our action is neither of these, return the current state
			return state;
	}
}
