import{_ as s,p as n,q as a,a1 as e}from"./framework-7e1a102e.js";const l={},i=e(`<h2 id="sh" tabindex="-1"><a class="header-anchor" href="#sh" aria-hidden="true">#</a> sh</h2><ul><li>空行报错 3: $&#39;\\r&#39;: 未找到命令； crlf 改为 lf</li></ul><p>实例查看当前项目的根目录下 deploy.sh 文件</p><p>Shell 脚本（shell script），是一种为 shell 编写的脚本程序</p><ul><li><p>windows 下执行 .sh 文件 可以用 git bash 执行 <code>./xx.sh</code> 来运行</p></li><li><p>分号为代码块标识</p></li><li><p>&amp;&amp; 左边返回真后右边代码才会执行</p></li><li><p><code>exit 0</code> 只有 0 表示退出时的状态为成功 其它都为失败</p></li><li><p>echo是回显，即代表回车显示，是自带换行的；而printf只是打印出来，没有换行</p></li><li><p>printf</p></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>%s %c %d %f 都是格式替代符，%s 输出一个字符串，%d 整型输出，%c 输出一个字符，%f 输出实数，以小数形式输出。
%-10s 指一个宽度为 10 个字符（- 表示左对齐，没有则表示右对齐），任何字符都会被显示在 10 个字符宽的字符内，如果不足则自动以空格填充，超过也会将内容全部显示出来。
%-4.2f 指格式化为小数，其中 .2 指保留2位小数。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>http://yangtze736.github.io/%E6%8A%80%E6%9C%AF/2018/05/02/shell-tips/</p><h3 id="命令替换" tabindex="-1"><a class="header-anchor" href="#命令替换" aria-hidden="true">#</a> 命令替换</h3><p>输出结果暂时保存,在适当的地方输出</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 语句中需要执行一些命令，用如下方法包裹</span>
<span class="token punctuation">$(</span><span class="token punctuation">)</span> 和 \`<span class="token variable"><span class="token variable">\`</span>

<span class="token comment"># </span><span class="token variable">\`</span></span>\` 嵌套时需要转义

<span class="token comment"># $() 不是所有的 shell 都能使用</span>

<span class="token comment"># 执行 变量中的命令</span>
<span class="token assign-left variable">command</span><span class="token operator">=</span><span class="token string">&quot;ls&quot;</span>
<span class="token variable">\${command}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><strong>赋值语句两边不能有空格</strong></li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#! /bin/sh   #! 告诉系统该脚本需要什么解释器来执行  可以不跟内容，也可以引用其它解释器路径</span>

<span class="token comment"># 确保脚本抛出遇到的错误</span>
<span class="token builtin class-name">set</span> <span class="token parameter variable">-e</span>

<span class="token comment"># 定义变量可以直接写</span>
<span class="token assign-left variable">name</span><span class="token operator">=</span>hew  右是命令可以有空格 左边不能有空格
<span class="token builtin class-name">echo</span> <span class="token variable">$name</span>  用$获取变量值

<span class="token comment"># 获取工作目录</span>
<span class="token comment"># pwd (print name of current/working directory)</span>
<span class="token assign-left variable">dir</span><span class="token operator">=</span><span class="token string">&quot;<span class="token variable"><span class="token variable">$(</span><span class="token builtin class-name">pwd</span><span class="token variable">)</span></span>&quot;</span>
<span class="token comment"># 返回/e/practice</span>

<span class="token assign-left variable">dir</span><span class="token operator">=</span><span class="token string">&quot;<span class="token variable">$0</span>&quot;</span>
<span class="token comment"># 返回 ./gitT/a.sh</span>

<span class="token assign-left variable">dir</span><span class="token operator">=</span><span class="token string">&quot;<span class="token variable"><span class="token variable">$(</span><span class="token function">dirname</span> <span class="token string">&quot;<span class="token variable">$0</span>&quot;</span><span class="token variable">)</span></span>&quot;</span>
<span class="token comment"># 返回 ./gitT</span>

<span class="token comment"># 获取绝对地址</span>
<span class="token assign-left variable">dir</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token builtin class-name">cd</span> <span class="token string">&quot;<span class="token variable"><span class="token variable">$(</span><span class="token function">dirname</span> <span class="token string">&quot;<span class="token variable">$0</span>&quot;</span><span class="token variable">)</span></span>&quot;</span><span class="token punctuation">;</span><span class="token builtin class-name">pwd</span><span class="token variable">)</span></span>
<span class="token assign-left variable">DIR</span><span class="token operator">=</span><span class="token string">&quot;$( cd &quot;<span class="token variable"><span class="token variable">$(</span> <span class="token function">dirname</span> <span class="token string">&quot;<span class="token variable">\${<span class="token environment constant">BASH_SOURCE</span><span class="token punctuation">[</span>0<span class="token punctuation">]</span>}</span>&quot;</span> <span class="token variable">)</span></span>&quot;</span> <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">pwd</span> <span class="token punctuation">)</span>&quot;

以下两项操作,一般写在 shell 代码逻辑之前
<span class="token builtin class-name">set</span> <span class="token parameter variable">-x</span> 会在执行每一行 shell 脚本时，把执行的内容输出来
<span class="token builtin class-name">set</span> <span class="token parameter variable">-e</span> 会在执行出错时结束程序，就像其他语言中的“抛出异常”一样  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="接收命令行参数" tabindex="-1"><a class="header-anchor" href="#接收命令行参数" aria-hidden="true">#</a> 接收命令行参数</h2><p>执行命令 <code>./some.sh p1 p2</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#! /bin/sh</span>

<span class="token builtin class-name">echo</span> <span class="token string">&quot;文件名&quot;</span> <span class="token variable">$0</span>        <span class="token comment"># 文件名 ./some.sh</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;参数个数&quot;</span> <span class="token variable">$#</span>      <span class="token comment"># 参数个数 2</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;参数1&quot;</span> <span class="token variable">$1</span>         <span class="token comment"># 参数1 p1</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;参数2&quot;</span> <span class="token variable">$2</span>         <span class="token comment"># 参数2 p2</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;所有参数&quot;</span> 【<span class="token variable">$*</span>】   <span class="token comment"># 所有参数 【p1 p2】</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="提交代码的脚本示例" tabindex="-1"><a class="header-anchor" href="#提交代码的脚本示例" aria-hidden="true">#</a> 提交代码的脚本示例</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#! /bin/sh</span>
<span class="token comment"># 确保脚本抛出遇到的错误</span>
<span class="token builtin class-name">set</span> <span class="token parameter variable">-e</span>

<span class="token assign-left variable">method</span><span class="token operator">=</span><span class="token variable">\${1<span class="token operator">:-</span>&quot;pull&quot;}</span> <span class="token comment"># 设置默认参数 注意 $1 的写法，:- 表示为空或未定义  只有 - 没有 : 表示判断未定义</span>

<span class="token comment"># 如下模块类似 try catch</span>
<span class="token punctuation">{</span> 
    <span class="token function">git</span> <span class="token function">add</span> <span class="token parameter variable">-A</span>
    <span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">&#39;regular update&#39;</span>
    <span class="token comment"># 这里后面不要跟语句，否者这个模块的返回就是 true 就不会进入下面的模块执行</span>
<span class="token punctuation">}</span> <span class="token operator">||</span> <span class="token punctuation">{</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&#39;更改已commit 开始push&#39;</span>
    <span class="token function">git</span> push
    <span class="token builtin class-name">echo</span> <span class="token string">&#39;push 完成&#39;</span>
    <span class="token builtin class-name">exit</span> <span class="token number">0</span>
<span class="token punctuation">}</span>

<span class="token builtin class-name">echo</span> <span class="token string">&quot;commit 完成&quot;</span>
<span class="token comment"># 这里注意方括号内部两侧需要空格</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$method</span> <span class="token operator">=</span> <span class="token string">&quot;push&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;git push&quot;</span>
    <span class="token function">git</span> push
<span class="token keyword">else</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;git pull&quot;</span>
    <span class="token function">git</span> pull
<span class="token keyword">fi</span>
<span class="token builtin class-name">echo</span> <span class="token variable">$method</span> <span class="token string">&quot;完成&quot;</span>
<span class="token builtin class-name">exit</span> <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="read-命令" tabindex="-1"><a class="header-anchor" href="#read-命令" aria-hidden="true">#</a> read 命令</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># read var # 将用户输入存入 var 变量</span>

<span class="token comment"># echo 用户输入了： $var</span>

<span class="token comment"># read</span>
<span class="token comment"># echo 用户输入了： $REPLY # linux 默认将用户输入放到此变量</span>

<span class="token comment"># -p  提示信息</span>
<span class="token comment"># -t  输入时间 单位默认秒</span>
<span class="token comment"># -s  隐藏用户输入</span>
<span class="token comment"># -n  输入的长度</span>
<span class="token comment"># read -p &quot;please input name|age:&quot; 参数放后面</span>
<span class="token comment"># echo 用户输入了： $REPLY</span>

<span class="token comment"># 循环读取文件中的每一行</span>
<span class="token comment"># cat ./deploy/test.sh | while read line;</span>
<span class="token comment"># do</span>
<span class="token comment">#     echo $line</span>
<span class="token comment"># done</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,19),t=[i];function p(c,o){return n(),a("div",null,t)}const r=s(l,[["render",p],["__file","shell.html.vue"]]);export{r as default};
