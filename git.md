---
title: git指令合集
categories:
- git
tags:
- git
---

# git

> 参考链接：[Git - Documentation](https://git-scm.com/doc)

## git安装教程

> 参考链接：[(32 封私信) git的安装与配置（详细） - 知乎](https://zhuanlan.zhihu.com/p/597447255)

## git分支管理

> 参考链接：[如何使用 Git 进行多人协作开发（全流程图解）_git多人协作开发流程-CSDN博客](https://blog.csdn.net/whc18858/article/details/133209975)

## git指令集合

Git inti: 初始化 创建.git文件

Git status：查看当前文件状态 红色：没添加到传输 绿色：已准备好传输

Git branch：查看分支

Git add 文件名：将文件添加到commit 文件名可用.代替 表示全部文件

Git commit -m “”: 提交

Git remote add origin github地址

$ git fetch origin master  将远程仓库origin上的master分支上的东西

$ git log -p master..origin/master 

$ git merge origin/master  ***\*--allow-unrelated-histories\****

***\*以上三句可用以下这句代替 只不过fetch更安全 可以查看origin和本地的差别\****

***\*git pull origin master --allow-unrelated-histories\****

git push origin master：推送到远程仓库的master分支

列出分支 git branch

创建分支 git branch <name>

切换分支 git checkout <name>

创建并切换分支 git checkout -b <name>

合并指定分支到当前分支 git merge <name>

删除分支 git branch -d <name>

合并：

Git checkout master 	切换到master

Git merge dev	合并dev

Git push origin master	推送到远程master

Git tag -a tagname -m “备注” 创建标签

Git push origin tagname 推送标签

git log --pretty=oneline --abbrev-commit 查看历史commit

git merge –abort 恢复到你运行合并前的状态

-Xignore-all-space 忽略所有空白

git merge -Xignore-space-change whitespace 将一个空白和连续空白等价



## 合并分支

```git
Git checkout master 	切换到master

Git merge dev	合并dev

Git push origin master	推送到远程master
```



## 提交本地代码到github

```
Git branch：查看分支

Git status：查看当前文件状态 红色：没添加到传输 绿色：已准gi备好传输

Git add 文件名：将文件添加到commit 文件名可用.代替 表示全部文件

Git commit -m "": 提交

$ git push origin master：推送到远程仓库的master分支 (提交之前最好先克隆下远程仓库的东西)

将远程仓库的东西拉到本地仓库
git pull origin master --allow-unrelated-histories
或者可以用
$ git fetch origin master  将远程仓库origin上的master分支上的东西

$ git log -p master..origin/master 

$ git merge origin/master --allow-unrelated-histories
```



## 克隆项目

```
git clone 项目位置

//指定版本克隆
git log //显示历史更新
git checkout 版本id	
```

```
通过ssh的方式
确保已经有密钥 并已在github上配置
cat ~/.ssh/id_rsa.pub
git clone git@github.com:torvalds/linux.git
```



## Git通过密钥对远程仓库上传和更新详细操作

```
cd ~/.ssh	//密钥存放位置

ls

cp 本地密钥位置 项目对应密钥	//替换
```

