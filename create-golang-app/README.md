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

### 建议使用 cz-conventional-changelog 进行 git 标准提交

```
git cz

https://github.com/commitizen/cz-cli
```

#### create-golang-app 使用

##### 全局安装

```
cnpm i create-golang-app -g

使用 create-golang-app 创建 Go Web项目
```

![](https://qiniuyun.code520.com.cn/images/20220127120246.gif)

#### 生成的文件

![image-20220127115550732](https://qiniuyun.code520.com.cn/images/20220127115550.png)

![image-20220127115721440](https://qiniuyun.code520.com.cn/images/20220127115721.png)

#### 关于配置

```bash
/conf/config.yaml

mysql 默认 用户名 root 密码 root 数据库 zjing 端口 3306

redis 默认 端口 6379
```
