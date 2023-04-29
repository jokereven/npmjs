#!/usr/bin/env node
// 上一行作用: 使用env来找到node, 并使用node来作为程序的解释程序

import fs from 'fs';
import fse from 'fs-extra';
import path, { format } from 'path';
import { fileURLToPath } from 'url';
import name from './issue/index.js';
const __dirname = fileURLToPath(import.meta.url);

const answer = await name();

function GetRootPath() {
	return `${answer.appName}`;
}

// get user input
const inputConfig = {
	appName: answer.appName,
};

// 创建项目文件夹
fs.mkdirSync(GetRootPath());

// 将文件夹的内容进行复制, 复制app文件夹的所有内容到新项目
fse
	.copy(path.join(__dirname.split('index.js')[0], './app/'), `${GetRootPath()}`)
	.then(() => {
		console.log("inputConfig", inputConfig)
	})
	.catch((err) => console.error(err));

// 提示脚本

console.log(
	'\nCreating a new React app with eslint and commitlint in' +
	' ' +
	__dirname.split('index.js')[0] +
	GetRootPath() +
	'\n'
);

console.log(
	'Success! Created' +
	' ' +
	GetRootPath() +
	' ' +
	'at' +
	' ' +
	__dirname.split('index.js')[0] +
	'\n'
);

console.log('Inside that directory, you can run several commands:\n');

console.log('yarn start \n Starts the development server.\n')

console.log('yarn build \n Bundles the app into static files for production.\n')

console.log('We suggest that you begin by typing:\n');

console.log('cd ' + GetRootPath())
console.log('yarn\n')

console.log('Initialized empty Git repository')
console.log('git init')

console.log('Enable Pre-commit Hook')
console.log('npx husky install\n');

console.log('references:')
console.log('https://prettier.io/docs/en/index.html');
console.log('https://github.com/conventional-changelog/commitlint#getting-started\n');

console.log('Happy hacking!');
