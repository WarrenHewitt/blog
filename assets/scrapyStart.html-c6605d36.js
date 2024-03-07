import{_ as i,M as o,p as l,q as c,R as n,N as a,V as e,t as s,a1 as r}from"./framework-7e1a102e.js";const u={},d={class:"table-of-contents"},k=n("p",null,"[toc]",-1),m=n("h1",{id:"scrapy-自学入门demo分享",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#scrapy-自学入门demo分享","aria-hidden":"true"},"#"),s(" scrapy 自学入门demo分享")],-1),h=n("blockquote",null,[n("p",null,"本文基于python 3.7.0，win10平台； 2018-08")],-1),v={href:"https://github.com/WarrenHewitt/python-scrapy",target:"_blank",rel:"noopener noreferrer"},y=r(`<h1 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h1><h2 id="安装python" tabindex="-1"><a class="header-anchor" href="#安装python" aria-hidden="true">#</a> 安装python</h2><ol><li>官网下载 https://www.python.org/</li><li>注意环境变量是否配置成功</li></ol><h2 id="安装scrapy" tabindex="-1"><a class="header-anchor" href="#安装scrapy" aria-hidden="true">#</a> 安装scrapy</h2><blockquote><p>为了安装顺利，请备好梯子</p></blockquote><ul><li>pip install Scrapy</li></ul><p><strong>安装过程中注意以下报错信息：</strong></p><p><strong>Microsoft Visual C++ 14.0 is required. Get it with &quot;Microsoft Visual C++ Build Tools&quot;</strong></p><p>解决办法：</p><ol><li>https://www.lfd.uci.edu/~gohlke/pythonlibs/#twisted 下载对应版本twisted的whl文件</li><li>cp：表示python版本</li><li>amd64：表示64位</li><li>下载后在文件目录下执行： pip install Twisted-18.7.0-cp37-cp37m-win_amd64.whl(文件名)</li></ol><h1 id="创建项目" tabindex="-1"><a class="header-anchor" href="#创建项目" aria-hidden="true">#</a> 创建项目</h1><ul><li>创建scrapy：scrapy startproject youName</li><li>创建spider：<code>scrapy genspider &lt;name&gt; &lt;domain&gt;</code> // 在项目跟目录执行</li></ul><h2 id="配置settings-py文件" tabindex="-1"><a class="header-anchor" href="#配置settings-py文件" aria-hidden="true">#</a> 配置settings.py文件</h2><ol><li>如果抓取的内容包含中文可配置：FEED_EXPORT_ENCODING = &#39;utf-8&#39;</li><li>报错误信息403：把USER_AGENT加上（可在网站请求头信息中查看）</li></ol><h2 id="编写items-py文件" tabindex="-1"><a class="header-anchor" href="#编写items-py文件" aria-hidden="true">#</a> 编写items.py文件</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> scrapy

<span class="token keyword">class</span> <span class="token class-name">NovelItem</span><span class="token punctuation">(</span>scrapy<span class="token punctuation">.</span>Item<span class="token punctuation">)</span><span class="token punctuation">:</span>
    title <span class="token operator">=</span> scrapy<span class="token punctuation">.</span>Field<span class="token punctuation">(</span><span class="token punctuation">)</span>
    content <span class="token operator">=</span> scrapy<span class="token punctuation">.</span>Field<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这些即你需要保存的字段名</p><h2 id="编写spider" tabindex="-1"><a class="header-anchor" href="#编写spider" aria-hidden="true">#</a> 编写spider</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> scrapy

<span class="token comment"># 引入自定义的items</span>
<span class="token keyword">from</span> myTest<span class="token punctuation">.</span>items <span class="token keyword">import</span> NovelItem

<span class="token comment"># # 继承scrapy.Spider</span>
<span class="token keyword">class</span> <span class="token class-name">NovelSpider</span><span class="token punctuation">(</span>scrapy<span class="token punctuation">.</span>Spider<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token comment"># 爬虫名</span>
    name <span class="token operator">=</span> <span class="token string">&#39;novel_spider&#39;</span>
    <span class="token comment"># 允许的域名</span>
    allowed_domains <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;http://www.danmeila.com&#39;</span><span class="token punctuation">]</span>
    <span class="token comment"># 入口url 扔到调度器里面去</span>
    start_urls <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;http://www.danmeila.com/chapter/20180406/29649.html&#39;</span><span class="token punctuation">]</span>


    <span class="token keyword">def</span> <span class="token function">parse</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> response<span class="token punctuation">)</span><span class="token punctuation">:</span>
        movieList <span class="token operator">=</span> response<span class="token punctuation">.</span>xpath<span class="token punctuation">(</span><span class="token string">&#39;//*[@id=&quot;container&quot;]/div[3]/div[2]/div[2]/div/div/ul/li&#39;</span><span class="token punctuation">)</span>
        novelContent <span class="token operator">=</span> NovelItem<span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">for</span> item <span class="token keyword">in</span> movieList<span class="token punctuation">:</span>
            u <span class="token operator">=</span> <span class="token string">&#39;http://www.danmeila.com&#39;</span> <span class="token operator">+</span> item<span class="token punctuation">.</span>xpath<span class="token punctuation">(</span><span class="token string">&#39;.//a/@href&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>extract_first<span class="token punctuation">(</span><span class="token punctuation">)</span>
            
            <span class="token keyword">yield</span> scrapy<span class="token punctuation">.</span>Request<span class="token punctuation">(</span>u<span class="token punctuation">,</span> callback<span class="token operator">=</span> self<span class="token punctuation">.</span>content_a<span class="token punctuation">,</span> meta<span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token string">&#39;nc&#39;</span><span class="token punctuation">:</span> novelContent <span class="token punctuation">}</span><span class="token punctuation">,</span> dont_filter <span class="token operator">=</span> <span class="token boolean">True</span><span class="token punctuation">)</span>
            <span class="token comment"># 放到管道里否则 pipeline获取不到</span>
            <span class="token comment"># 如果你发现拿到的内容一直为空，注意是否被过滤了，即dont_filter没有设置</span>


    <span class="token keyword">def</span> <span class="token function">content_a</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> response<span class="token punctuation">)</span><span class="token punctuation">:</span>
        novelContent <span class="token operator">=</span> response<span class="token punctuation">.</span>meta<span class="token punctuation">[</span><span class="token string">&#39;nc&#39;</span><span class="token punctuation">]</span>
        novelContent<span class="token punctuation">[</span><span class="token string">&#39;title&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> response<span class="token punctuation">.</span>xpath<span class="token punctuation">(</span><span class="token string">&#39;//*[@id=&quot;J_article&quot;]/div[1]/h1/text()&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>extract_first<span class="token punctuation">(</span><span class="token punctuation">)</span>

        <span class="token keyword">yield</span> novelContent
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意以下几点：</p><ul><li>采用xpath编写，在浏览器中可以直接查看元素，找到要爬取内容的标签，右键选copy xpath</li><li>extract_first()的使用；text() 获取文本；@属性名 获取属性值</li><li>在父节点下使用xpath路径前要加./</li><li>去除换行空格用 xpath(&#39;normalize-space(&#39;.//div/text()&#39;)&#39;)</li></ul><h2 id="执行" tabindex="-1"><a class="header-anchor" href="#执行" aria-hidden="true">#</a> 执行</h2><p>导出为json： scrapy crawl your-spider-name -o test.json</p><p>如果出现报错信息：</p><ul><li>async语法错误，把用到该名称作为参数的文件全部作修改 把这个参数名改为其它即可</li><li>报错 No module named &#39;win32api&#39;： 到https://pypi.org/project/pypiwin32/#files（下载文件pypiwin32-223-py3-none-any.whl 执行 pip install pypiwin32-223-py3-none-any.whl ）</li></ul>`,25),b={href:"https://github.com/WarrenHewitt/blog/issues",target:"_blank",rel:"noopener noreferrer"};function _(f,w){const t=o("router-link"),p=o("ExternalLinkIcon");return l(),c("div",null,[n("nav",d,[n("ul",null,[n("li",null,[a(t,{to:"#安装python"},{default:e(()=>[s("安装python")]),_:1})]),n("li",null,[a(t,{to:"#安装scrapy"},{default:e(()=>[s("安装scrapy")]),_:1})]),n("li",null,[a(t,{to:"#配置settings-py文件"},{default:e(()=>[s("配置settings.py文件")]),_:1})]),n("li",null,[a(t,{to:"#编写items-py文件"},{default:e(()=>[s("编写items.py文件")]),_:1})]),n("li",null,[a(t,{to:"#编写spider"},{default:e(()=>[s("编写spider")]),_:1})]),n("li",null,[a(t,{to:"#执行"},{default:e(()=>[s("执行")]),_:1})])])]),k,m,h,n("blockquote",null,[n("p",null,[s("完整项目代码："),n("a",v,[s("https://github.com/WarrenHewitt/python-scrapy"),a(p)])])]),y,n("blockquote",null,[n("p",null,[s("欢迎交流 "),n("a",b,[s("Github"),a(p)])])])])}const x=i(u,[["render",_],["__file","scrapyStart.html.vue"]]);export{x as default};
