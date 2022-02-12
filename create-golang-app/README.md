# create-golang-app

创建 Go Web 通用脚手架

这里使用的是 gin 框架

## 使用的模块

```
ejs `模板引擎`
inquirer `用户输入配置`
```

## node 版本

```
v16.4.0(这里使用nvm管理node版本)
```

### git 标准提交

```
[cz-cli](https://github.com/commitizen/cz-cli)
[git-cz](https://github.com/streamich/git-cz)
```

#### 关于脚手架的开发

```
  全局使用create-golang-app命令，需要在package.json中添加以下内容。
  "bin": {
    "create-golang-app": "./index.js"
  }
  在index.js中添加。
  使用env来找到node，并使用node来作为程序的解释程序。
  #!/usr/bin/env node
```

#### 本地测试

本地安装
![image-20220212201458299](https://qiniuyun.code520.com.cn/images/20220212201458.png)

![image-20220212201555235](https://qiniuyun.code520.com.cn/images/20220212201555.png)

![image-20220212202720598](https://qiniuyun.code520.com.cn/images/20220212203100.png)

![image-20220212202848501](https://qiniuyun.code520.com.cn/images/20220212202848.png)

使用air启动项目

[使用Air实现Go程序实时热重载](https://www.liwenzhou.com/posts/Go/live_reload_with_air/)

![image-20220212202910032](https://qiniuyun.code520.com.cn/images/20220212202910.png)

![image-20220212202927496](https://qiniuyun.code520.com.cn/images/20220212202927.png)

#### create-golang-app 使用

##### 全局安装

```
cnpm i create-golang-app -g

使用 create-golang-app 创建 Go Web项目
```

![create-golang-app](https://camo.githubusercontent.com/ca3d16b730f9c6c7a297f6dc9ec3db97db913e8e3de0c6adc1f5fec7ef74a8ab/68747470733a2f2f71696e697579756e2e636f64653532302e636f6d2e636e2f696d616765732f32303232303132373132303234362e676966)

#### 关于配置

请自行修改

```bash
/conf/config.yaml

mysql 默认 用户名 root 密码 root 数据库 zjing 端口 3306

redis 默认 端口 6379
```

[swagger生成接口文档](https://www.liwenzhou.com/posts/Go/gin_swagger/)

[Go语言基础之单元测试](https://www.liwenzhou.com/posts/Go/unit-test/#)

[常用的HTTP服务压测工具介绍](https://www.liwenzhou.com/posts/Go/benchmark_tool/)

[常用限流策略——漏桶与令牌桶介绍](https://www.liwenzhou.com/posts/Go/ratelimit/)

[Go性能调优](https://www.liwenzhou.com/posts/Go/performance_optimisation/)

[如何使用Docker部署Go Web应用](https://www.liwenzhou.com/posts/Go/how_to_deploy_go_app_using_docker/)

[部署Go语言项目的 N 种方法](https://www.liwenzhou.com/posts/Go/deploy_go_app/)

