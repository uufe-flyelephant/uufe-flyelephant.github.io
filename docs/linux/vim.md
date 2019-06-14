# 安装 Vim 8

* mac
``` bash
brew install vim
```
* centos 7
[Article](https://medium.com/@chusiang/install-the-vim-8-0-and-youcompleteme-with-make-on-centos-7-4-1573ad780953)
``` bash
yum install gcc-c++ ncurses-devel python-devel
git clone https://github.com/vim/vim.git
cd vim
 ./configure --disable-nls --enable-cscope --enable-gui=no --enable-multibyte  --enable-pythoninterp --enable-rubyinterp --prefix=/home/jonny/.local/vim --with-features=huge  --with-python-config-dir=/usr/lib/python2.7/config --with-tlib=ncurses --without-x
#make distclean  # if you build Vim before
make -j8
sudo make install
cp src/vim /usr/bin
```

# 初步学习，达到够用1
## todo
## 图
![d906f6edfa4bd7009d4bac3d444b6548.png](evernotecid://D70F2D4D-717D-44D8-B1BA-04930EA6409F/appyinxiangcom/12602530/ENResource/p151)
## 官方的教程
vimtutor
## 学习计划
[How To Learn Vim: A Four Week Plan](
https://medium.com/actualize-network/how-to-learn-vim-a-four-week-plan-cd8b376a9b85)

## 基础笔记
### normal模式
#### 字符移动
* w
* e
* b
* 0
* $
* %： 一对括号间跳转
#### 插入字符
* A
* a
* I
* i
#### 删除字符
* dd
* dw
* d2w
* d2l
* 2dd
* x
#### 复制字符
* yy
* yw
* y4w
* 2yy
#### 粘贴字符
* p
#### 其他插入
* re
* R

### 命令模式
#### 辅助
* 列出所有可能： control+D
* 自动补全：<TAB>
#### search
##### ignore case
* :set ic
* :set noic
* ignore once:   " /ignore\c"
##### highlight
Set the 'hlsearch' and 'incsearch' options
* :set hls is
* :nohlsearch
##### paste
* :set paste
* :set nopaste
#### 批量替换字符， todo正则？
* 单行：   :s/old/new/g
* 多行：   :56,67s/old/new/g
* 整个文件：   :%s/old/new/g
* 询问模式： 后面加c.     :%s/old/new/gc
#### excute external command
:! ls
#### write file
* 整个写入：把当前文件另外一个文件。:w filename
* 部分写入：v模式先选中。再 :w filename
#### retrieve
:r filename
:r !ls
#### 搜索
* non-greedy
``` bash
 * is greedy
\{-} is no greedy
/help non-greedy
/import.\{-}"
```
#### exit
* q: quit
* qa: quit all

## vim 多窗口编辑
[参考文章，仅供参考，实测不一定对，待替换](https://blog.csdn.net/shuangde800/article/details/11430659)
### 分页
#### 分页设置
* ：tabnew filename
* ：tabclose
* ：tabonly 
#### 分页跳转
* gt (or :tabn) to go to next tab
* gT (or :tabp or :tabN) to go to previous tab
* #gt (or :tabn #) to go to #th tab
* :tabr to go to first tab
* :tabl to go to last tab
* :tabm to move the current tab to the last position
* :tabm # to move the current tab to the #th position

### 分屏
* vsp: 会打乱netre比例，别用
* sp
* <c-w>hjkl

## 多行 注释、删除

1.多行注释：
  1. 首先按esc进入命令行模式下，按下Ctrl + v，进入列（也叫区块）模式;
  2. 在行首使用上下键选择需要注释的多行;
  3. 按下键盘（大写）“I”键，进入插入模式；
  4. 然后输入注释符（“//”、“#”等）;
  5. 最后按下“Esc”键。 注：在按下esc键后，会稍等一会才会出现注释，不要着急~~时间很短的

2.删除多行注释：
  1. 首先按esc进入命令行模式下，按下Ctrl + v, 进入列模式;
  2. 选定要取消注释的多行;
  3. 按下“x”或者“d”. 注意：如果是“//”注释，那需要执行两次该操作，如果是“#”注释，一次即可

3.多行删除1.首先在命令模式下，输入“：set nu”显示行号； 2.通过行号确定你要删除的行； 3.命令输入“：32,65d”,回车键，32-65行就被删除了，很快捷吧如果无意中删除错了，可以使用‘u’键恢复（命令模式下）

## 无tree文件跳转
* :find \*js    然后按tab键，选中后回车进入文件
* :ls            然后回车，查看历史打开过的文件
* :b
![4f32082e01b87903f2dd4ea6e861a189.png](evernotecid://D70F2D4D-717D-44D8-B1BA-04930EA6409F/appyinxiangcom/12602530/ENResource/p228)
![ad78abf5989d0be74a8bf91648db41ad.png](evernotecid://D70F2D4D-717D-44D8-B1BA-04930EA6409F/appyinxiangcom/12602530/ENResource/p229)

## netrw
* <c-l>: refresh

## Nertree
* refresh tree: 'R'

## Regex
[Article Reference](https://www.cnblogs.com/PegasusWang/p/3153300.html)

## 其他记录
* 提高键盘反应速度 - for Mac
[文章](https://apple.stackexchange.com/questions/10467/how-to-increase-keyboard-key-repeat-rate-on-os-x)
```bash
defaults write -g InitialKeyRepeat -int 10 # normal minimum is 15 (225 ms)
defaults write -g KeyRepeat -int 1 # normal minimum is 2 (30 ms)
```

# 好的资源
[Best_Vim_Tips](https://vim.fandom.com/wiki/Best_Vim_Tips)
[a-why-vi-vim](http://www.viemu.com/a-why-vi-vim.html)
[vim使用经验](https://dougblack.io/words/a-good-vimrc.html#spaces)

# vim todo
* :he  setting-tabline
* 选中区域内，文本替换
* 高亮本行，总是找不到光标
* 跨文件搜索
* todo: help vert.   :vert term
* copy to clipboard
* ,nt: Create new bottom terminal in terminal normal mode. Create new bottom terminal in vim normal mode
* 各窗口大小修改

# vim terminal
* [Japanese Document](https://vim-jp.org/vimdoc-en/terminal.html)
* vert term
* term ++rows=8
* bot term ++rows=8
* My IDE Like: vim file | ,tt | ,tmb | :vert term
