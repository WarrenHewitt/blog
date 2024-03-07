import{_ as t,M as e,p,q as o,R as n,t as s,N as c,a1 as i}from"./framework-7e1a102e.js";const l={},u=i(`<blockquote><p>2020-02-19 | chrome 79.0.3945.130 测试无问题 未做兼容测试</p></blockquote><p>原理为调用 <code>window.print()</code> 方法，但是该方法只能对当前页面全部打印，所以有了以下方案来解决局部打印</p><ul><li>背景打印问题： 元素添加 css属性 <code>-webkit-print-color-adjust:exact;</code> 或是用图片</li></ul><ol><li>利用 iframe 将需要打印的元素和样式注入 再调用打印</li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 示例代码</span>
<span class="token keyword">function</span> <span class="token function">print</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> ifElement <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;ifId&#39;</span><span class="token punctuation">)</span>
    <span class="token keyword">const</span> <span class="token function-variable function">addHtmlPrint</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> content <span class="token operator">=</span> ifElement<span class="token punctuation">.</span>contentWindow <span class="token operator">||</span> ifElement<span class="token punctuation">.</span>contentDocument
        content<span class="token punctuation">.</span>document<span class="token punctuation">.</span>body<span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>detailTable
        <span class="token keyword">const</span> styleEle <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;style&#39;</span><span class="token punctuation">)</span>
        <span class="token comment">/* 
          * 去掉打印时的页头和页脚
        */</span>
        styleEle<span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> <span class="token string">&#39;@media print {@page { margin: 0mm 10mm; }  添加其它样式}&#39;</span>
        content<span class="token punctuation">.</span>document<span class="token punctuation">.</span><span class="token function">getElementsByTagName</span><span class="token punctuation">(</span><span class="token string">&#39;head&#39;</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>styleEle<span class="token punctuation">)</span>

        <span class="token comment">/* 保障 iframe 中资源加载完成，图片要用 img 形式引入 */</span>
        <span class="token comment">/* 如果没有动态加载新内容 或有兼容问题，可以去掉 onload 直接调用 print */</span>
        ifElement<span class="token punctuation">.</span><span class="token function-variable function">onload</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
            content<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getDetailTable</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>ifElement<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 删除的原因是，复用会影响，插入iframe中的onload事件</span>
        document<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">removeChild</span><span class="token punctuation">(</span>ifmEle<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    ifElement <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;iframe&#39;</span><span class="token punctuation">)</span>
    ifElement<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token string">&#39;id&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;ifId&#39;</span><span class="token punctuation">)</span>
    ifElement<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token string">&#39;style&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;display:none&#39;</span><span class="token punctuation">)</span>
    document<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>ifElement<span class="token punctuation">)</span>

    <span class="token function">addHtmlPrint</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">/* 当连续打印时需要做延时处理，防止后一个覆盖前一个打印 */</span>
<span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span>
<span class="token keyword">const</span> <span class="token function-variable function">executeFn</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    list<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    i<span class="token operator">++</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">&lt;</span> list<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
            <span class="token function">executeFn</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">2000</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token function">executeFn</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>利用 @media print，在当前页面设置打印操作时需要隐藏的元素</li></ol><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token atrule"><span class="token rule">@media</span> print</span><span class="token punctuation">{</span>
    <span class="token comment">/* 这里将不需要打印的元素设置为不显示 */</span>
    <span class="token selector">.hidden-element</span><span class="token punctuation">{</span>
        <span class="token property">display</span><span class="token punctuation">:</span>none<span class="token punctuation">;</span>
        <span class="token comment">/* visibility:hidden; */</span>
    <span class="token punctuation">}</span>
    <span class="token comment">/*纸张设置为宽1200px 高800px*/</span>
    <span class="token atrule"><span class="token rule">@page</span></span><span class="token punctuation">{</span>
        <span class="token property">size</span><span class="token punctuation">:</span>1200px 800px<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><ul><li><p><code>&lt;link href=&quot;/example.css&quot; media=&quot;print&quot; rel=&quot;stylesheet&quot; /&gt;</code> 标注打印时才会采用的样式</p></li><li><p>监听打印事件 <code>window.addEventListener(&#39;beforeprint|| afterprint&#39;, ()=&gt; {});</code></p></li></ul><p>最后推荐一个插件：<code>https://printjs.crabbly.com/#documentation</code></p>`,10),d={href:"https://github.com/WarrenHewitt/blog/issues",target:"_blank",rel:"noopener noreferrer"};function r(k,m){const a=e("ExternalLinkIcon");return p(),o("div",null,[u,n("blockquote",null,[n("p",null,[s("欢迎交流 "),n("a",d,[s("Github"),c(a)])])])])}const b=t(l,[["render",r],["__file","print.html.vue"]]);export{b as default};
