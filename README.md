# react3
React项目构建和路由
###### 第01节：构建：create-react-app 快速脚手架
1. `sudo cnpm install -g create-react-app` node版本在6
2. `create-react-app react_study`创建目录
3. 文件目录学习
  1. package.json
    1. 所需要的配置(详细package-lock.json)
    2. 命令
  2. public
    1. 公共文件(图标以及配置移动端应用等)
  3. src
    1. index.js是入口文件
    2. App.js页面文件
  4. node_modules 
    1. npm包
4. create-react-app太集成化，直接将我们的webpack也打包进了node_modules，无法修改
###### 第02节：构建：generator-react-webpack
1. 支持
  1. react的生态圈非常庞大，第三方的构建工具也有很多种，这节课介绍一个在业内比较流行的构建工具generator-react-webpack，它是需要yeoman的支持的。
  2. `sudo npm i -g yo`
  3. `sudo npm i -g generator-react-webpack`
  4. `npm start`
2. 优点
  1. 基于webpack构建，可以很容易的配置自己需要的webpack。
  2. 支持ES6，集成了Babel-Loader。
  3. 支持不同风格的CSS（sass，less，stylus）。
  4. 支持PostCSS转换样式。
  5. 集成了esLint功能。
  6. 可以轻松配置单元测试，比如Karma和Mocha
2. 创建文件
  1. `mkdir new_react_demo`
  2. `cd new_react_demo`
  3. `yo react-webpack`
3. 目录学习
  1. package.json 
    1. 命令scripts,可以去github查看具体命令https://github.com/react-webpack-generators/generator-react-webpack
    2. 开发中用到的包，devDependencies
    3. 上线后用到的包，dependencies
  2. webpack.config.js
  3. cfg目录
  4. src目录
    1. index.js
    2. components/main.js,直接热加载，不需要刷新浏览器，只改变我们需要修改的地方
3. 总结:generator-react-webpack更容易配置webpack，让你适应你的实际项目，并且有很强的扩展功能。一般我们团队都会使用这个脚手架来生产react的目录结构，但也有缺点，就是要依靠yeoman来生成。
###### 第03节：构建：webpack一步一步构建01
  1. `mkdir react-webpack`
  2. `cd react-webpack`
  3. `npm init`项目初始化，生成package.json文件
  4. 或者`npm init -y`不需要直接输入东西，直接生成package.json文件
  5. `sudo npm i --save-dev webpack`开发环境安装包,可以再package.json中看见devDependencies已经有了webpack
  6. 新建一个webpack.config.js
  ```
  const path = require('path');
  module.exports = {
    // 入口
    entry: './app/index.js'
  }
  ```
  7. 新建app目录，创建入口文件index.js
  8. 设置出口文件
  ```
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist')
  }
  ```
  9. 创建dist根目录
  10. 根目录创建index.html,引入出口文件
  ```
  <script src="./dist/index.js"></script>
  ```
  11. 测试一下
  ```
  "scripts": {
    "build": "webpack"
  },
  ```
  12. `npm run build`
  13. 访问index.html
  14. `sudo npm i --save-dev webpack-dev-server`按照服务
  15. webpack.comfig.js中配置服务
  ```
  devServer: {
    // 基本路径
    contentBase: './',
    // 主机,localhost==127.0.0.1, ipconfig可以直接找ip
    host: 'localhost',
    // 压缩
    compress: true,
    // 端口
    port: 1108
  }
  ```
  16. package.json中修改命令，直接启动服务以及打开首页
  ```
  "scripts": {
    "build": "webpack",
    "server": "webpack-dev-server --open"
  },
  ```
  17. `npm run server`可以直接启动服务，但是现在没法自动更新，还需要build
  18. 设置自动更新
  ```
  // 1. webpack.config.js中设置临时的文件temp
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: 'temp/'
  },
  // 2.index.html引入的js文件改成temp
  <script src="./temp/index.js"></script>
  ```
  19. `npm run server`就可以看到自动更新
###### 第04节：构建：webpack一步一步构建02
1. `sudo npm install --save-dev babel-core babel-loader babel-preset-es2015 babel-preset-react`
2. 在webpack.config.js中写loader
```
  module: {
    loaders: [{
      test: /.\js$/,
      exclude: /node_modules/,
      loaders: "babel-loader",
      query: {
        presets: ['es2015', 'react']
      }
    }]
  }
```
3. `npm run server`
4. 在index.html中加入挂载点`<div id="app"></div>`
5. 下载包`sudo npm i --save react react-dom`
###### 第05节：路由：Hello React路由
1. `sudo npm i --save react-router react-router-dom`
2. 在app中新建wikiHong.js文件
3. 在index.js中引入
4. `npm run server`
5. 新建wikiHong2.js和wikiHong3.js文件
6. index.js中引入路由，Router表示容器，Route表示路由
```
import {BrowserRouter as Router, Route} from 'react-router-dom';
```
7. Nav.js,NavLink相当于平时的a标签
`import {NavLink} from 'react-router-dom';`
8. `exact`表示精确匹配
9. NavLink的样式
###### 第06节：路由：NavLink中常用选项
1. css文件
2. style
3. activeClassName
###### 第07节：路由：404设置和跳转设置

###### 第08节：路由：通过路由传值的方法
###### 第09节：路由：Router中的属性和路由模式
###### 第10节：路由：prompt用法讲解
