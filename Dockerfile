# 使用官方的 Nginx 轻量级镜像作为基础镜像
FROM nginx:alpine

# 将当前目录下的所有文件（index.html, style.css, script.js）
# 复制到 Nginx 的默认网站根目录
COPY . /usr/share/nginx/html

# 暴露 80 端口，这是 Nginx 的默认端口
EXPOSE 80

# 容器启动时运行 Nginx 服务
CMD ["nginx", "-g", "daemon off;"]
