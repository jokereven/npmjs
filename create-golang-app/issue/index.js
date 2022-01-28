import inquirer from 'inquirer';
import packageName from './packageName.js';
import port from './port.js';

export default () => {
	return inquirer.prompt([packageName(), port()]);
};
