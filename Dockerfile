# 使用官方 Node.js 基础镜像
FROM node:18

# 设置工作目录
WORKDIR /usr/src/app

# 复制应用源代码
COPY . .

# 安装应用依赖和执行构建build
RUN npm install && npm run build



# 如果你的应用监听在 7001 端口，则暴露该端口
EXPOSE 7001

# 定义启动命令
CMD ["npm", "start"]
