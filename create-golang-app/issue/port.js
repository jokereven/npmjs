export default () => {
	return {
		type: 'input',
		name: 'port',
		message: 'set the port',
		default: '8080',
		validate(val) {
			if (val) return true;
			return 'place enter port';
		},
	};
};
