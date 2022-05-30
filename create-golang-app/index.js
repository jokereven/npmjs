#!/usr/bin/env node
// 上一行作用: 使用env来找到node, 并使用node来作为程序的解释程序

import fs from 'fs';
import issue from './issue/index.js';
import create_air_conf_example_template from './utils/create_air_conf_example_template.js';
import create_config_yaml_template from './utils/create_config_yaml_template.js';
import create_cors_template from './utils/create_cors_template.js';
import create_go_mod_template from './utils/create_go_mod_template.js';
import create_logger_template from './utils/create_logger_template.js';
import create_main_template from './utils/create_main_template.js';
import create_mysql_template from './utils/create_mysql_template.js';
import create_rate_template from './utils/create_rate_template.js';
import create_redis_template from './utils/create_redis_template.js';
import create_route_template from './utils/create_routers_template.js';
import create_setting_template from './utils/create_settings_template.js';
const answer = await issue();
console.log(answer);

// user input 用户输入
const inputConfig = {
	packageName: answer.packageName,
	port: answer.port,
	github: answer.github,
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

// log
fs.mkdirSync(`${GetRootPath()}/log/`);

// conf
fs.mkdirSync(`${GetRootPath()}/conf/`);
fs.writeFileSync(
	`${GetRootPath()}/conf/config.yaml`,
	create_config_yaml_template(inputConfig)
);

// controller
fs.mkdirSync(`${GetRootPath()}/controller/`);

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

// logic
fs.mkdirSync(`${GetRootPath()}/logic/`);

// middlewares
fs.mkdirSync(`${GetRootPath()}/middlewares/`);

// cors
fs.writeFileSync(
	`${GetRootPath()}/middlewares/cors.go`,
	create_cors_template(inputConfig)
);

// rate
fs.writeFileSync(
	`${GetRootPath()}/middlewares/rate.go`,
	create_rate_template(inputConfig)
);

// models
fs.mkdirSync(`${GetRootPath()}/models/`);

// pkg
fs.mkdirSync(`${GetRootPath()}/pkg/`);

// routers
fs.mkdirSync(`${GetRootPath()}/routers/`);

fs.writeFileSync(
	`${GetRootPath()}/routers/routers.go`,
	create_route_template(inputConfig)
);

// settings
fs.mkdirSync(`${GetRootPath()}/settings/`);

fs.writeFileSync(
	`${GetRootPath()}/settings/settings.go`,
	create_setting_template(inputConfig)
);

// sql
fs.mkdirSync(`${GetRootPath()}/sql/`);
fs.writeFileSync(
	`${GetRootPath()}/sql/init.sql`,
	`create database if not exists dbname;`
);

// .gitignore
fs.writeFileSync(
	`${GetRootPath()}/.gitignore`,
	`# air
tmp
# node_modules
node_modules
# log
*.log
`
);

// air
fs.writeFileSync(
	`${GetRootPath()}/air.conf.example`,
	create_air_conf_example_template(inputConfig)
);

function GetRootPath() {
	return `${answer.packageName}`;
}
