* [linux各种中文乱码解决办法整理](https://blog.csdn.net/wusuopuBUPT/article/details/50947243)

``` text 
首先查看系统对中文的支持
locale -a | grep zh_CN

输出样例如下
zh_CN.gbk
zh_CN.utf8

vim 只能正确识别列表中的中文编码文件，如需识别其他编码类型的中文文件，则需要做系统升级

vi ~/.bash_profile
文件末尾添加

export LANG="zh_CN.UTF-8"
export LC_ALL="zh_CN.UTF-8"
```
