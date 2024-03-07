import{_ as l,M as t,p as c,q as o,R as n,N as a,V as e,t as i,a1 as p}from"./framework-7e1a102e.js";const d={},u={class:"table-of-contents"},r=p(`<p>[toc]</p><h2 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍" aria-hidden="true">#</a> 介绍</h2><p>Nginx 是介于客户端与服务端的</p><p>特点： 1. 稳定性极强, 7*24小时不间断运行 2. 丰富的配置示例 3. 占用内存小，并发能力强（50000以上并发）</p><p>tomcat 150个并发</p><h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2><h3 id="windows-安装" tabindex="-1"><a class="header-anchor" href="#windows-安装" aria-hidden="true">#</a> windows 安装：</h3><ul><li>下载，解压到任意目录，进入包含 <code>Nginx.exe</code> 的目录，打开命令窗口，进入到该目录，运行 <code>start nginx</code></li></ul><p>如果启动失败 可以进入 logs 文件夹中的 error.log 文件产看是否有错误原因</p><p>启动成功后在任务管理器可以看到 nginx 的进程</p><ul><li>浏览器访问 <code>http://127.0.0.1/</code> 或 <code>locahost</code></li></ul><p>其它的一些操作</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>nginx -s stop 立即停止nginx,不保存相关信息

nginx -s quit 正常退出nginx,并保存相关信息

nginx -s reload 重启: 改变了配置等

第一次安装  service nginx start 启动一下

在安装目录下执行  ./nignx -v
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="安装-1" tabindex="-1"><a class="header-anchor" href="#安装-1" aria-hidden="true">#</a> 安装</h3><h4 id="centeos" tabindex="-1"><a class="header-anchor" href="#centeos" aria-hidden="true">#</a> centeOS</h4><p>默认安装地址 /etc/nginx</p><ul><li>安装 <code>yum -y install nginx</code></li><li>卸载 <code>yum remove nginx</code></li></ul><p>开启和停止等 查看 systemctl 命令</p><h4 id="ubuntu" tabindex="-1"><a class="header-anchor" href="#ubuntu" aria-hidden="true">#</a> Ubuntu</h4><p>sudo apt install nginx</p><p>nginx -t 显示信息 配置文件地址 进入配置文件后<strong>查看引入的文件</strong> 即可找到对应的默认配置</p><hr><ul><li>开了端口后 需要开防火墙</li></ul><h3 id="root-与-alias-的区别" tabindex="-1"><a class="header-anchor" href="#root-与-alias-的区别" aria-hidden="true">#</a> root 与 alias 的区别:</h3><p>主要在于怎么解释 location 后面的 url</p><p>root的处理结果是：root路径＋location路径</p><p>alias的处理结果是：使用alias路径替换location路径 （注意alias后面视情况是否要用 &#39;/&#39; 结束）</p><p>示例： 假设访问地址是 /t/x.html</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>location /t/ <span class="token punctuation">{</span>
    root http://www.xx.xx/   
    <span class="token comment"># 映射为  http://www.xx.xx/t/x.html</span>

    <span class="token builtin class-name">alias</span> http://www.xx.xx/   
    <span class="token comment"># 映射为  http://www.xx.xx/x.html</span>
<span class="token punctuation">}</span>   
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><ul><li><p>一个 server 块中可以有多个 location</p></li><li><p>更多默认配置和查看新安装的 Nginx 的 nginx.conf 文件</p></li></ul><h3 id="http-缓存" tabindex="-1"><a class="header-anchor" href="#http-缓存" aria-hidden="true">#</a> http 缓存</h3><ul><li>强制缓存 （浏览器不会向服务器发送任何请求，直接从本地缓存中读取缓存数据并返回 200 (disk cache | memory cache) 状态码）</li></ul><p>两种方式： （https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Cache-Control）</p><ul><li><p>Expires：Wed, 22 Oct 2018 08:41:00 GMT 该时间后过期 （Header上设置， 是 HTTP1.0 中的内容），该值是有服务端生成，而客户端的时间和服务端的时间有可能不一致，导致存在一定误差</p></li><li><p>Cache-Control （Header上设置， HTTP/1.1 优先级高于Expire）</p></li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 可缓存性</span>
public      <span class="token comment"># 表明响应可以被任何对象（包括：发送请求的客户端，代理服务器，等等）缓存，允许cdn缓存</span>
private     <span class="token comment"># 表明响应只能被单个用户缓存，不能作为共享缓存（即代理服务器不能缓存它）。私有缓存可以缓存响应内容，比如：用户的本地浏览器，禁止cdn缓存</span>
no-cache    <span class="token comment"># 浏览器会缓存资源，但每次都会向服务器确认资源是否发生改变，进行验证 (协商缓存验证)。</span>
no-store    <span class="token comment"># 不使用任何缓存</span>

<span class="token comment"># 过期相关</span>
max-age<span class="token operator">=</span><span class="token number">30</span>          <span class="token comment"># 30s后过期</span>
s-maxage<span class="token operator">=</span><span class="token operator">&lt;</span>seconds<span class="token operator">&gt;</span>  <span class="token comment"># 设置共享缓存。cdn缓存时长 会覆盖max-age和expires,私有缓存会忽略它</span>
max-stale<span class="token operator">=</span>秒数      <span class="token comment"># 客户端愿意接收一个已经过期的资源</span>
min-fresh<span class="token operator">=</span>秒数      <span class="token comment"># 客户端希望在指定的时间内获取最新的响应</span>

<span class="token comment"># 重新验证和加载</span>
must-revalidate    <span class="token comment"># 一旦资源过期（比如已经超过max-age），向服务器获取新资源</span>
proxy-revalidate
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>其它请求头</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>Pragma no-cache    <span class="token comment"># 用来向后兼容只支持 HTTP/1.0 协议的缓存服务器，它的行为与 Cache-Control: no-cache 一致</span>
Last-modified Date <span class="token comment"># 资源上次修改时间</span>
Etag string        <span class="token comment"># 资源的标识，一般为md5或者hash值</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>协商缓存 协商缓存会先向服务器发送一个请求，服务器会根据这个请求的 request header 的一些参数来判断是否命中协商缓存，如果命中，则返回 304 状态码并带上新的 response header 通知浏览器从缓存中读取资源。</p></li><li><p>使用 HTTP / 2.0</p></li><li><p>预加载</p></li></ul><h3 id="配置html不缓存示例" tabindex="-1"><a class="header-anchor" href="#配置html不缓存示例" aria-hidden="true">#</a> 配置html不缓存示例</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>location / <span class="token punctuation">{</span>
    root   html<span class="token punctuation">;</span>
    index  index.html index.htm<span class="token punctuation">;</span>

    <span class="token comment"># ~* 指定正则表达式返回 true 判断匹配不区分大小写</span>
    <span class="token comment"># 控制 html 不缓存</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token variable">$request_filename</span> ~* ^.*?.html$<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        add_header Cache-Control <span class="token string">&quot;private, no-store&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment"># 处理其它文件</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span> <span class="token variable">$request_uri</span> ~* /<span class="token punctuation">((</span>.*<span class="token punctuation">)</span><span class="token punctuation">\\</span>.html?<span class="token punctuation">)</span>?$ <span class="token punctuation">)</span> <span class="token punctuation">{</span>
        add_header Cache-Control no-cache<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span> <span class="token variable">$request_uri</span> ~* /.*<span class="token punctuation">\\</span>.<span class="token punctuation">(</span>js<span class="token operator">|</span>css<span class="token punctuation">)</span>$ <span class="token punctuation">)</span> <span class="token punctuation">{</span>
        add_header Cache-Control max-age<span class="token operator">=</span><span class="token number">86400</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="配置-点击劫持" tabindex="-1"><a class="header-anchor" href="#配置-点击劫持" aria-hidden="true">#</a> 配置 点击劫持</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>location / <span class="token punctuation">{</span>
    root   html<span class="token punctuation">;</span>
    index  index.html index.htm<span class="token punctuation">;</span>

    add_header X-Frame-Options DENY always<span class="token punctuation">;</span>
    <span class="token comment"># 如果指定了 always 参数 (1.7.5)，则无论响应代码如何，都将添加标头字段。</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#user  nobody;</span>
worker_processes  <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token comment">#pid        logs/nginx.pid;</span>


<span class="token comment"># 以上为全局块 </span>
<span class="token comment"># worker_processes 数值越大，Nginx 并发能力越强</span>
<span class="token comment"># error_log  错误日志存放的位置</span>
<span class="token comment"># pid  一般不用关注  Nginx 运行的标志</span>

events <span class="token punctuation">{</span>
    worker_connections  <span class="token number">1024</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment"># events块  </span>
<span class="token comment"># worker_connections 数值越大，Nginx 并发能力越强（这里的数据值一般是运维人员根据服务器来配置， worker_processes 也是如此）</span>


<span class="token comment"># 以下为http块</span>
<span class="token comment"># include 引入一个外部的文件 mime.types 里面放着大量的媒体类型</span>

http <span class="token punctuation">{</span>
    include       mime.types<span class="token punctuation">;</span>
    <span class="token comment"># 这里是默认使用的媒体类型</span>
    default_type  application/octet-stream<span class="token punctuation">;</span>

    sendfile        on<span class="token punctuation">;</span>
    <span class="token comment">#tcp_nopush     on;</span>

    <span class="token comment">#keepalive_timeout  0;</span>
    keepalive_timeout  <span class="token number">65</span><span class="token punctuation">;</span>

    <span class="token function">gzip</span> on<span class="token punctuation">;</span>
    <span class="token comment"># 动态压缩： 对每个请求先压缩再输出</span>
    <span class="token comment"># 静态压缩： 使用现成的名为 .gz 的压缩文件</span>
 
    <span class="token comment"># gzip_static on; </span>
    <span class="token comment"># 返回头中会出现 Content-Encoding: gzip</span>
    <span class="token comment"># 读取预先压缩的gz文件</span>

    <span class="token comment"># gzip_vary on; </span>
    <span class="token comment"># 如果代理服务器不使用 Vary，纯粹只是根据 请求URL和请求方法 来判断是否缓存命中，那不支持解压功能的 客户端 就可能会错误拿到代理服务器中的被压缩过的 # 数据；所以多加一层判断</span>
    <span class="token comment"># 返回响应头增加 Vary: Accept-Encoding ；客户端请求头 一般会携带支持的类型 Accept-Encoding:gzip, deflate, br</span>
    
    <span class="token comment"># gzip_proxied any;</span>
    <span class="token comment"># 禁止IE使用gzip 以免假死</span>
    gzip_disable <span class="token string">&quot;MSIE [1-6].&quot;</span><span class="token punctuation">;</span>
    <span class="token comment"># 不压缩小于256字节的文件</span>
    gzip_min_length <span class="token number">256</span><span class="token punctuation">;</span> 
    <span class="token comment"># gzip_proxied any;</span>
    <span class="token comment"># gzip压缩比，1压缩比最小处理速度最快，9压缩比最大但处理速度最慢(传输快但比较消耗cpu)</span>
    gzip_comp_level <span class="token number">2</span><span class="token punctuation">;</span>
    <span class="token comment"># gzip_buffers 16 8k;</span>
    <span class="token comment"># gzip_http_version 1.1;</span>
    <span class="token comment"># 表示压缩的文件类型</span>
    <span class="token comment"># gzip_types text/plain text/css application/json application/x-javascript text/xml application/xml application/xml+rss text/javascript;</span>

    <span class="token comment"># server块</span>
    <span class="token comment"># 这里的server块也可以通过 include 方式加载，可将server块独立开来，因为后期主要修改几乎为server块</span>
    <span class="token comment"># 引入的文件内容格式 </span>
    <span class="token comment"># server {</span>
    <span class="token comment"># }</span>
    server <span class="token punctuation">{</span>
        <span class="token comment"># Nginx 监听的端口号</span>
        listen       <span class="token number">80</span><span class="token punctuation">;</span>
        <span class="token comment"># 监听 ipv6的地址</span>
        <span class="token comment"># listen [::]:80</span>
        <span class="token comment"># Nginx接收请求的的域名</span>
        server_name  localhost<span class="token punctuation">;</span>

        <span class="token comment"># location块</span>
        location / <span class="token punctuation">{</span>
            <span class="token comment"># 重定向到指定地址</span>
            <span class="token comment"># proxy_pass http://localhost:2500/page/one;</span>
            
            <span class="token comment"># 将接收到的请求，根据 html  这个地址去查找静态资源</span>
            <span class="token comment"># 默认 /usr/share/nginx/html  或者  /var/www/html（当前是默认的这个）  具体的看配置文件，一般是 include 进来</span>
            root   html<span class="token punctuation">;</span>
            <span class="token comment"># 默认去上面的路径中查找 index.html 或者 index.htm</span>
            index  index.html index.htm<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="关于-location-的路径映射" tabindex="-1"><a class="header-anchor" href="#关于-location-的路径映射" aria-hidden="true">#</a> 关于 location 的路径映射</h3><p>优先级：</p><p>(location = ) &gt; (location /xxx/xx/x) &gt; (location ^~) &gt; (location ~, ~*) &gt; (location /起始路劲) &gt; (location /)</p><ol><li><code>=</code> 匹配</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>location <span class="token operator">=</span> / <span class="token punctuation">{</span>
    <span class="token comment"># 精准匹配 主机域名后面不能带任何的字符串</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>通用匹配</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>location /xxx <span class="token punctuation">{</span>
    <span class="token comment"># 匹配所有以 /xxx 开头的路径</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>正则匹配</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>location ~/xxx <span class="token punctuation">{</span>
    <span class="token comment"># 匹配所有以 /xxx 开头的路径</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li>匹配开头路径</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>location ^~/xxx <span class="token punctuation">{</span>
    <span class="token comment"># 匹配所有以 /xxx 开头的路径</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="5"><li>匹配结尾</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>location ~* <span class="token punctuation">\\</span>.<span class="token punctuation">(</span>gif<span class="token operator">|</span>jpg<span class="token punctuation">)</span>$ <span class="token punctuation">{</span>
    <span class="token comment"># 匹配所有以 .gif 或 .jpg 结尾的路径</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="反向代理" tabindex="-1"><a class="header-anchor" href="#反向代理" aria-hidden="true">#</a> 反向代理</h2><p>正向代理:</p><ol><li>代理服务器是由客户端设立的</li><li>客户端了解代理服务器和目标服务器是谁</li><li>帮助实现突破访问权限、提高访问速度、对目标服务器隐藏客户端的ip</li></ol><p>反向代理:</p><ol><li>反向代理服务器放在服务端</li><li>客户端不知道访问的是哪一台服务器</li><li>达到负载均衡，并且可以隐藏服务器的真正ip</li></ol><h2 id="负载均衡" tabindex="-1"><a class="header-anchor" href="#负载均衡" aria-hidden="true">#</a> 负载均衡</h2><p>根据相应的算法决定请求是发给哪个服务器</p><p>处理策略：</p><ol><li>轮询 轮流给每一个服务器派发 客户端的请求，平均分配</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>upstream myServer <span class="token punctuation">{</span>
    <span class="token comment"># server ip:port;</span>
    server localhost:2500<span class="token punctuation">;</span>
    server localhost:1112<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
server <span class="token punctuation">{</span>
    location / <span class="token punctuation">{</span>
        proxy_pass http://myServer<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>权重 根据具体的服务器的处理能力，派发客户端的请求</li></ol><p>只需加上 weight</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>upstream myServer <span class="token punctuation">{</span>
    server localhost:2500 <span class="token assign-left variable">weight</span><span class="token operator">=</span><span class="token number">10</span><span class="token punctuation">;</span>
    server localhost:1112 <span class="token assign-left variable">weight</span><span class="token operator">=</span><span class="token number">2</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>ip_hash 对请求ip 进行相关的处理，然后请求指定的服务器，如果ip 不变，请求的服务器将一直不变</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>upstream myServer <span class="token punctuation">{</span>
    ip_hash<span class="token punctuation">;</span>
    <span class="token comment"># 下面是否加权重与 ip_hash无关</span>
    server localhost:2500 <span class="token assign-left variable">weight</span><span class="token operator">=</span><span class="token number">10</span><span class="token punctuation">;</span>
    server localhost:1112 <span class="token assign-left variable">weight</span><span class="token operator">=</span><span class="token number">2</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="动静分离" tabindex="-1"><a class="header-anchor" href="#动静分离" aria-hidden="true">#</a> 动静分离</h2><p>动态资源 静态资源 分离</p><p>动态资源交给服务器，静态资源自己处理</p><p>Nginx 并发能力公式： <code>worker_processes * worker_connections / (4 | 2)</code> = 最终并发能力</p><p>动态资源除以4（因为多了请求服务器数据和接收服务器数据），静态资源除以2</p><ol><li>动态资源代理</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>location / <span class="token punctuation">{</span>
    proxy_pass  url<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>静态资源代理</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>location / <span class="token punctuation">{</span>
    root 静态资源路径<span class="token punctuation">;</span>
    index  默认访问路径下的什么资源<span class="token punctuation">;</span>
    autoindex on<span class="token punctuation">;</span> <span class="token comment"># 表示展示静态资源全部内容 以列表的形式</span>
<span class="token punctuation">}</span>

<span class="token comment"># 存在目录 /static/static 和 /static/image </span>
<span class="token comment"># 以下配置生效</span>
location /static <span class="token punctuation">{</span>
    root static<span class="token punctuation">;</span>
    index index.html<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

location /image <span class="token punctuation">{</span>
    root static<span class="token punctuation">;</span>
    autoindex on<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="集群" tabindex="-1"><a class="header-anchor" href="#集群" aria-hidden="true">#</a> 集群</h2><p>搭建集群后，使用Nginx做反向代理服务器</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># For more information on configuration, see:</span>
<span class="token comment">#   * Official English Documentation: http://nginx.org/en/docs/</span>
<span class="token comment">#   * Official Russian Documentation: http://nginx.org/ru/docs/</span>

user root<span class="token punctuation">;</span>
worker_processes <span class="token number">2</span><span class="token punctuation">;</span>
error_log /root/software/nginx/nginx-1.18.0/logs/error.log<span class="token punctuation">;</span>
pid /root/software/nginx/nginx-1.18.0/run/nginx.pid<span class="token punctuation">;</span>

<span class="token comment"># Load dynamic modules. See /usr/share/doc/nginx/README.dynamic.</span>
include /usr/share/nginx/modules/*.conf<span class="token punctuation">;</span>

events <span class="token punctuation">{</span>
    worker_connections <span class="token number">1024</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

http <span class="token punctuation">{</span>
    log_format  main  <span class="token string">&#39;$remote_addr - $remote_user [$time_local] &quot;$request&quot; &#39;</span>
                      <span class="token string">&#39;$status $body_bytes_sent &quot;$http_referer&quot; &#39;</span>
                      <span class="token string">&#39;&quot;$http_user_agent&quot; &quot;$http_x_forwarded_for&quot;&#39;</span><span class="token punctuation">;</span>

    access_log  /root/software/nginx/nginx-1.18.0/logs/access.log  main<span class="token punctuation">;</span>

    sendfile            on<span class="token punctuation">;</span>
    tcp_nopush          on<span class="token punctuation">;</span>
    tcp_nodelay         on<span class="token punctuation">;</span>
    keepalive_timeout   <span class="token number">65</span><span class="token punctuation">;</span>
    types_hash_max_size <span class="token number">2048</span><span class="token punctuation">;</span>

    include             /root/software/nginx/nginx-1.18.0/conf/mime.types<span class="token punctuation">;</span>
    default_type        application/octet-stream<span class="token punctuation">;</span>

    <span class="token comment"># Load modular configuration files from the /etc/nginx/conf.d directory.</span>
    <span class="token comment"># See http://nginx.org/en/docs/ngx_core_module.html#include</span>
    <span class="token comment"># for more information.</span>
    include /etc/nginx/conf.d/*.conf<span class="token punctuation">;</span>

    server <span class="token punctuation">{</span>
        listen       <span class="token number">80</span> default_server<span class="token punctuation">;</span>
        listen       <span class="token punctuation">[</span>::<span class="token punctuation">]</span>:80 default_server<span class="token punctuation">;</span>
        server_name  _<span class="token punctuation">;</span>
        root         /root/software/nginx/nginx-1.18.0/html<span class="token punctuation">;</span>

        <span class="token comment"># Load configuration files for the default server block.</span>
        include /etc/nginx/default.d/*.conf<span class="token punctuation">;</span>

        location / <span class="token punctuation">{</span>
            index  index.html index.htm<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        error_page <span class="token number">404</span> /404.html<span class="token punctuation">;</span>
            location <span class="token operator">=</span> /40x.html <span class="token punctuation">{</span>
        <span class="token punctuation">}</span>

        error_page <span class="token number">500</span> <span class="token number">502</span> <span class="token number">503</span> <span class="token number">504</span> /50x.html<span class="token punctuation">;</span>
            location <span class="token operator">=</span> /50x.html <span class="token punctuation">{</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,84);function v(m,b){const s=t("router-link");return c(),o("div",null,[n("nav",u,[n("ul",null,[n("li",null,[a(s,{to:"#介绍"},{default:e(()=>[i("介绍")]),_:1})]),n("li",null,[a(s,{to:"#安装"},{default:e(()=>[i("安装")]),_:1}),n("ul",null,[n("li",null,[a(s,{to:"#windows-安装"},{default:e(()=>[i("windows 安装：")]),_:1})]),n("li",null,[a(s,{to:"#安装-1"},{default:e(()=>[i("安装")]),_:1})]),n("li",null,[a(s,{to:"#root-与-alias-的区别"},{default:e(()=>[i("root 与 alias 的区别:")]),_:1})]),n("li",null,[a(s,{to:"#http-缓存"},{default:e(()=>[i("http 缓存")]),_:1})]),n("li",null,[a(s,{to:"#配置html不缓存示例"},{default:e(()=>[i("配置html不缓存示例")]),_:1})]),n("li",null,[a(s,{to:"#配置-点击劫持"},{default:e(()=>[i("配置 点击劫持")]),_:1})]),n("li",null,[a(s,{to:"#关于-location-的路径映射"},{default:e(()=>[i("关于 location 的路径映射")]),_:1})])])]),n("li",null,[a(s,{to:"#反向代理"},{default:e(()=>[i("反向代理")]),_:1})]),n("li",null,[a(s,{to:"#负载均衡"},{default:e(()=>[i("负载均衡")]),_:1})]),n("li",null,[a(s,{to:"#动静分离"},{default:e(()=>[i("动静分离")]),_:1})]),n("li",null,[a(s,{to:"#集群"},{default:e(()=>[i("集群")]),_:1})])])]),r])}const h=l(d,[["render",v],["__file","nginx.html.vue"]]);export{h as default};
