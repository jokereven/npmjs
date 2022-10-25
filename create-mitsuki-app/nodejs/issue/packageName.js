export default () => {
	return {
		type: 'input',
		name: 'packageName',
		message: 'set the package name',
		default: 'mitsuki',
		validate(val) {
			if (val) return true;
			return 'Place enter package name';
		},
	};
};
