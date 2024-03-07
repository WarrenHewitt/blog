import{_ as s,p as e,q as a,Q as i,a1 as n}from"./framework-7e1a102e.js";const t={},l=n(`<h1 id="jenkins" tabindex="-1"><a class="header-anchor" href="#jenkins" aria-hidden="true">#</a> jenkins</h1><h2 id="ubuntu-安装" tabindex="-1"><a class="header-anchor" href="#ubuntu-安装" aria-hidden="true">#</a> Ubuntu 安装</h2><p>参考官网 https://www.jenkins.io/doc/book/installing/linux/#debianubuntu</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 第一步安装 JDK  按照官网步骤安装即可  注意查看安装的版本</span>
<span class="token function">sudo</span> <span class="token function">apt</span> update
<span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> openjdk-11-jre
<span class="token function">java</span> <span class="token parameter variable">-version</span>

<span class="token comment"># 执行</span>
<span class="token function">curl</span> <span class="token parameter variable">-fsSL</span> https://pkg.jenkins.io/debian-stable/jenkins.io.key <span class="token operator">|</span> <span class="token function">sudo</span> <span class="token function">tee</span> <span class="token punctuation">\\</span>
  /usr/share/keyrings/jenkins-keyring.asc <span class="token operator">&gt;</span> /dev/null
<span class="token comment"># 执行</span>
  <span class="token builtin class-name">echo</span> deb <span class="token punctuation">[</span>signed-by<span class="token operator">=</span>/usr/share/keyrings/jenkins-keyring.asc<span class="token punctuation">]</span> <span class="token punctuation">\\</span>
  https://pkg.jenkins.io/debian-stable binary/ <span class="token operator">|</span> <span class="token function">sudo</span> <span class="token function">tee</span> <span class="token punctuation">\\</span>
  /etc/apt/sources.list.d/jenkins.list <span class="token operator">&gt;</span> /dev/null
<span class="token comment"># 执行</span>
<span class="token function">sudo</span> <span class="token function">apt-get</span> update
<span class="token comment"># 执行</span>
<span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> jenkins <span class="token comment">#卸载用 sudo apt-get remove jenkins （--purge 表示配置文件一起删）</span>

<span class="token comment">#启动时启动 Jenkins service</span>
<span class="token function">sudo</span> systemctl <span class="token builtin class-name">enable</span> jenkins
<span class="token comment">#启动 Jenkins service</span>
<span class="token function">sudo</span> systemctl start jenkins
<span class="token comment">#查看状态</span>
<span class="token function">sudo</span> systemctl status jenkins
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="cnetos下-docker-安装-jenkins" tabindex="-1"><a class="header-anchor" href="#cnetos下-docker-安装-jenkins" aria-hidden="true">#</a> cnetos下 docker 安装 Jenkins</h2><p>先下载镜像 <code>docker pull jenkins/jenkins</code> 推荐这个库 jenkins/jenkins 官方维护； jenkins/jenkins:lts 表示长期支持</p><ol><li><p>创建文件夹 <code>mkdir /var/jenkins_home</code> 用于映射容器中的文件,也是相当于当前容器的jenkins的安装目录</p></li><li><p>添加权限 <code>chown -R 1000 /var/jenkins_home</code> 目录的拥有者为root用户，而容器中jenkins用户的 uid 为 1000</p></li><li><p>创建和运行容器： <code>docker run -d --name containerName -p 2014:8080 -p 2015:50000 -v /var/jenkins_home:/var/jenkins_home jenkins/jenkins:latest</code> 容器的 8080 和 50000 端口是固定的 映射的 容器地址也是固定的</p></li></ol><p>浏览器进入 2014端口 ； 如果是虚拟机， ip是 docker的ip； 有些虚拟机可以直接用，虚拟机的 ip （enp0s3 中的 IP）</p><hr><h2 id="jenkins-插件下载慢处理" tabindex="-1"><a class="header-anchor" href="#jenkins-插件下载慢处理" aria-hidden="true">#</a> jenkins 插件下载慢处理</h2><pre><code>1. 先查找 jenkins 的安装目录下的 default.json 文件 不知道安装目录可以用 \`find / -name default.json\` 查找 一般在 /var/jenkins_home/updates/default.json

2. 替换文件中的内容，可以用命令 
\`sed -i &#39;s/www.google.com/www.baidu.com/g&#39; default.json\`
\`sed -i &#39;s/updates.jenkins-ci.org\\/download/mirrors.tuna.tsinghua.edu.cn\\/jenkins/g&#39; default.json\`

3. 重启 jenkins （ 在浏览器 ip地址后加restart 跳转点击重启 ）
</code></pre><p>或者是在页面中点击 插件管理 =&gt; 高级 最下面的url 源切换 https://mirrors.tuna.tsinghua.edu.cn/jenkins/updates/update-center.json</p><ul><li>下载 jenkins 插件</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># docker exec -it jenkins-tutorials bash</span>
<span class="token comment"># cd /var/jenkins_home/war/WEB-INF/detached-plugins</span>
<span class="token comment"># wget http://ftp.icm.edu.pl/packages/jenkins/plugins/cloudbees-folder/6.9/cloudbees-folder.hpi</span>

注意更换版本,在此查看 http://ftp.icm.edu.pl/packages/jenkins/plugins/cloudbees-folder/latest/cloudbees-folder.hpi
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="登录安装好的-jenkins-系统" tabindex="-1"><a class="header-anchor" href="#登录安装好的-jenkins-系统" aria-hidden="true">#</a> 登录安装好的 Jenkins 系统</h2><p>按照提示输入密钥</p><p>可以不选任何插件 直接进入 后续需要再安装</p><p>创建账号密码</p><hr><ul><li>创建用户 Dashboard -&gt; Manage Jekins -&gt; Manage Users (往下滑) -&gt; Create User (左侧)</li></ul><h2 id="配置-github-相关-实现代码更新-自动构建" tabindex="-1"><a class="header-anchor" href="#配置-github-相关-实现代码更新-自动构建" aria-hidden="true">#</a> 配置 github 相关,实现代码更新，自动构建</h2><ol><li><p>Jenkins 系统配置 启用Hook URL</p></li><li><p>配置Github项目仓库；进入一个项目仓库，添加 webhook</p></li><li><p>Jenkins 配置 github</p></li></ol><p>具体的操作请网上搜索参考</p><ul><li>SSH Publishers 配置</li></ul><p>全局配置：</p><p>Passphrase： 远程服务器的密码</p><p>Hostname：远程服务器的ip地址</p><p>Username： 远程服务器的账号名</p><p>Remote Directory：要将文件发送到的远程服务器的目录</p><p>构建后操作 -&gt; Send build artifacts over SSH</p><p>Source files：源文件地址，地址的目录是相对于jenkins workspace的目录，如果只需要执行命令不需要传输文件的时候，此处可以为空，<strong>最好是一个打包后的文件</strong></p><p>插件配置处，配置了具体的地址，这里的 Remote 相关的可以不填</p><p>Exec command 在目标机器上执行的命令 要先进入目标文件 如下示例：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>cd /home/cicd/nginx/html/

tar -zxvf package.tar.gz

rm -rf package.tar.gz
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="gitee" tabindex="-1"><a class="header-anchor" href="#gitee" aria-hidden="true">#</a> gitee</h2><ol><li><p>安装 jenkins</p></li><li><p>安装插件 gitee</p></li><li><p>配置 gitee 插件 ；点添加 选择 gitee api 令牌</p></li></ol>`,36),c=n(`<ol start="3"><li>gitee 创建仓库</li></ol><p>webhooks 需要域名或公共 ip</p><p>Jenkins 的两个映射文件 /var/jenkins_home 和 /var/jenkins_home_gitee/</p><p>Nginx 的映射文件 /home/cicd/nginx/</p><p>安装 nodeJs 插件： 在 centos 上安装，再将安装地址 配置到Jenkins中</p><p>构建 shell</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> <span class="token parameter variable">--registry</span><span class="token operator">=</span>https://registry.npm.taobao.org

<span class="token function">npm</span> run build

<span class="token builtin class-name">cd</span> dist

<span class="token function">tar</span> <span class="token parameter variable">-zcvf</span> dist.tar.gz *

<span class="token function">mv</span> dist.tar.gz <span class="token punctuation">..</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7);function o(p,d){return e(),a("div",null,[l,i(" 45c5f7f92aac774ce3090cc9ab6b94c0 "),c])}const u=s(t,[["render",o],["__file","jenkins.html.vue"]]);export{u as default};
