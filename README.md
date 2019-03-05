# webpack-basic-learning

> webpack基础学习，使用weboack4.x.x

#### 使用
```bash
# 安装依赖
npm i
# or
cnpm i
# or fast
yarn

# 开发运行
npm run dev
# or
yarn dev

# 生产打包
npm run build
# or
yarn build
```

#### 目录结构
```bash
.gitignore # 上传git忽略列表
package.json # 定义项目依赖模块，以及其他配置信息
yarn.lock # 使用yarn命令自动生成
webpack.base.conf.js # webapck基础配置
webpack.base.dev.js # webapck开发配置
webpack.base.prod.js # webapck生产打包配置
src # 源文件目录
  assets # 资源文件
  index.html # 主页面
  index.js # 入口文件
dist # 生产打包目录
```
