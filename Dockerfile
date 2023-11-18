# 使用官方 Node.js 基础镜像
FROM node:18

# 设置工作目录
WORKDIR /usr/src/app

# 复制 package.json 和 package-lock.json（如果有）
COPY package*.json ./

# 安装应用依赖
RUN npm install

# 复制应用源代码
COPY . .

# 如果你的应用监听在 7001 端口，则暴露该端口
EXPOSE 7001

# 定义启动命令
CMD ["npm", "start"]
