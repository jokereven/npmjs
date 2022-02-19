export default () => {
	return {
		type: 'input',
		name: 'github',
		message: 'set the github name',
		default: 'jokereven',
		validate(val) {
			if (val) return true;
			return 'Place enter github name';
		},
	};
};
