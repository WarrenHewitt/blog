import{_ as e,p as i,q as n,a1 as s}from"./framework-7e1a102e.js";const l={},t=s(`<h2 id="hexo-搭建博客过程" tabindex="-1"><a class="header-anchor" href="#hexo-搭建博客过程" aria-hidden="true">#</a> Hexo 搭建博客过程</h2><p>前置条件：有github账号，会创建github page；了解node；了解git；</p><ol><li><p>安装 【参考 <code>https://hexo.io/zh-cn/docs/</code>】</p><ul><li>先安装 git 与 node</li><li>不用先全局安装 hexo , 直接初始化项目 <code>npx hexo init anyName</code> 进入初始化的文件, <code>npm i</code> 安装包</li></ul></li><li><p>查看 package.json 中的scripts下的命令，运行 <code>npm run server</code> 即可在浏览器查看默认内容与主题</p></li><li><p>配置根目录下的 <code>_config.yml</code>， 注意修改添加如下内容</p></li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>url: https://warrenhewitt.github.io/blog/ 这个地址是创建的 github page 地址
root: /blog/ 要加上该二级目录

deploy:
  type: git
  repo: https://github.com/WarrenHewitt/blog.git 当前hexo生成的内容需要上传到的github仓库地址，即上面创建的github page的仓库地址
  branch: master
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li>配置本地git 用户信息</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git config --global user.name &#39;username&#39;
git config --global user.email &#39;email&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="5"><li>生成SSH</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1. \`cd ~/.ssh\` : 查看用户根目录是否有 ssh 文件

2. \`ssh-keygen\` ：生成 密钥 SSH key

3. github创建SSH在setting中，title随意填即可，key值来源查看第四步

4. 第二步中会生成一个文件，并会打印文件地址(一般是C:\\Users\\Administrator\\.ssh\\id_rsa.pub)，其内容为github创建SSH的key所需内容（或是使用cat ~/.ssh/id_rsa.pub将文件内容打印到命令行，复制即可）

5. 测试是否与github连接正常 ssh -T git@github.com  出现 Hi .... 即成功
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="6"><li><p>运行 <code>npm run deploy</code> 目的是将hexo生成的内容推送到指定github仓库【参考：https://hexo.io/zh-cn/docs/one-command-deployment 】</p></li><li><p>打开创建的 github page，查看效果即可</p></li></ol>`,9),d=[t];function a(o,c){return i(),n("div",null,d)}const u=e(l,[["render",a],["__file","githubHexo.html.vue"]]);export{u as default};
