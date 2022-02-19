import inquirer from 'inquirer';
import github from './github.js';
import packageName from './packageName.js';
import port from './port.js';

export default () => {
	return inquirer.prompt([packageName(), port(), github()]);
};
