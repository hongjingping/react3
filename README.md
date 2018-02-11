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
###### 第04节：构建：webpack一步一步构建02
###### 第05节：路由：Hello React路由
###### 第06节：路由：NavLink中常用选项
###### 第07节：路由：404设置和跳转设置
###### 第08节：路由：通过路由传值的方法
###### 第09节：路由：Router中的属性和路由模式
###### 第10节：路由：prompt用法讲解
