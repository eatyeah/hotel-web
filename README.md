# hotel-admin-web

## 1、项目介绍

hotel-admin-web是一个酒店管理系统的管理页面，包含了酒店管理、客房管理、订单管理、会员管理、统计分析等功能。

## 2、项目结构
```
hotel-admin-web
├─doc 项目文档
│  ├─sql //数据库脚本
├─public // 静态资源
├─src -- 源码
│  ├─assets -- 静态资源
│  ├─components -- 组件
│  ├─router -- 路由
│  ├─store -- vuex
│  ├─utils -- 工具类
│  ├─views -- 视图
│  ├─App.vue -- 入口页面
│  ├─main.js -- 入口文件
│  └─permission.js -- 路由权限
├─.gitignore -- git忽略文件
├─babel.config.js -- babel配置文件
├─package.json -- 依赖包
├─package-lock.json -- 依赖包版本锁定
├─README.md -- 项目说明
└─vue.config.js -- vue配置文件

```

## 3、技术选型
```
前端：Vue + ElementUI + Axios + Echarts
后端：SpringBoot + MyBatis + Swagger2 + JWT + Redis + MySQL
数据库：MySQL
缓存：Redis
```

## 4、项目运行
### 下载项目所需的依赖
```
npm install
```

### 启动项目
```
npm run serve
```

### 项目打包
```
npm run build
```

## 5、Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
