#!/usr/bin/env node
// 上一行作用：使用env来找到node，并使用node来作为程序的解释程序

import fs from 'fs';
import issue from './issue/index.js';
import create_config_yaml_template from './utils/create_config_yaml_template.js';
import create_go_mod_template from './utils/create_go_mod_template.js';
import create_logger_template from './utils/create_logger_template.js';
import create_main_template from './utils/create_main_template.js';
import create_mysql_template from './utils/create_mysql_template.js';
import create_redis_template from './utils/create_redis_template.js';
import create_routes_template from './utils/create_routes_template.js';
import create_settings_template from './utils/create_settings_template.js';

const answer = await issue();
console.log(answer);

// user input 用户输入
const inputConfig = {
	packageName: answer.packageName,
	port: answer.port,
};

// 创建项目文件夹
fs.mkdirSync(GetRootPath());

// go.mod
fs.writeFileSync(
	`${GetRootPath()}/go.mod`,
	create_go_mod_template(inputConfig)
);

// main.go
fs.writeFileSync(`${GetRootPath()}/main.go`, create_main_template(inputConfig));

// conf
fs.mkdirSync(`${GetRootPath()}/conf/`);
fs.writeFileSync(
	`${GetRootPath()}/conf/config.yaml`,
	create_config_yaml_template(inputConfig)
);

// dao
fs.mkdirSync(`${GetRootPath()}/dao/`);
fs.mkdirSync(`${GetRootPath()}/dao/mysql`);
fs.mkdirSync(`${GetRootPath()}/dao/redis`);

// mysql
fs.writeFileSync(
	`${GetRootPath()}/dao/mysql/mysql.go`,
	create_mysql_template(inputConfig)
);

//redis
fs.writeFileSync(
	`${GetRootPath()}/dao/redis/redis.go`,
	create_redis_template(inputConfig)
);

// logger
fs.mkdirSync(`${GetRootPath()}/logger/`);

fs.writeFileSync(
	`${GetRootPath()}/logger/logger.go`,
	create_logger_template(inputConfig)
);

// routes
fs.mkdirSync(`${GetRootPath()}/routes/`);

fs.writeFileSync(
	`${GetRootPath()}/routes/routes.go`,
	create_routes_template(inputConfig)
);

// settings
fs.mkdirSync(`${GetRootPath()}/settings/`);

fs.writeFileSync(
	`${GetRootPath()}/settings/settings.go`,
	create_settings_template(inputConfig)
);

// other
fs.mkdirSync(`${GetRootPath()}/controllers/`);
fs.mkdirSync(`${GetRootPath()}/logic/`);
fs.mkdirSync(`${GetRootPath()}/pkg/`);
fs.mkdirSync(`${GetRootPath()}/models/`);

function GetRootPath() {
	return `${answer.packageName}`;
}
