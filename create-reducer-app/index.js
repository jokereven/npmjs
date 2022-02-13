#!/usr/bin/env node
// 上一行作用：使用env来找到node，并使用node来作为程序的解释程序

import fs from 'fs';
import fse from 'fs-extra';
import path from 'path';
import { fileURLToPath } from 'url';
import issue from './issue/index.js';
import create_gitignore_template from './utils/create_gitignore_template.js';
import create_package_json_template from './utils/create_package_json_template.js';
import create_readme_md_template from './utils/create_readme_md_template.js';
const __dirname = fileURLToPath(import.meta.url);

const answer = await issue();
console.log(answer);

// user input 用户输入
const inputConfig = {
	packageName: answer.packageName,
};

// 创建项目文件夹
fs.mkdirSync(GetRootPath());

// .gitignore
fs.writeFileSync(
	`${GetRootPath()}/.gitignore`,
	create_gitignore_template(inputConfig)
);

// package.json
fs.writeFileSync(
	`${GetRootPath()}/package.json`,
	create_package_json_template(inputConfig)
);

// README.md
fs.writeFileSync(
	`${GetRootPath()}/README.md`,
	create_readme_md_template(inputConfig)
);

// public
fse
	.copy(
		path.join(__dirname.split('index.js')[0], './public/'),
		`${GetRootPath()}/public`
	)
	.then(() => {})
	.catch(err => console.error(err));

// src
fse
	.copy(
		path.join(__dirname.split('index.js')[0], './src/'),
		`${GetRootPath()}/src`
	)
	.then(() => {})
	.catch(err => console.error(err));

console.log('now place ...');
console.log('cd' + ' ' + `${answer.packageName}`);
console.log('npm install');
console.log('npm start');

function GetRootPath() {
	return `${answer.packageName}`;
}
