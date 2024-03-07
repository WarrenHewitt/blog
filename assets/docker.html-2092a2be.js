import{_ as e,p as n,q as s,a1 as i}from"./framework-7e1a102e.js";const a={},d=i(`<h2 id="ubuntu-安装-docker" tabindex="-1"><a class="header-anchor" href="#ubuntu-安装-docker" aria-hidden="true">#</a> Ubuntu 安装 docker</h2><p>官方教程 https://docs.docker.com/engine/install/ubuntu/</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="centeos-安装-docker" tabindex="-1"><a class="header-anchor" href="#centeos-安装-docker" aria-hidden="true">#</a> centeos 安装 docker</h2><p>官方教程 <code>https://docs.docker.com/engine/install/centos/</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 安装 yum-utils 包</span>
yum <span class="token function">install</span> <span class="token parameter variable">-y</span> yum-utils

<span class="token comment"># 添加docker仓库</span>
yum-config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo 
<span class="token comment"># 用阿里云的镜像更快</span>
yum-config-manager --add-repo http://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo

yum <span class="token function">install</span> docker-ce docker-ce-cli containerd.io

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果提示 containerd 提示版本过低 <code>https://download.docker.com/linux/</code> 下载最新版的 containerd.io 和其它的一些 docker 资源</p><p>示例下载： <code>dnf install -y https://download.docker.com/linux/centos/8/x86_64/stable/Packages/containerd.io-1.3.7-3.1.el8.x86_64.rpm</code></p><p>centos 重启后 需要重启 docker <code>systemctl start docker.service | service docker start</code></p><hr><p>Is the docker daemon running ：报错解决办法 service docker start</p><hr><ul><li><p>镜像：是由一系列的只读的层构建，每一层对应DockerFile里面的声明构成</p></li><li><p>容器： 与镜像的唯一区别在于容器的最上面那一层是可读可写的</p></li><li><p>启动 docker 服务 <code>service docker start</code></p></li><li><p><code>systemctl restart docker</code> 重启docker服务,systemctl命令它实际上将 service 和 chkconfig 这两个命令组合到一起</p></li></ul><p>当运行容器时，使用的镜像如果在本地中不存在，docker 就会自动从 docker 镜像仓库中下载，默认是从 Docker Hub 公共镜像源下载</p><ul><li><p><code>docker inspect containerName|containerID</code> 查看容器配置信息</p></li><li><p><code>docker images</code> 查看本机的镜像</p></li><li><p><code>docker ps</code> 查看容器 <code>-a</code> 查看所有容器 包括未运行的</p></li><li><p><code>docker pull nginx:latest</code> 安装 Nginx 镜像：</p></li><li><p><code>docker start|stop|restart containerName</code> 启动|关闭|重启容器</p></li><li><p><code>docker kill -s KILL containerName</code> 杀掉一个运行中的容器 并向容器发送一个信号</p></li><li><p><code>docker build ./ -t imageName:1.0.0</code> 利用 Dockerfile 创建镜像 -t 后，表示打的标签 name:tag 或者 name 格式 <strong>tag 不写默认为 latest</strong></p></li></ul><p>基于路径./（当前路径）打包一个镜像，镜像的名字是 imageName ，版本号是1.0.0。会自动寻找Dockerfile来打包出一个镜像</p><ul><li><p><code>docker create --name containerName imageName:tag</code> 使用镜像 imageName 创建一个容器 并命名为 containerName</p></li><li><p><code>docker run --name containerName -d imageName:tag</code> ：创建一个容器,以后台模式启动,并命名为 containerName</p></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>-p 80:80 主机(宿主)端口:容器端口 容器端口默认80

-P 容器内部端口随机映射到主机的端口 【在服务器中一定要加上，否则默认的80端口无法访问】

-d 后台运行容器，并返回容器ID；

-v /data:/data    主机的目录 /data 映射到容器的 /data
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p><code>docker rm -f containName containName</code> 强制删除一个或多个容器</p></li><li><p><code>docker image rm imageName:tag | docker rmi imageName:tag</code> 强制删除一个或多个容器</p></li></ul><h2 id="docker-国内镜像" tabindex="-1"><a class="header-anchor" href="#docker-国内镜像" aria-hidden="true">#</a> docker 国内镜像</h2><h3 id="命令行" tabindex="-1"><a class="header-anchor" href="#命令行" aria-hidden="true">#</a> 命令行</h3><p>/etc/docker/daemon.json 创建或修改该文件，加如下内容，修改后重启 <code>systemctl restart docker.service</code></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
    // 阿里云的账号是需要自己去注册然后生成的
    &quot;registry-mirrors&quot;: [
      &quot;http://docker.mirrors.ustc.edu.cn&quot;,
      &quot;https://almtd3fa.mirror.aliyuncs.com&quot;,
      &quot;https://3laho3y3.mirror.aliyuncs.com&quot;,
      &quot;http://hub-mirror.c.163.com&quot;
    ]
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="客户端" tabindex="-1"><a class="header-anchor" href="#客户端" aria-hidden="true">#</a> 客户端</h3><p>打开docker桌面端 -&gt; settings -&gt; Docker Engine 添加如下配置</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token property">&quot;registry-mirrors&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token comment">// 同上</span>
<span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token property">&quot;insecure-registries&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;registry.docker-cn.com&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;docker.mirrors.ustc.edu.cn&quot;</span>
<span class="token punctuation">]</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="docker-安装-nginx" tabindex="-1"><a class="header-anchor" href="#docker-安装-nginx" aria-hidden="true">#</a> docker 安装 nginx</h2><p>方式一：Dockerfile</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 使用 Nginx 作为镜像</span>
FROM nginx 

<span class="token comment"># # 将宿主机中的./index.html文件复制进容器里的 /usr/share/nginx/html/index.html(这个地址是固定的)</span>
COPY ./index.html /user/share/nginx/html/index.html

<span class="token comment"># 容器对外暴露的端口</span>
<span class="token comment"># 这只是一个声明，在运行时并不会因为这个声明应用就会开启这个端口的服务</span>
<span class="token comment"># 如果改为 83 也要同步修改 nginx 的默认端口为 83 否则，不会生效</span>
EXPOSE <span class="token number">80</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>方式二：</p><p><code>docker run -d --name nginx-a -p 2022:80 -v /home/cicd/nginx/conf.d/default.conf:/etc/nginx/conf.d/default.conf -v /home/cicd/nginx/html:/usr/share/nginx/html -v /home/cicd/nginx/log:/var/log/nginx nginx:latest</code></p><p>这里一定都要配置 不然可能无法正常访问</p><p>default.conf 简单配置</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>server {
    listen       80;
    server_name  localhost;

    # location块
    location / {
        root   html;
        index  index.html index.htm;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>html 也要提前创建</p><hr><h3 id="宿主机访问虚拟机中的docker容器的服务" tabindex="-1"><a class="header-anchor" href="#宿主机访问虚拟机中的docker容器的服务" aria-hidden="true">#</a> 宿主机访问虚拟机中的docker容器的服务</h3><p>ifconfig 中的 docker0： 下的 dockerIP； ens33：下的 服务ip</p><p>以管理员运行 cmd 执行： <code>route -p add dockerIP mask 255.255.0.0 服务IP</code> mask 后的掩码，参考 docker0 netmask 后的掩码</p><h3 id="进入-docker-容器" tabindex="-1"><a class="header-anchor" href="#进入-docker-容器" aria-hidden="true">#</a> 进入 docker 容器</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker exec -it 容器id或容器名称  /bin/bash   【表示进入容器的 /bin/bash 目录,固定这个地址进入，否则会报错】

-i 即使没有附加也保持STDIN（标准输入） 打开,以交互模式运行容器，通常与 -t 同时使用；
-t 为容器重新分配一个伪输入终端，通常与 -i 同时使用；

容器中无法使用 vim 在容器中执行以下命令

apt-get update

apt-get install vim

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>退出容器，输入 <code>exit</code></p><h3 id="docker-容器群管理" tabindex="-1"><a class="header-anchor" href="#docker-容器群管理" aria-hidden="true">#</a> docker 容器群管理</h3><p>docker-compose 安装示例 https://docs.docker.com/compose/install/</p><p><code> .yml 文件，和 json 一样是配置文件 有可能是 json 的写法不好，才发明了它 语法与json有较大区别</code></p><ul><li>docker-compose.yml 配置</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>version: <span class="token string">&#39;3&#39;</span>  <span class="token comment"># 这里要查看与 docker engin 对应的版本来修改</span>
services:                                      <span class="token comment"># 集合</span>
  docker_jenkins:
    user: root                                 <span class="token comment"># 避免一些权限问题 所以使用了root</span>
    restart: always                            <span class="token comment"># 重启方式</span>
    image: jenkins/jenkins:latest              <span class="token comment"># 指定服务所使用的镜像</span>
    container_name: jenkins                    <span class="token comment"># 容器名称</span>
    ports:                                     <span class="token comment"># 对外暴露的端口定义</span>
      - <span class="token number">8080</span>:8080
      - <span class="token number">50000</span>:50000
    volumes:                                   <span class="token comment"># 卷挂载路径</span>
      - /home/jenkins/jenkins_home/:/var/jenkins_home  <span class="token comment"># 映射 Jenkins 在容器中的文件</span>
      - /var/run/docker.sock:/var/run/docker.sock
      - /usr/bin/docker:/usr/bin/docker                <span class="token comment"># 为了可以在容器内使用docker命令</span>
      - /usr/local/bin/docker-compose:/usr/local/bin/docker-compose
  docker_nginx:
    restart: always
    image: nginx
    container_name: nginx
    ports:
      - <span class="token number">8090</span>:80
      - <span class="token number">80</span>:80
      - <span class="token number">433</span>:433
    volumes:
      - /home/nginx/conf.d/:/etc/nginx/conf.d
      - /home/webserver/static/jenkins/dist/:/usr/share/nginx/html
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>docker-compose up -d</code> 后台创建并运行所有容器</p>`,48),c=[d];function r(l,o){return n(),s("div",null,c)}const m=e(a,[["render",r],["__file","docker.html.vue"]]);export{m as default};
