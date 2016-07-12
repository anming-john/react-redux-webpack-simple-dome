# react-redux-webpack-simple-dome

# 使用说明
## 安装流程

1. 安装所有依赖的安装包  npm install
2. 启动项目 npm run dev
3. 登录 http://localhost:port 查看项目
4. 项目打包 npm run build 生成的路径在dist文件加下


### 简要说明
* 这个框架是react + redux + webpack。整个项目的入口在src/index.js
* 主要的业务逻辑放在src/app文件夹下。里面每一个文件夹代表一个页面。里面的index是页面的入口文件，里面的reducer是处理改页面的redux数据的地方，入口文件也是index。且格式都是统一为：
`   const main = combineReducers({
        test,
        test2
    }) `
 所有开发的业务逻辑都要写在这个src/app文件夹下
* 前端路由控制写在 src/AppRouter里面