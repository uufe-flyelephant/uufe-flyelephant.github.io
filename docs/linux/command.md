
# 常用
### grep
递归查询文件夹下所有文件包含的指定的字符串
```bash
grep -R "fusion" .
```

### sed
mac: sed -i '' "s/yoyo/xulu/g" `find . -type f`
linux: sed -i "s/yoyo/xulu/g" `find . -type f`

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
