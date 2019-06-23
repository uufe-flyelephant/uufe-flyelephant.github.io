# 资源尺寸
## 文本尺寸 - HTML/CSS/JS
* 最小化文本: uglify/css-min/html-min
* 压缩: Gzip
### js
* tree-shaking
* 框架大小：preact、原生
### ajax尺寸
* 非必要字段过滤
## 图片尺寸
* 选择合适的图片格式：jpg/png/gif/webp
* 图片压缩
* 字体图片
* [sharpP](https://blog.51cto.com/12676390/1905812?source=dra)


# 网络
## http 请求
### 资源合并
* 文本资源
* 图片资源：合并为雪碧图、使用base64
* ajax合并
#### 资源合并在http2.0的副作用
资源合并利用率降低。http 2 情况下，可以考虑打出多些包
### http2
* 开启 http 2
* http 2 push
### CDN
## 缓存
* cache-control
* 304
* service-worker

# 核心方向： 串行变并行
## html阻塞
跳转时html的请求会阻塞所有请求。
### http2.0 push
* 配置服务器
* 但页面需要的动态数据仍然需要 在 html请求返回后发起
### html 强缓存
核心点
* 版本维护：api动态 or 主动推客户端
#### service worker
兼容性: 需要通用解决方案。  
在端内可能需要native支持
* native webview or browser. 
* ios/android 版本
#### 传统http cachecontrol 缓存方式
* 注意客户端webview有没有开启
#### 304方式
依然需要建立连接，还是有时间消耗

## js阻塞
* 非首屏展示所需要的js，不要放在前面，导致阻塞首屏展示速度
* <script async/defer ></script>

## ssr
* 增加的服务端消耗
* nodejs层：挑战、风险、富有想象力

# 其他
* 预渲染
* 骨架图
* prefetch/preload/dnspre
* link: dns-prefetch、preconnect、prerender、prefetch

# 客户端相关
* webview 初始化 阻塞所有操作
* h5通过bridge走native统一长连接，免去各种建立连接过程
