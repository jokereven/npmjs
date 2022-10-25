#!/usr/bin/env node
// 上一行作用：使用env来找到node，并使用node来作为程序的解释程序

import fs from 'fs';
import fse from 'fs-extra';
import path from 'path';
import { fileURLToPath } from 'url';
import issue from './issue/index.js';
const __dirname = fileURLToPath(import.meta.url);

const answer = await issue();
console.log(answer);

// user input 用户输入
const inputConfig = {
	packageName: answer.packageName,
};

// 创建项目文件夹
fs.mkdirSync(GetRootPath());

// copy folder
// 1. configs
// 2. internal
// 3. pkg
// 4. settings

// configs
fse
	.copy(
		path.join(__dirname.split('index.js')[0], './configs/'),
		`${GetRootPath()}/configs`
	)
	.then(() => {})
	.catch(err => console.error(err));

// internal
fse
	.copy(
		path.join(__dirname.split('index.js')[0], './internal/'),
		`${GetRootPath()}/internal`
	)
	.then(() => {})
	.catch(err => console.error(err));

// pkg
fse
	.copy(
		path.join(__dirname.split('index.js')[0], './pkg/'),
		`${GetRootPath()}/pkg`
	)
	.then(() => {})
	.catch(err => console.error(err));

// settings
fse
	.copy(
		path.join(__dirname.split('index.js')[0], './settings/'),
		`${GetRootPath()}/settings`
	)
	.then(() => {})
	.catch(err => console.error(err));

// mkdir null folder

// docs
fs.mkdirSync(`${GetRootPath()}/docs/`);

// global
fs.mkdirSync(`${GetRootPath()}/global/`);

// log
fs.mkdirSync(`${GetRootPath()}/log/`);

// copy file

// go.mod
fse.copySync(
	path.resolve(__dirname.split('index.js')[0], 'go.mod'),
	`${GetRootPath()}/go.mod`
);

// air.conf.example
fse.copySync(
	path.resolve(__dirname.split('index.js')[0], 'air.conf.example'),
	`${GetRootPath()}/air.conf.example`
);

// main.go
fse.copySync(
	path.resolve(__dirname.split('index.js')[0], 'main.go'),
	`${GetRootPath()}/main.go`
);

// LICENSE
fse.copySync(
	path.resolve(__dirname.split('index.js')[0], 'LICENSE'),
	`${GetRootPath()}/LICENSE`
);

console.log('now place ...');
console.log('cd' + ' ' + `${answer.packageName}`);
console.log('npm install');
console.log('npm start');

function GetRootPath() {
	return `${answer.packageName}`;
}
