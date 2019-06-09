
# 常用
### grep
递归查询文件夹下所有文件包含的指定的字符串
```bash
grep -R "fusion" .
```

### sed
* mac: sed -i '' "s/yoyo/xulu/g" `find . -type f`
* mac: sed -i "s/oldstring/newstring/g" `grep oldstring -rl path`
* linux: sed -i "s/yoyo/xulu/g" `find . -type f`

### find
??

### awk/xargs
??

### 查端口
lsof -i:8080

### 进程
ps aux | grep node

### 文件大小
du . -h

### sz & rz
* yum install lrzszrz
* sz & rz 都是站在服务器的角度
* sz filename:  "send".  服务器角度：向客户端发送文件。  客户端角度：下载文件
* rz:  "receive".   服务器角度：从客户端接收文件。  客户端角度：上传文件
