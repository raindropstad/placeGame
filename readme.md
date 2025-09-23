---
title: 游戏开发构想
categories:
- 游戏
tags:
- 游戏
---

> [JAVA 开发pc端桌面软件 基于idea+nw.js+maven+springboot](https://www.cnblogs.com/tian98/p/15627467.html)

# 环境工具的准备

- [idea社区版安裝教程](https://jiyinhui.blog.csdn.net/article/details/143427455?spm=1001.2101.3001.6661.1&utm_medium=distribute.pc_relevant_t0.none-task-blog-2%7Edefault%7EYuanLiJiHua%7EPaidSort-1-143427455-blog-134727571.235%5Ev43%5Epc_blog_bottom_relevance_base2&depth_1-utm_source=distribute.pc_relevant_t0.none-task-blog-2%7Edefault%7EYuanLiJiHua%7EPaidSort-1-143427455-blog-134727571.235%5Ev43%5Epc_blog_bottom_relevance_base2&utm_relevant_index=1)

- [JDK版本](https://docs.oracle.com/en/java/javase/21/install/installation-jdk-microsoft-windows-platforms.html#GUID-371F38CC-248F-49EC-BB9C-C37FC89E52A0)

  ![image-20250919171634668](./assets/image02.png)

- [nw.js](https://nwjs.io/)
  ![image01](./assets/image01.png)
  下载SDK版本后解压到前端目录下
  > [nw.js 官方文档](hhttps://docs.nwjs.io/)
  

# 项目结构

> 主要参考nw.js+springcloud的项目结构
>
> [idea社区版部署启动Spring MVC项目 idea社区版 springcloud_mob6454cc7c8b2e的技术博客_51CTO博客](https://blog.51cto.com/u_16099356/10986546)
>
> [十分钟轻松入门 nw.js 实现桌面应用程序-CSDN博客](https://blog.csdn.net/kaimo313/article/details/126405942)



```
assets:存储文档需要的图片
backend:后端
placeGameProject (根项目)
├── pom.xml (父项目配置)
├── eureka-server (服务注册中心模块)
│   ├── src/main/java
│   │   └── com/game/eureka
│   │       └── EurekaServerApplication.java (Eureka服务启动类)
│   └── src/main/resources
├── server-provider (服务提供者模块)
└── server-consumer (服务消费者模块)

frontend:前端
解压nw.js的SDK文件到这个目录后运行nw.exe
```