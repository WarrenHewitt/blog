import{_ as e,M as o,p as c,q as i,R as n,N as a,V as t,t as p,a1 as l}from"./framework-7e1a102e.js";const u={},r={class:"table-of-contents"},k=l(`<h1 id="数据请求相关" tabindex="-1"><a class="header-anchor" href="#数据请求相关" aria-hidden="true">#</a> 数据请求相关</h1><h2 id="ajax" tabindex="-1"><a class="header-anchor" href="#ajax" aria-hidden="true">#</a> ajax</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">ajaxFn</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// IE5,6用 new ActiveXObject(&#39;Microsoft.XMLHTTP&#39;);</span>
    <span class="token keyword">var</span> xhr<span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">XMLHttpRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">/* 所有的浏览器都支持该事件 */</span>
    xhr<span class="token punctuation">.</span><span class="token function-variable function">onreadystatechange</span><span class="token operator">=</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token comment">//这个事件函数放在哪里都可</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>xhr<span class="token punctuation">.</span>readyState<span class="token operator">===</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token comment">//针对open方法可以调用并且接受了全部响应数据</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span>xhr<span class="token punctuation">.</span>status<span class="token operator">===</span><span class="token number">200</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token comment">//响应的http状态</span>
                console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>xhr<span class="token punctuation">.</span>responseText<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token comment">/* 可以用onload替代上面的onreadystatechange */</span>
    xhr<span class="token punctuation">.</span><span class="token function-variable function">onload</span><span class="token operator">=</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token comment">// 处理取回的数据(在 xhr 中找到)  可以打印 xhr  看看有哪些值</span>
    <span class="token punctuation">}</span>
    xhr<span class="token punctuation">.</span>timeout <span class="token operator">=</span> <span class="token number">2000</span><span class="token punctuation">;</span> <span class="token comment">// 超时时间，单位是毫秒(设置的超时值，在请求头中不显示)</span>
    
    <span class="token comment">/* @des get方式 */</span>
    <span class="token comment">/* HTTP 协议 不要求也不禁止 GET 请求带 body。
     大多数支持 但是浏览器会抛错 
    */</span>
    xhr<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token string">&#39;get&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;https://aa.cc.com/api&#39;</span><span class="token punctuation">,</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true表示异步,当设置为同步时，一旦发出，后续的所有代码不再执行，等待接口返回</span>
    xhr<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//将请求发送到服务器</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token string">&#39;如果不需要这次请求的值了&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        xhr<span class="token punctuation">.</span><span class="token function">abort</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">/* @des post方式 */</span>
    xhr<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token string">&#39;post&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;.com/api&#39;</span><span class="token punctuation">,</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    xhr<span class="token punctuation">.</span><span class="token function">setRequestHeader</span><span class="token punctuation">(</span><span class="token string">&#39;Content-type&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;application/json&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
    xhr<span class="token punctuation">.</span><span class="token function">setRequestHeader</span><span class="token punctuation">(</span><span class="token string">&#39;Auther&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;hewitt&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
    xhr<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">/* @des 设置返回值的格式 */</span>
    <span class="token comment">// xhr.responseType = &#39;json&#39;;</span>
<span class="token punctuation">}</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="传递-formdata-数据" tabindex="-1"><a class="header-anchor" href="#传递-formdata-数据" aria-hidden="true">#</a> 传递 formData 数据</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">ajaxFn</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> xhr<span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">XMLHttpRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    xhr<span class="token punctuation">.</span><span class="token function-variable function">onload</span><span class="token operator">=</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token comment">// 处理取回的数据(在 xhr.response 中找到)</span>
    <span class="token punctuation">}</span>
    xhr<span class="token punctuation">.</span>timeout <span class="token operator">=</span> <span class="token number">10000</span><span class="token punctuation">;</span>
    xhr<span class="token punctuation">.</span>responseType <span class="token operator">=</span> <span class="token string">&#39;json&#39;</span><span class="token punctuation">;</span>
    xhr<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token string">&#39;post&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;xxxxx.com&#39;</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// xhr.setRequestHeader(&#39;Content-type&#39;,&#39;multipart/form-data&#39;); // 这里不要设置 content-type 由浏览器自动匹配  </span>
    <span class="token keyword">const</span> form <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FormData</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    form<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">&#39;username&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;xx&#39;</span><span class="token punctuation">)</span>
    form<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">&#39;password&#39;</span><span class="token punctuation">,</span> <span class="token number">123</span><span class="token punctuation">)</span>
    xhr<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span>form<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>status 200表示成功，304表示 资源没有修改可以直接使用浏览器缓存</p><p>必须在调用open()方法之后且调用send()方法之前调用setRequestHeader()</p><p>用原生 ajax 提交 FormData 采用 post 不用加 contentType 浏览器会自动添加，主要是为了自动设置 boundary（用于分割上传的数据字段，就是类似于分隔符）</p><h2 id="fetch" tabindex="-1"><a class="header-anchor" href="#fetch" aria-hidden="true">#</a> fetch</h2><p>是一个现代的概念，等同于 XMLHttpRequest 核心在于对 HTTP 接口的抽象，包括 Request、Response、Headers 和 Body</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">&#39;http://localhost:1025/121&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
        <span class="token comment">/* @des 凭证 */</span>
        <span class="token literal-property property">credentials</span><span class="token operator">:</span><span class="token string">&#39;include&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">headers</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token string-property property">&#39;Content-Type&#39;</span><span class="token operator">:</span> <span class="token string">&#39;image/jpeg|application/json&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> 
        <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">&#39;get&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">mode</span><span class="token operator">:</span> <span class="token string">&quot;cors&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">response</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">/* @des 必须先返回一个数据格式*/</span>
        <span class="token comment">// response.formData() || response.json()</span>
        <span class="token keyword">return</span> response<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// 包含cookie:&quot;omit&quot;（默认）,&quot;same-origin&quot;以及&quot;include&quot;</span>
<span class="token comment">// 默认情况下 fetch不会接受或者发送cookies</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="将对象转换为query-string所需格式" tabindex="-1"><a class="header-anchor" href="#将对象转换为query-string所需格式" aria-hidden="true">#</a> 将对象转换为query String所需格式</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">objectToQueryString</span><span class="token punctuation">(</span><span class="token parameter">obj</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">key</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>obj<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">)</span> arr<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>key<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">=</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>obj<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> arr<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&#39;&amp;&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="querystring-转换为对象-a-1-b-2" tabindex="-1"><a class="header-anchor" href="#querystring-转换为对象-a-1-b-2" aria-hidden="true">#</a> queryString 转换为对象 { a: 1, b: 2 }</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@des</span> 获取 queryString 转换为对象 <span class="token punctuation">{</span> a: 1, b: 2 <span class="token punctuation">}</span>
 */</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">queryStringToObj</span> <span class="token punctuation">(</span><span class="token parameter">str</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    str <span class="token operator">=</span> str <span class="token operator">||</span> <span class="token string">&#39;xxxx/xx?a=1&amp;b=2&#39;</span>

    <span class="token keyword">const</span> regExp <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">(?:\\?|&amp;)([^&amp;]*)</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span>
    <span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token string">&#39;&#39;</span>
    <span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

    <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>result <span class="token operator">=</span> regExp<span class="token punctuation">.</span><span class="token function">exec</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> kv <span class="token operator">=</span> result<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&#39;=&#39;</span><span class="token punctuation">)</span>
        obj<span class="token punctuation">[</span>kv<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">=</span> kv<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> obj
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,15);function d(v,m){const s=o("router-link");return c(),i("div",null,[n("nav",r,[n("ul",null,[n("li",null,[a(s,{to:"#ajax"},{default:t(()=>[p("ajax")]),_:1}),n("ul",null,[n("li",null,[a(s,{to:"#传递-formdata-数据"},{default:t(()=>[p("传递 formData 数据")]),_:1})])])]),n("li",null,[a(s,{to:"#fetch"},{default:t(()=>[p("fetch")]),_:1})]),n("li",null,[a(s,{to:"#将对象转换为query-string所需格式"},{default:t(()=>[p("将对象转换为query String所需格式")]),_:1})]),n("li",null,[a(s,{to:"#querystring-转换为对象-a-1-b-2"},{default:t(()=>[p("queryString 转换为对象 { a: 1, b: 2 }")]),_:1})])])]),k])}const h=e(u,[["render",d],["__file","dataRequest.html.vue"]]);export{h as default};
