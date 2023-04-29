export default () => {
	return {
		type: 'input',
		name: 'appName',
		message: 'Please specify the project directory:',
		validate(val) {
			if (val) return true;
			return 'Make sure there is no folder with the same name in this directory, For example: app';
		},
	};
};
