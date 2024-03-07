import{_ as l,M as c,p as t,q as p,Q as o,R as n,N as a,V as e,t as i,a1 as r}from"./framework-7e1a102e.js";const d={},m={class:"table-of-contents"},v=r(`<p>[toc]</p><h1 id="常用命令行" tabindex="-1"><a class="header-anchor" href="#常用命令行" aria-hidden="true">#</a> 常用命令行</h1><ul><li><code>ifconfig</code> 查看 ip 地址</li></ul><h3 id="目录操作" tabindex="-1"><a class="header-anchor" href="#目录操作" aria-hidden="true">#</a> 目录操作</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> ~                   <span class="token comment">#跳转到当前用户的跟目录</span>
<span class="token builtin class-name">cd</span> -                   <span class="token comment">#返回到上一次的工作目录</span>
<span class="token function">rmdir</span>                  <span class="token comment">#命令用来删除空目录</span>
<span class="token function">mkdir</span>                  <span class="token comment">#创建目录</span>
<span class="token function">mv</span> f1 f2 <span class="token comment"># 将文件f1 重命名为f2，如果已经有f2 会将其覆盖；文件夹同理       </span>
<span class="token function">mv</span> /xx  /yy            
<span class="token comment">#将文件夹或文件 xx 放到 yy 文件夹下  \`mv fileName  ..\` 将文件放入父一级目录</span>
<span class="token comment"># -f 强制直接移动而不询问 </span>
<span class="token comment"># -i:若目标文件已经存在，就会询问是否覆盖 </span>
<span class="token comment"># -u:若目标文件已经存在，且源文件比较新，才会更新;</span>




<span class="token builtin class-name">pwd</span>                    <span class="token comment">#显示当前目录地址</span>
<span class="token function">find</span> / <span class="token parameter variable">-name</span> fileName  <span class="token comment">#在指定目录下查找文件</span>
<span class="token function">whereis</span>                <span class="token comment">#查找文件 \`whereis nginx\`  查找 nginx 的安装地址</span>

<span class="token function">ls</span> <span class="token parameter variable">-l</span>                  <span class="token comment">#-l 显示文件的创建时间</span>

<span class="token comment"># 统计文件个数</span>
<span class="token function">ls</span> <span class="token parameter variable">-l</span> <span class="token operator">|</span> <span class="token function">grep</span> <span class="token string">&quot;^-&quot;</span> <span class="token operator">|</span> <span class="token function">wc</span> <span class="token parameter variable">-l</span>  <span class="token comment"># 不包括目录</span>
<span class="token function">ls</span> -lR<span class="token operator">|</span> <span class="token function">grep</span> <span class="token string">&quot;^-&quot;</span> <span class="token operator">|</span> <span class="token function">wc</span> <span class="token parameter variable">-l</span>  <span class="token comment"># 包括目录</span>
<span class="token comment"># 统计目录下文件夹(目录)的个数</span>
<span class="token function">ls</span> <span class="token parameter variable">-lR</span> <span class="token operator">|</span> <span class="token function">grep</span> <span class="token string">&quot;^d&quot;</span> <span class="token operator">|</span> <span class="token function">wc</span> <span class="token parameter variable">-l</span>  <span class="token comment"># 包括目录</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="文件操作" tabindex="-1"><a class="header-anchor" href="#文件操作" aria-hidden="true">#</a> 文件操作</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">touch</span> filename <span class="token comment"># 用于修改文件或者目录的时间属性，若文件不存在，系统会建立一个新的文件</span>

<span class="token builtin class-name">echo</span> <span class="token string">&#39;test&#39;</span> <span class="token operator">&gt;</span> ts.txt  <span class="token comment">#创建文件,并写入&#39;test&#39;</span>
<span class="token builtin class-name">echo</span> <span class="token string">&#39;test add&#39;</span> <span class="token operator">&gt;&gt;</span> ts.txt  <span class="token comment">#追加内容</span>

<span class="token comment"># 上传文件 MobaXterm</span>
<span class="token comment"># 直接拖拽，如果出现权限问题，进入文件夹父级，执行 </span>
<span class="token function">sudo</span> <span class="token function">chmod</span> <span class="token number">777</span> 文件夹名/ <span class="token comment">#会提示输入密码 成功后就可以拖拽文件了, # ubuntu 尝试 切回普通用户 可以上传</span>

<span class="token comment"># r 4可读 w 2可写 x 1执行</span>
<span class="token comment"># 当前文件的拥有者的权限（第一个7） 当前文件的所属组(同组用户)权限（第二个7） 当前文件的组外权限（第三个7）</span>

<span class="token function">tar</span> <span class="token parameter variable">-xf</span> xx.tar.gz                           
<span class="token function">tar</span> <span class="token parameter variable">-czf</span> 压缩文件夹名.tar.gz 被压缩文件夹名  <span class="token comment">#压缩  压缩当前文件夹  用 *</span>
<span class="token function">tar</span> <span class="token parameter variable">-xzf</span> 压缩文件夹名.tar.gz <span class="token parameter variable">-C</span> someFloder  <span class="token comment">#解压  有同名文件会被直接替换</span>
<span class="token comment"># 打包且压缩  用 tar 最适合 </span>
<span class="token comment"># -x 从备份文件还原文件 -f 指定备份文件</span>
<span class="token comment"># -z 参数表示以 .tar.gz 或者 .tgz 后缀名代表 gzip 压缩过的 tar 包</span>
<span class="token comment"># -v 打印操作的文件等信息</span>
<span class="token comment"># -C 解压到指定文件夹</span>

<span class="token function">tar</span> <span class="token parameter variable">-czf</span> dist.tar.gz *  <span class="token comment"># 压缩当前文件夹</span>
<span class="token function">tar</span> <span class="token parameter variable">-xzf</span> dist.tar.gz <span class="token comment"># 解压到当前文件夹 同名覆盖</span>

<span class="token function">gzip</span> a.md  <span class="token punctuation">(</span>gzip a.md <span class="token parameter variable">-c</span> <span class="token operator">&gt;</span> a.md.gz<span class="token punctuation">)</span>         <span class="token comment"># gzip 只能压缩解压文件 括号内表示保留原文件 </span>
<span class="token function">gzip</span> a.md.gz <span class="token parameter variable">-d</span>  <span class="token punctuation">(</span>gzip a.md.gz <span class="token parameter variable">-c</span> <span class="token operator">&gt;</span> a.md<span class="token punctuation">)</span>
gunzip

<span class="token function">zip</span> <span class="token parameter variable">-r</span> 名称.zip 文件夹或多个文件              <span class="token comment"># -m 删除原始文件 -r 递归</span>
<span class="token function">unzip</span> <span class="token parameter variable">-o</span> xxx.zip                            <span class="token comment">#解压文件 -o 覆盖不用询问 -v 查看文件不解压</span>

<span class="token function">rm</span> <span class="token parameter variable">-f</span> *   <span class="token comment">#删除当前目录下的文件，只能删文件 -f 强制</span>
<span class="token function">rm</span> <span class="token parameter variable">-rf</span> *  <span class="token comment">#递归删除当前目录下的文件和文件夹 -r 递归</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="cp-命令" tabindex="-1"><a class="header-anchor" href="#cp-命令" aria-hidden="true">#</a> cp 命令</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">cp</span> –r a/ b  <span class="token comment"># 将a目录和其下内容放到b中 </span>
<span class="token function">cp</span> –r a/* b <span class="token comment"># 只将a下的文件放到b中</span>
<span class="token comment">#-f: 覆盖已经存在的目标文件而不给出提示</span>
<span class="token comment">#-i: 给出提示再操作</span>
<span class="token comment">#-r：递归操作目录</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="vi-vim-nano-操作" tabindex="-1"><a class="header-anchor" href="#vi-vim-nano-操作" aria-hidden="true">#</a> vi vim nano 操作</h3><ul><li><code>vi filename </code> 打开或新建文件</li></ul><p>vim 需要安装在 centOS 上 ； Ubuntu上也可以用nano</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>按ESC键跳到命令模式，然后：
:w 保存文件但不退出vi.
:w file 将修改另外保存到file中，不退出vi.
:w! 强制保存，不推出vi.
:wq 保存文件并退出vi.
:wq! 强制保存文件，并退出vi.
:q 不保存文件，退出vi.
:q! 不保存文件，强制退出vi

a    //在当前光标位置的右边添加文本 
i    //在当前光标位置的左边添加文本 
A    //在当前行的末尾位置添加文本 
I    //在当前行的开始处添加文本(非空字符的行首) 
O    //在当前行的上面新建一行 
o    //在当前行的下面新建一行
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="系统操作" tabindex="-1"><a class="header-anchor" href="#系统操作" aria-hidden="true">#</a> 系统操作</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">reboot</span>          <span class="token comment">#普通重启</span>
<span class="token function">shutdown</span> <span class="token parameter variable">-r</span> now <span class="token comment">#立刻重启(root用户使用)</span>

<span class="token function">su</span>   <span class="token comment">#只是切换了root身份</span>
<span class="token function">su</span> - <span class="token comment">#最大的区别：连用户和Shell环境一起切换成root身份了</span>
<span class="token comment">#sudo 命令需要输入当前用户的密码，su 命令需要输入 root 用户的密码。另一个区别是其默认行为，sudo 命令只允许使用提升的权限运行单个命令，而 su 命令会启动一个新的 shell，同时允许使用 root 权限运行尽可能多的命令，直到明确退出登录。</span>
<span class="token builtin class-name">exit</span> <span class="token comment">#退出</span>

<span class="token function">su</span> warren <span class="token comment"># 切换到其它用户</span>

systemctl <span class="token builtin class-name">enable</span> nginx <span class="token comment">#添加开机启动</span>
disable                <span class="token comment">#关闭开机启动</span>
start                  <span class="token comment">#启动</span>
stop                   <span class="token comment">#停止</span>
restart                <span class="token comment">#重启</span>
reload                 <span class="token comment">#重载</span>
status                 <span class="token comment">#查看状态</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="查看系统相关信息" tabindex="-1"><a class="header-anchor" href="#查看系统相关信息" aria-hidden="true">#</a> 查看系统相关信息</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">uname</span> <span class="token parameter variable">-a</span> <span class="token comment">#显示所有系统信息 带有64就是64位）</span>
<span class="token function">cat</span> /etc/os-release <span class="token comment">#查看系统版本</span>
<span class="token function">cat</span> /etc/redhat-release  <span class="token comment">#查看系统</span>
<span class="token function">cat</span> /etc/centos-release <span class="token comment">#查看 centos </span>

<span class="token function">free</span> <span class="token parameter variable">-m</span> <span class="token comment">#以M为单位显示内存状态 free -m -s 3 每3秒输出一次 推荐用 -h 表示一个合适的单位显示，如果值太小会默认以 -b 显示 设置其它参数无效</span>
<span class="token comment">#返回信息</span>
<span class="token comment">#free 真正尚未被使用的物理内存</span>
<span class="token comment">#buff/cache buffer(缓存) 和 cache(缓冲) 使用的物理内存</span>
<span class="token comment">#available 应用程序认为可用内存，大致等于 free + buffer + cache</span>
<span class="token comment">#swap 系统物理内存不足时，Linux 会将内存中不常访问的数据保存到 swap 上，系统就有更多的物理内存为各个进程服务，当系统需要访问 swap 上存储的内容时，再将 swap 上的数据加载到内存中，这就是换出和换入。交换空间可以在一定程度上缓解内存不足的情况，但是它需要读写磁盘数据，所以性能不是很高</span>

<span class="token function">df</span> <span class="token parameter variable">-h</span> <span class="token comment">#根据大小适当显示磁盘信息</span>
<span class="token function">du</span> <span class="token parameter variable">-sh</span> <span class="token comment">#查看当前目录大小</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="应用-进程" tabindex="-1"><a class="header-anchor" href="#应用-进程" aria-hidden="true">#</a> 应用 进程</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">top</span> <span class="token parameter variable">-cin</span> <span class="token number">5</span> <span class="token comment">#显示当前进程状态，类似windows的任务管理器 c表示显示具体应用地址和名称 i表示不显示任何闲置或无用进程 n表示刷新几次</span>

<span class="token function">ps</span> <span class="token parameter variable">-ef</span> <span class="token operator">|</span> <span class="token function">grep</span> xxx  <span class="token comment">#查看xxx进程</span>
<span class="token comment">#-e 显示所有进程信息 -f 格式化的信息列表</span>
<span class="token comment"># ps aux|grep nginx 查看ng 进程</span>

<span class="token function">grep</span> <span class="token comment">#命令用于查找文件里符合条件的字符串</span>
<span class="token comment">#| 表示管道，上一条命令的输出，作为下一条命令参数</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="网络操作" tabindex="-1"><a class="header-anchor" href="#网络操作" aria-hidden="true">#</a> 网络操作</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">ifconfig</span> <span class="token comment">#查看 ip 地址  Ubuntu会提示先安装一个包 安装即可</span>

<span class="token function">netstat</span> <span class="token parameter variable">-tulpn</span>  <span class="token comment">#查看开启的端口号</span>
<span class="token function">netstat</span> <span class="token parameter variable">-tunlp</span> <span class="token operator">|</span> <span class="token function">grep</span> 端口号  <span class="token comment">#显示 tcp，udp 的端口和进程等相关情况 </span>
<span class="token function">lsof</span> <span class="token parameter variable">-i:3000</span>    <span class="token comment">#查看3000端口的进程</span>
<span class="token function">kill</span> pid        <span class="token comment">#杀死进程</span>
<span class="token function">kill</span> <span class="token parameter variable">-9</span> pid     <span class="token comment">#表示强制杀死该进程</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="防火墙" tabindex="-1"><a class="header-anchor" href="#防火墙" aria-hidden="true">#</a> 防火墙</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>firewall-cmd --query-port<span class="token operator">=</span><span class="token number">3000</span>/tcp                             <span class="token comment">#查看防火墙端口是否开放</span>
firewall-cmd <span class="token parameter variable">--zone</span><span class="token operator">=</span>public --add-port<span class="token operator">=</span><span class="token number">3000</span>/tcp <span class="token parameter variable">--permanent</span>     <span class="token comment">#打开某个端口</span>
firewall-cmd <span class="token parameter variable">--zone</span><span class="token operator">=</span>public --remove-port<span class="token operator">=</span><span class="token number">3000</span>/tcp <span class="token parameter variable">--permanent</span>  <span class="token comment">#关闭某个端口</span>
firewall-cmd <span class="token parameter variable">--zone</span><span class="token operator">=</span>public --list-ports                        <span class="token comment">#查看开放的端口列表</span>
systemctl restart firewalld                                    <span class="token comment">#重启防火墙 打开关闭端口后都要重启</span>
systemctl stop firewalld                                       <span class="token comment">#关闭防火墙</span>
systemctl start firewalld                                      <span class="token comment">#打开防火墙</span>

<span class="token comment"># Ubuntu 防火墙操作</span>
<span class="token function">sudo</span> ufw status   <span class="token comment">#查看状态  inactive 关闭  active 开启</span>
<span class="token function">sudo</span> ufw <span class="token builtin class-name">enable</span> disable reload   <span class="token comment">#开启 关闭 重启</span>

<span class="token comment"># Ubuntu 端口操作</span>
<span class="token function">sudo</span> ufw allow <span class="token number">5050</span> 
<span class="token function">sudo</span> ufw delete allow <span class="token number">5050</span>   <span class="token comment">#关闭</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,23);function u(b,k){const s=c("router-link");return t(),p("div",null,[o(`
 * @LastEditTime: 2023-12-04 17:42:47
`),n("nav",m,[n("ul",null,[n("li",null,[a(s,{to:"#目录操作"},{default:e(()=>[i("目录操作")]),_:1})]),n("li",null,[a(s,{to:"#文件操作"},{default:e(()=>[i("文件操作")]),_:1})]),n("li",null,[a(s,{to:"#vi-vim-nano-操作"},{default:e(()=>[i("vi vim nano 操作")]),_:1})]),n("li",null,[a(s,{to:"#系统操作"},{default:e(()=>[i("系统操作")]),_:1})]),n("li",null,[a(s,{to:"#查看系统相关信息"},{default:e(()=>[i("查看系统相关信息")]),_:1})]),n("li",null,[a(s,{to:"#应用-进程"},{default:e(()=>[i("应用 进程")]),_:1})]),n("li",null,[a(s,{to:"#网络操作"},{default:e(()=>[i("网络操作")]),_:1})]),n("li",null,[a(s,{to:"#防火墙"},{default:e(()=>[i("防火墙")]),_:1})])])]),v])}const h=l(d,[["render",u],["__file","commandLine.html.vue"]]);export{h as default};
