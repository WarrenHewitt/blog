import{_ as r,M as s,p as t,q as d,R as i,N as n,V as l,t as a,a1 as o}from"./framework-7e1a102e.js";const p={},c={class:"table-of-contents"},v=o(`<p>[toc]</p><hr><h1 id="spring" tabindex="-1"><a class="header-anchor" href="#spring" aria-hidden="true">#</a> spring</h1><ul><li><p>一个开源框架(Spring Framework)</p></li><li><p>轻量的控制反转IoC</p></li><li><p>面向切面AOP的容器框架</p></li><li><p>大小与开销两方面都是轻量的</p></li><li><p>Bean，它代表的就是由Spring管辖的对象</p></li><li><p>Spring MVC和Spring Boot都属于Spring，Spring MVC 是基于Spring的一个 MVC 框架，而Spring Boot 是基于Spring的一套快速开发整合包</p></li><li><p>dependengcy: 用 mvc 选 spring web ，用 webFlux 选spring reactive web</p></li></ul><h2 id="spring-mvc" tabindex="-1"><a class="header-anchor" href="#spring-mvc" aria-hidden="true">#</a> spring mvc</h2><ul><li><p>是spring的一部分</p></li><li><p>主要用于开发WEB应用和网络接口，它是Spring的一个模块</p></li></ul><h2 id="spring-boot" tabindex="-1"><a class="header-anchor" href="#spring-boot" aria-hidden="true">#</a> spring boot</h2><p>web项目： Controller层：主要是对外提供接口 Service层：主要是处理业务逻辑 Dao层：主要是和数据库相关</p><hr><p>层级结构 /src/main/java：项目Java源代码 /src/main/resources：放置项目静态资源和配置文件 /src/test/java：放置项目测试用例代码</p><p>Project是最顶级的结构单元，一个可以有多个Module 一般按功能划分module，模块之间彼此相互依赖，模块 src/main/java 下可以有多个包，一个包下可以有多个类 包(package)：为了对类分目录管理</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>|- java
  |- com.hew.javaweb
    |_annotation：放置项目自定义注解
    |_aspect：放置切面代码
    |_config：放置配置类
    |_constant：放置常量、枚举等定义
      |__consist：存放常量定义
      |__enums：存放枚举定义
    |_controller：放置控制器代码
    |_filter：放置一些过滤、拦截相关的代码
    |_mapper：放置数据访问层代码接口
    |_model：放置数据模型代码
      |__entity：放置数据库实体对象定义
      |__dto：存放数据传输对象定义
      |__vo：存放显示层对象定义
    |_service：放置具体的业务逻辑代码（接口和实现分离）
      |__intf：存放业务逻辑接口定义
      |__impl：存放业务逻辑实际实现
    |_utils：放置工具类和辅助代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><p>创建独立的Spring应用程序，用于创建微服务；用于简化 Spring 应用从搭建到开发的过程；</p><ul><li>自动配置</li><li>起步依赖</li></ul><hr><p>Artifact：可以当它为一个web项目</p><hr><ul><li><p>构建工具 Maven Gradle</p></li><li><p>spring framework -&gt; spring boot -&gt; spring cloud</p></li><li><p>Netty和Tomcat最大的区别就在于通信协议，Tomcat是基于Http协议的，实质是一个基于http协议的web容器; Netty能通过编程自定义各种协议，因为netty能够通过codec自己来编码/解码字节流，完成类似redis访问的功能，这就是最大的不同</p></li><li><p>Servlet 是运行在Web服务器上的小程序，通过http协议和客户端进行交互</p></li><li><p>Optional 防止空指针提出的接口</p></li><li><p>【spring-boot-starter-web】 在当下项目运行mvn spring-boot:run就可以直接启用一个嵌套了tomcat的web应用。如果没有提供任何服务的Cotroller,访问任何路径都会返回一个springBoot默认的错误页面 Whitelabel Error Page</p></li></ul><p>https://img.shields.io/badge/h-h-brightgreen</p><h2 id="第三方包" tabindex="-1"><a class="header-anchor" href="#第三方包" aria-hidden="true">#</a> 第三方包</h2><ul><li>fastJson： 传入的对象要有 getter 方法</li></ul><h2 id="搭建工程" tabindex="-1"><a class="header-anchor" href="#搭建工程" aria-hidden="true">#</a> 搭建工程</h2><ol><li>创建 Maven 项目</li><li>导入Spring Boot起步依赖</li><li>定义 Controller</li><li>编写引导类</li><li>启动测试</li></ol><h2 id="创建项目" tabindex="-1"><a class="header-anchor" href="#创建项目" aria-hidden="true">#</a> 创建项目</h2><p>下载 JDK https://www.oracle.com/java/technologies/downloads/#jdk18-windows</p><h3 id="使用-spring-initializr-创建" tabindex="-1"><a class="header-anchor" href="#使用-spring-initializr-创建" aria-hidden="true">#</a> 使用 Spring Initializr 创建</h3><ol start="4"><li><p>勾选相关设置</p></li><li><p>等待安装依赖包</p></li><li><p>进入 https://start.spring.io/ (说明 https://www.cainiaojc.com/springboot/springboot-initializr.html)</p></li><li><p>勾选</p></li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>|- Project
  |- Maven Project
|- Language
  |- Java
|- Spring Boot
  |- 2.7.2  这里根据实际情况勾选
|- Project Metadata 修改默认名称等
  |- Group com.hew
  |- Artifact java-web
  |- Name java-web
  |- Package name com.hew.java-web
  |- Packaging
    |- Jar
  |- Java
    |- 18 这里根据下载的 JDK 选
|- Dependencies
  |- Spring Web  一般创建的是web项目
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>下载，将其移入放置项目的文件夹</li><li>在 IDEA 社区版直接打开 open 然后等待下载</li></ol><h3 id="idea-直接创建" tabindex="-1"><a class="header-anchor" href="#idea-直接创建" aria-hidden="true">#</a> IDEA 直接创建</h3><ol><li>选 Java Maven</li><li>选择JDK 选择java 版本</li><li>选 spring boot 版本</li><li>选 Spring Boot Dev tools + Spring Web + My Batis Framework + MySQL Driver</li></ol><h3 id="spring-boot-简单查询数据库步骤" tabindex="-1"><a class="header-anchor" href="#spring-boot-简单查询数据库步骤" aria-hidden="true">#</a> Spring boot 简单查询数据库步骤</h3><ol><li>建立实体类和数据库字段保持一致</li><li>建立 mapper 接口，定义操作数据库的动作</li><li>建立 mapper 的 xml 文件，写 sql 语句</li><li>建立 service 类 处理业务逻辑</li><li>在 controller中展示处理的结果</li></ol>`,34);function u(b,h){const e=s("router-link");return t(),d("div",null,[i("nav",c,[i("ul",null,[i("li",null,[n(e,{to:"#spring-mvc"},{default:l(()=>[a("spring mvc")]),_:1})]),i("li",null,[n(e,{to:"#spring-boot"},{default:l(()=>[a("spring boot")]),_:1})]),i("li",null,[n(e,{to:"#第三方包"},{default:l(()=>[a("第三方包")]),_:1})]),i("li",null,[n(e,{to:"#搭建工程"},{default:l(()=>[a("搭建工程")]),_:1})]),i("li",null,[n(e,{to:"#创建项目"},{default:l(()=>[a("创建项目")]),_:1}),i("ul",null,[i("li",null,[n(e,{to:"#使用-spring-initializr-创建"},{default:l(()=>[a("使用 Spring Initializr 创建")]),_:1})]),i("li",null,[n(e,{to:"#idea-直接创建"},{default:l(()=>[a("IDEA 直接创建")]),_:1})]),i("li",null,[n(e,{to:"#spring-boot-简单查询数据库步骤"},{default:l(()=>[a("Spring boot 简单查询数据库步骤")]),_:1})])])])])]),v])}const g=r(p,[["render",u],["__file","springBoot.html.vue"]]);export{g as default};
