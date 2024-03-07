import{_ as t,M as l,p as c,q as o,R as n,N as e,V as s,t as i,a1 as d}from"./framework-7e1a102e.js";const r={},p={class:"table-of-contents"},u=d(`<p>[toc]</p><hr><ul><li>git bash 允许交互工作： <code>winpty vue.cmd create some-name</code> vscode 中用bash 直接就可以使用键盘操作</li></ul><h2 id="github" tabindex="-1"><a class="header-anchor" href="#github" aria-hidden="true">#</a> github</h2><ul><li>直接访问版本号前7位也是可以访问的。</li></ul><h3 id="github-授权" tabindex="-1"><a class="header-anchor" href="#github-授权" aria-hidden="true">#</a> github 授权</h3><p>github 头像下拉 -&gt; settings -&gt; Developer settings -&gt; Personal access tokens -&gt; Generate new token</p><p>Note 提示信息随意命名</p><p>勾选 repo 全部选项</p><p>勾选 admin:public_key 全部选项</p><p>勾选 admin:repo_hook 全部选项</p><p>以上的勾选 根据不同的情况会有所区别</p><p>点击生成，记得复制保存，这里只显示一次，刷新进入后 不再显示</p><p><code>Travis CI</code> 只支持 Github，不支持其他代码托管服务</p><h3 id="contribution-没有记录" tabindex="-1"><a class="header-anchor" href="#contribution-没有记录" aria-hidden="true">#</a> contribution 没有记录</h3><p>出现提交了代码 但 contribution 没有记录，同时查看 commit 记录 提交的用户也无法被 GitHub识别；证明配置的 uaer.name 和 user.email 不正确，email必须配置为GitHub上认证过的邮箱</p><h2 id="gitlab" tabindex="-1"><a class="header-anchor" href="#gitlab" aria-hidden="true">#</a> gitlab</h2><p>clone 时出现， <code>fatal: unable to access &#39;http://xxxx/front-end/smart-safety-pc.git/&#39;: Could not resolve host: xxxx</code></p><p>其中的 xxxx 是一串表示仓库的字符 要将字符改为，当前域名</p><ul><li><p>分支权限管理： settings -&gt; Repository -&gt; Protected Branches -&gt; expand</p></li><li><p>人员权限管理： 最好以项目来分组，在分组中可以设置人员角色权限 没有在分组中的，可以在项目中设置权限</p></li><li><p>Guest 可以创建issue、发表评论、不能读写版本库</p></li><li><p>Reporter 可以克隆代码，不能提交，QA、PM可以赋予这个权限</p></li><li><p>Developer 可以克隆代码、开发、提交、push、RD可以赋予这个权限</p></li><li><p>Maintainer 不能对项目进行迁移、删除，其它的权限都有</p></li><li><p>Owner 可以设置项目的访问权限-Visibility Level、删除项目、迁移项目、管理组成员、开发组leader可以赋予这个权限</p></li></ul><h2 id="git" tabindex="-1"><a class="header-anchor" href="#git" aria-hidden="true">#</a> git</h2><ul><li><p><code>crlf: &quot;\\r\\n&quot;</code>, windows系统的换行方式</p></li><li><p><code>lf: &quot;\\n&quot;</code>, Linux系统的换行方式 Git提交时把行结束符CRLF转换成LF，在签出代码时把LF转换成CRLF 设置 <code>git config --global core.autocrlf true</code> 这个也是默认设置,适用月 windows 系统 提交时把CRLF转换成LF，签出时不转换 设置 <code>git config --global core.autocrlf input</code> 适用 linux 设置 <code>git config --global core.autocrlf false</code> 全是windows开发</p></li><li><p><code>init</code> 初始化一个新本地仓库，它在工作目录下生成一个名为.git的隐藏文件夹</p></li><li><p>git subtree 实现一个仓库作为其它仓库的子仓库</p></li><li><p>上传空文件夹 添加 <code>.gitkeep</code> 文件即可</p></li><li><p>commit 与 pull 的操作顺序； 当预判本地与远程有冲突时： <code>commit-&gt;pull-&gt;push</code> 预判无冲突： <code>pull-&gt;commit-&gt;push</code></p></li></ul><h3 id="gitignore-匹配规则" tabindex="-1"><a class="header-anchor" href="#gitignore-匹配规则" aria-hidden="true">#</a> .gitignore 匹配规则</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>*.txt           <span class="token comment">#忽略所有 .txt 后缀的文件</span>
/todo           <span class="token comment">#仅忽略项目根目录下的 todo 文件，不包括 src/todo</span>
build/          <span class="token comment">#忽略 build/目录下的所有文件，过滤整个build文件夹；</span>
hello/*         <span class="token comment">#匹配hello目录下的所有目录和文件 但不忽略hello目录本身</span>
doc/*.txt       <span class="token comment">#忽略doc目录下所有 .txt 后缀的文件，但不包括doc子目录的 .txt 的文件</span>
bin/:           <span class="token comment">#忽略当前路径下的 bin 文件夹，该文件夹下的所有内容都会被忽略，不忽略 bin 文件</span>
/bin:           <span class="token comment">#忽略根目录下的 bin 文件</span>
/*.c:           <span class="token comment">#忽略 cat.c，不忽略 build/cat.c</span>
debug/*.obj:    <span class="token comment">#忽略debug/io.obj，不忽略 debug/common/io.obj和tools/debug/io.obj</span>
**/foo:         <span class="token comment">#忽略/foo, a/foo, a/b/foo等</span>
a/**/b:         <span class="token comment">#忽略a/b, a/x/b, a/x/y/b等</span>
config.js:      <span class="token comment">#忽略当前路径的 config.js 文件</span>
/mtk/           <span class="token comment">#忽略整个文件夹</span>
*.zip           <span class="token comment">#忽略所有.zip文件</span>
/mtk/do.c       <span class="token comment">#忽略某个具体文件</span>

<span class="token comment">#不忽略某个文件</span>
src/views/xxx/*
<span class="token operator">!</span>src/views/xxx/index.vue <span class="token comment">#目前实测是只能到文件</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>已经提交过的 文件 需要放弃跟踪</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> <span class="token function">rm</span> <span class="token parameter variable">--cached</span> <span class="token parameter variable">-rf</span> folder<span class="token operator">|</span><span class="token function">file</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="创建ssh" tabindex="-1"><a class="header-anchor" href="#创建ssh" aria-hidden="true">#</a> 创建SSH</h3><ol><li><p><code>cd ~/.ssh</code> : 查看用户根目录是否有 ssh 文件</p></li><li><p><code>ssh-keygen</code> : 在 Windows 上，<code>ssh-keygen</code> 该程序包含于 MSysGit(也就是git-for-windows) 【输入命令后，一直回撤即可】</p></li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>ssh-keygen 
-b：指定密钥长度
-e：读取openssh的私钥或者公钥文件
-C：添加注释
-f：指定用来保存密钥的文件名
-i：读取未加密的ssh-v2兼容的私钥/公钥文件，然后在标准输出设备上显示openssh兼容的私钥/公钥
-l：显示公钥文件的指纹数据
-N：提供一个新密语
-P：提供（旧）密语
-q：静默模式
-t：指定要创建的密钥类型<span class="token punctuation">(</span>rsa和dsa<span class="token punctuation">;</span> 都是非对称加密算法,DSA 只能用于数字签名，而无法用于加密；RSA 即可作为数字签名，也可以作为加密算法<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="git-hooks" tabindex="-1"><a class="header-anchor" href="#git-hooks" aria-hidden="true">#</a> Git Hooks</h3><p>实例查看本项目的 pre-push 文件</p><ul><li><p>在初始化git时会在 <code>./git/hooks/</code> 中生成钩子脚本，默认加了 <code>.sample</code> 后缀，防止默认执行,是样本文件</p></li><li><p>安装一个钩子只需要去掉.sample拓展名即可</p></li></ul><h4 id="本地钩子" tabindex="-1"><a class="header-anchor" href="#本地钩子" aria-hidden="true">#</a> 本地钩子</h4><ul><li><p><code>pre-commit</code> 运行git commit 时被触发,不需要任何参数，以非0状态退出时将放弃整个提交</p></li><li><p><code>prepare-commit-msg</code> 在pre-commit钩子在文本编辑器中生成提交信息之后被调用;用来方便地修改自动生成的squash或merge提交</p></li><li><p><code>commit-msg</code> 它会在用户输入提交信息之后被调用。这适合用来提醒开发者他们的提交信息不符合你团队的规范</p></li><li><p><code>post-commit</code> commit-msg钩子之后立即被运行 。它无法更改git commit的结果，所以这主要用于通知用途</p></li><li><p><code>applypatch-msg</code> 执行git am命令时触发，常用于检查命令提取出来的提交信息是否符合特定格式</p></li><li><p><code>pre-applypatch</code> git am提取出补丁并应用于当前分支后，准备提交前触发，常用于执行测试用例或检查缓冲区代码</p></li><li><p><code>post-applypatch</code> git am提交后触发，常用于通知、或补丁邮件回复（此钩子不能停止git am过程）</p></li><li><p><code>post-checkout</code> 和post-commit钩子很像，但它在你用git checkout查看引用的时候被调用。这是用来清理你的工作目录中可能会令人困惑的生成文件</p></li><li><p><code>pre-rebase</code> git rebase发生更改之前运行</p></li><li><p><code>post-rewrite</code> 执行会替换commit的命令时触发，比如git rebase或git commit –amend</p></li><li><p><code>post-merge</code> 成功完成一次 merge行为后触发</p></li><li><p><code>pre-push</code> 执行git push命令时触发，可用于执行测试用例</p></li><li><p><code>pre-auto-gc</code> 执行垃圾回收前触发</p></li></ul><h4 id="服务器钩子" tabindex="-1"><a class="header-anchor" href="#服务器钩子" aria-hidden="true">#</a> 服务器钩子</h4><ul><li><code>pre-receive</code> 用git push向仓库推送代码时被执行</li><li><code>update</code> 在pre-receive之后被调用</li><li><code>post-receive</code> post-receive</li></ul><hr><h3 id="状态" tabindex="-1"><a class="header-anchor" href="#状态" aria-hidden="true">#</a> 状态</h3><ul><li>git status -s 获取简短的输出结果</li></ul><p>A：在本地新增的文件（服务器上没有）<br> C：文件的一个新拷贝<br> D：本地删除的文件（服务器上还在）<br> M：文件的内容或mode被修改<br> R：文件名被修改<br> T：文件类型被修改<br> U：文件没有被合并（你需要完成合并才能提交）<br> X：未知状态<br> 搜索：man git diff-files。</p><hr><ul><li>Linux或Mac系统使用LF作为行结束符</li></ul><h3 id="文件冲突查看" tabindex="-1"><a class="header-anchor" href="#文件冲突查看" aria-hidden="true">#</a> 文件冲突查看</h3><p>git status -s 显示 UU 的表示有冲突</p><p>git diff --check 或 git diff --name-only --diff-filter=U</p><h3 id="git-相关配置" tabindex="-1"><a class="header-anchor" href="#git-相关配置" aria-hidden="true">#</a> git 相关配置</h3><p>配置用户名和邮件地址：<code>可以随便改</code> 这个与代码上传 拖取时输入的账号密码无关,</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> config <span class="token parameter variable">--global</span> user.name <span class="token string">&#39;username&#39;</span>
<span class="token function">git</span> config <span class="token parameter variable">--global</span> user.email <span class="token string">&#39;email&#39;</span>

<span class="token comment">#配置当前仓库</span>
<span class="token function">git</span> config user.name <span class="token string">&#39;username&#39;</span>
<span class="token function">git</span> config user.email <span class="token string">&#39;warrenemb@163.com&#39;</span>

<span class="token comment">#查看系统、当前用户、当前仓库配置： </span>
<span class="token function">git</span> config <span class="token parameter variable">--system</span> <span class="token parameter variable">--list</span>
<span class="token function">git</span> config <span class="token parameter variable">--global</span> <span class="token parameter variable">--list</span>
<span class="token function">git</span> config <span class="token parameter variable">--local</span> <span class="token parameter variable">--list</span>

<span class="token comment"># 配置代理 这里的端口根据实际用途更改  这个更改只针对 git 进行代理</span>
<span class="token function">git</span> config <span class="token parameter variable">--global</span> http.proxy http://127.0.0.1:7890
<span class="token function">git</span> config <span class="token parameter variable">--global</span> https.proxy https://127.0.0.1:7890
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>用户信息列表：<code>git config --global --list</code></p><p>修改: <code>git config --global user.name &#39;其它&#39; </code></p><hr><ul><li><p>解决 windows 和 Linux 文件格式不一致 NTFS 这是全局设置 <code>git config --global core.filemode false</code></p></li><li><p>解决 git 默认不区分文件名大小写问题 <code>git config core.ignorecase false</code></p></li></ul><hr><p>git clone 会默认将本地与远程分支进行追踪</p><p>克隆时 密码输入错误，怎么修改；打开控制面板 -&gt; 用户账户 -&gt; Windows 凭据 -&gt; 选中凭据展开编辑即可</p><hr><p>当在merge时产生了冲突（branchname|Marging）<br> 执行 <code>git add filename|. + git commit –m &#39;message&#39;</code> 再次将工作区的更改提交到本地仓库-区，告诉Git 冲突已解决。</p><hr><ul><li>git rebase</li></ul><p>在当前分支操作 git rebase master，把当前分支(dev)的 commit 放到公共分支(matser)的最后面,所以叫变基。就好像你从公共分支又重新拉出来这个分支一样</p><p>merge 会把公共分支和当前分支的commit 合并在一起，形成一个新的 commit 提交， rebase不会生成新的节点，是将两个分支融合成一个线性的提交</p><p>在分支上进行 git rebase master 操作，相当于让当前分支相对于 分支 master 进行变基，遇到冲突 解决后需要执行， git rebase --continue</p><p>当需要保留详细的合并信息的时候建议使用git merge，特别是需要将分支合并进入master分支时； 当频繁进行了git commit提交时，不必提交过多的信息时，可以尝试git rebase。</p><p>建议不要在公共分支使用rebase，因为公共分支的commit 一般不应放到次分支后面</p><p>变基操作的 实质是丢弃一些现有的提交，然后相应地新建一些内容一样但实际上不同的提交。 如果你已经将提交推送至某个仓库，而其他人也已经从该仓库拉取提交并进行了后续工作，此时，如果你用 git rebase 命令重新整理了提交并再次推送，你的同伴因此将不得不再次将他们手头的工作与你的提交进行整合，如果接下来你还要拉取并整合他们修改过的提交，事情就会变得一团糟</p><hr><h3 id="add" tabindex="-1"><a class="header-anchor" href="#add" aria-hidden="true">#</a> add</h3><p>将文件添加进暂存区（Stage）</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> <span class="token function">add</span> <span class="token builtin class-name">.</span>          <span class="token comment">#提交修改+新文件 </span>
<span class="token function">git</span> <span class="token function">add</span> <span class="token parameter variable">-u</span>         <span class="token comment">#提交修改+删除</span>
<span class="token function">git</span> <span class="token function">add</span> -A<span class="token punctuation">(</span>--all<span class="token punctuation">)</span>  <span class="token comment">#提交所有变化</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="怎么恢复-git-add-操作后-删除的工作区的文件" tabindex="-1"><a class="header-anchor" href="#怎么恢复-git-add-操作后-删除的工作区的文件" aria-hidden="true">#</a> 怎么恢复 <code>git add .</code>操作后，删除的工作区的文件</h4><p>前提是在删除后没有 <code>git add</code> 操作</p><ul><li>git reset head 文件地址加名称</li><li>git checkout -- 文件地址加名称</li></ul><hr><h3 id="commit" tabindex="-1"><a class="header-anchor" href="#commit" aria-hidden="true">#</a> commit</h3><ul><li>将暂存区文件提交到当前分支</li><li>如果不填写注释信息会报错： <code>Aborting commit due to empty commit message.</code></li></ul><h3 id="舍弃本地修改" tabindex="-1"><a class="header-anchor" href="#舍弃本地修改" aria-hidden="true">#</a> 舍弃本地修改</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token number">1</span>. 没有使用过 <span class="token function">add</span> 操作
<span class="token function">git</span> checkout -- 文件地址加名称
<span class="token function">git</span> checkout <span class="token builtin class-name">.</span>   <span class="token comment">#但是不会删除掉刚新建的文件</span>

<span class="token number">2</span>. 有过 <span class="token function">add</span> 操作
<span class="token function">git</span> reset HEAD 文件地址加名称 
<span class="token function">git</span> reset HEAD <span class="token builtin class-name">.</span>  <span class="token comment">#操作后需要继续使用步骤1的操作</span>

<span class="token number">3</span>. 已经 commit，参考如下 reset
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h3 id="回退" tabindex="-1"><a class="header-anchor" href="#回退" aria-hidden="true">#</a> 回退</h3><h4 id="reset" tabindex="-1"><a class="header-anchor" href="#reset" aria-hidden="true">#</a> reset</h4><p>删除了某个提交后的所有提交 不会产生新的提交记录，推送远程需要强制推送</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> reset <span class="token parameter variable">--soft</span> HEAD^ <span class="token comment">#取消最近一次的commit 然后提交到远程 git push -f 建议少用</span>
<span class="token function">git</span> reset <span class="token parameter variable">--hard</span> commit_id  <span class="token comment">#完成撤销,同时将代码恢复到commit_id对应版本</span>
<span class="token function">git</span> reset commit_id <span class="token comment">#完成撤销,不对代码修改进行撤销</span>

<span class="token comment"># 完整的一次回退，修改，上线，合并操作步骤</span>
<span class="token comment"># 已master分支为例</span>
<span class="token number">1</span>. 已master为准 创建新分支 hotfix
<span class="token number">2</span>. 切换到 hotfix 分支
<span class="token number">3</span>. 执行reset到相应的提交节点
<span class="token number">4</span>. 修改代码，打包测试等操作，commit代码
<span class="token number">5</span>. 测试完成后将hotfix代码合并到master，处理冲突
<span class="token number">6</span>. 打tag推送

如果是直接在 master reset了代码，务必立即以此为准创建新分支，再将master 代码reset回最新的提交，否则最新的代码会丢失
master查看最新的提交记录用 <span class="token function">git</span> reflog
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="revert" tabindex="-1"><a class="header-anchor" href="#revert" aria-hidden="true">#</a> revert</h4><p>撤销某个commit，再生成一个commit 不会对其它的提交产生影响 提交远程 直接 push 就好</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> revert commit_id  <span class="token comment">#撤销某次提交</span>
<span class="token function">git</span> revert <span class="token parameter variable">--abort</span>     <span class="token comment">#撤销过程中可以放弃撤销</span>

如果撤销了某次的提交，后续又需要将撤销的代码加回来，只需要把 revert 新生成的那条 commit 再 revert 一下就好

注意处理冲突，一般会有 REVERTING 等提示
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h3 id="分支操作" tabindex="-1"><a class="header-anchor" href="#分支操作" aria-hidden="true">#</a> 分支操作</h3><p>新建分支时会基于当前所在分支commit的内容新建。所以新建的分支会包含所有所基于的分支内容。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> branch --set-upstream-to<span class="token operator">=</span>origin/远程分支名  本地分支名 <span class="token comment">#设置追踪</span>
branch                  <span class="token comment">#显示所有分支（*表示当前所在分支） </span>
branch branchName       <span class="token comment">#创建新分支        </span>
checkout <span class="token parameter variable">-f</span> branchName  <span class="token comment">#强行切换分支</span>
checkout –b branchName  <span class="token comment">#创建新分支并切换到该分支</span>
branch –d branchName    <span class="token comment">#删除分支</span>
branch <span class="token parameter variable">-D</span> branchName    <span class="token comment">#强行删除分支</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h4 id="远程分支操作" tabindex="-1"><a class="header-anchor" href="#远程分支操作" aria-hidden="true">#</a> 远程分支操作</h4><ul><li>git remote add anyname url</li></ul><p>anyname为别名; url: 远程仓库地址链接 如：https://github.com/WarrenHewitt/blog-code.git</p><p>一般 anyname 默认为 origin，当设置完成后，在推送代码时可以直接 git push anyname branchName 托送代码到指定仓库的指定分支</p><p>当用git clone时默认的anyname为origin。</p><hr><ul><li>git push (-f) url branchName 根据 url 地址推送</li><li>git push origin [localbranch | HEAD(就是当前活跃分支的游标)] : remotebranch (当远程和本地分支相同时可以简写：git push origin branchname)</li></ul><p>这里的 origin 可以替代为 url 仓库地址</p><hr><ul><li><p>git push origin localbranch:remotebranch 创建远程分支 确保本地已有 localbranch 分支</p></li><li><p>git push origin :remotebranch 删除远程分支 || git push origin --delete remotebranch</p></li><li><p>git pull origin remotebranch:localbranch 表示获取远程分支的更新与本地分支合并.</p></li><li><p>git pull origin remotebranch 表示与当前本地分支合并; 相当于 git fetch origin 和git merge origin/remotebranch</p></li></ul><hr><ul><li>查看某个作者的所有commit: <code>git log --author=name -5</code> <code>git log --pretty=oneline -5</code> <code>git log --oneline -5</code><code>git log --pretty=format:&quot;%cn %s&quot; -8</code> 格式化输出commit的前8条 <code>git log -10 --grep=查询内容</code><code>git log --author=Warren --pretty=format:&quot;%cn %s&quot; -8</code><code>git log --author=&quot;Warren&quot; --since=&quot;2023-01-31 00:00:00&quot; --until=&quot;2023-12-31 00:00:00&quot; --pretty=format:&quot;%cn %s&quot; -8</code></li></ul><p><code>git branch --contains commitID</code> 查询某个commit在哪些分支中存在</p><hr><p><code>git remove prune</code> 清理本地所有已经删掉的远程分支参照，但是不会删除本地分支</p><hr><ul><li>更新远程跟踪分支： <ul><li><code>git fetch origin</code> 获取远程的所有分支，不然branch -a 查看不到新的远程分支</li><li><code>git fetch origin master</code> 只取回特定分支的更新</li></ul></li></ul><hr><ul><li>git branch命令的 <strong>-r</strong> 选项，可以用来查看远程分支，<strong>-a</strong>选项查看所有分支</li></ul><hr><ul><li>拉取远程分支并创建本地分支 <ul><li><code>git checkout -b localBranch origin/originBranch</code></li><li><code>git fetch origin originBranchName:localBranchName</code> 区别是不会切换到本地新分支</li></ul></li></ul><h3 id="tag-相关操作" tabindex="-1"><a class="header-anchor" href="#tag-相关操作" aria-hidden="true">#</a> tag 相关操作</h3><p>给仓库历史中的某一个提交打上标签</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> tag <span class="token parameter variable">-a</span> v1.0.0 <span class="token parameter variable">-m</span> <span class="token string">&#39;describe&#39;</span> <span class="token comment">#打tag </span>
<span class="token function">git</span> push origin v1.0.0 <span class="token comment">#推送单个 推送后 查看tag  会有最新的 commit 的代码，</span>
<span class="token function">git</span> push origin <span class="token parameter variable">--tags</span> <span class="token comment">#推送多个tag  origin 可以省略</span>
<span class="token comment">#如果没有push分支代码，那么在远程分支上是没有最新commit代码的，这是两个独立的过程</span>

<span class="token function">git</span> tag                           <span class="token comment">#显示所有tag</span>
<span class="token function">git</span> show v1.0.0                   <span class="token comment">#显示tag详情</span>
<span class="token function">git</span> fetch origin tag v1.0.0       <span class="token comment">#拉取远程tag</span>
<span class="token function">git</span> tag <span class="token parameter variable">-d</span> v1.0.0                 <span class="token comment">#删除本地标签</span>
<span class="token function">git</span> push origin :refs/tags/v1.0.0 <span class="token comment">#删除远程标签</span>

<span class="token comment">#检出某个tag版本代码</span>
<span class="token function">git</span> checkout <span class="token parameter variable">-b</span> branchName tagName

<span class="token comment">#查看代码 提示 You are in &#39;detached HEAD&#39; state   直接切换到其它分支即可 如果强行修改代码，注意commit</span>
<span class="token comment">#再切换分支时会有提示希望创建分支来保存以上修改  按提示操作即可</span>
<span class="token function">git</span> checkout tagName 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="存储与清理" tabindex="-1"><a class="header-anchor" href="#存储与清理" aria-hidden="true">#</a> 存储与清理</h3><ul><li>不想提交脏的状态</li><li>新增的文件不会被存储，所以需要先 add</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#将你没有提交的内容全部存储；当前分支也不会保留这部分内容，只有重新apply才会将这些内容放入当前分支</span>
<span class="token function">git</span> stash
<span class="token function">git</span> stash save <span class="token string">&#39;备注信息&#39;</span>
<span class="token function">git</span> stash list              <span class="token comment">#查看存储的列表，按时间降序排列</span>
<span class="token function">git</span> stash apply             <span class="token comment">#应用最近的存储</span>
<span class="token function">git</span> stash pop               <span class="token comment">#和 apply 功能一致，但会将stash列表中的信息进行删除</span>
<span class="token function">git</span> stash pop  stash@<span class="token punctuation">{</span>值<span class="token punctuation">}</span>    
<span class="token function">git</span> stash apply stash@<span class="token punctuation">{</span>值<span class="token punctuation">}</span>  <span class="token comment">#值:  git stash list 查看</span>
<span class="token function">git</span> stash drop stash@<span class="token punctuation">{</span>值<span class="token punctuation">}</span>   <span class="token comment">#移除某个暂存 值：同上</span>
<span class="token function">git</span> stash <span class="token function">clear</span>             <span class="token comment">#清空本地暂存栈信息</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,117);function m(h,g){const a=l("router-link");return c(),o("div",null,[n("nav",p,[n("ul",null,[n("li",null,[e(a,{to:"#github"},{default:s(()=>[i("github")]),_:1}),n("ul",null,[n("li",null,[e(a,{to:"#github-授权"},{default:s(()=>[i("github 授权")]),_:1})]),n("li",null,[e(a,{to:"#contribution-没有记录"},{default:s(()=>[i("contribution 没有记录")]),_:1})])])]),n("li",null,[e(a,{to:"#gitlab"},{default:s(()=>[i("gitlab")]),_:1})]),n("li",null,[e(a,{to:"#git"},{default:s(()=>[i("git")]),_:1}),n("ul",null,[n("li",null,[e(a,{to:"#gitignore-匹配规则"},{default:s(()=>[i(".gitignore 匹配规则")]),_:1})]),n("li",null,[e(a,{to:"#创建ssh"},{default:s(()=>[i("创建SSH")]),_:1})]),n("li",null,[e(a,{to:"#git-hooks"},{default:s(()=>[i("Git Hooks")]),_:1})]),n("li",null,[e(a,{to:"#状态"},{default:s(()=>[i("状态")]),_:1})]),n("li",null,[e(a,{to:"#文件冲突查看"},{default:s(()=>[i("文件冲突查看")]),_:1})]),n("li",null,[e(a,{to:"#git-相关配置"},{default:s(()=>[i("git 相关配置")]),_:1})]),n("li",null,[e(a,{to:"#add"},{default:s(()=>[i("add")]),_:1})]),n("li",null,[e(a,{to:"#commit"},{default:s(()=>[i("commit")]),_:1})]),n("li",null,[e(a,{to:"#舍弃本地修改"},{default:s(()=>[i("舍弃本地修改")]),_:1})]),n("li",null,[e(a,{to:"#回退"},{default:s(()=>[i("回退")]),_:1})]),n("li",null,[e(a,{to:"#分支操作"},{default:s(()=>[i("分支操作")]),_:1})]),n("li",null,[e(a,{to:"#tag-相关操作"},{default:s(()=>[i("tag 相关操作")]),_:1})]),n("li",null,[e(a,{to:"#存储与清理"},{default:s(()=>[i("存储与清理")]),_:1})])])])])]),u])}const v=t(r,[["render",m],["__file","git.html.vue"]]);export{v as default};
