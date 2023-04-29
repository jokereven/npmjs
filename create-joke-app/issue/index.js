import inquirer from 'inquirer';
import appName from './appName.js';

export default () => {
	return inquirer.prompt([appName()]);
};
