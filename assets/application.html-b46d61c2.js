import{_ as n,p as s,q as a,Q as e,a1 as t}from"./framework-7e1a102e.js";const l={},c=t(`<h2 id="配置" tabindex="-1"><a class="header-anchor" href="#配置" aria-hidden="true">#</a> 配置</h2><ul><li>后缀名也可以是 properties 但是不推荐</li></ul><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">server</span><span class="token punctuation">:</span>
  <span class="token comment">#配置端口 </span>
  <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">8090</span>

<span class="token comment"># 数据库配置</span>
<span class="token key atrule">spring</span><span class="token punctuation">:</span>
  <span class="token key atrule">application</span><span class="token punctuation">:</span>
    <span class="token comment"># 应用名称</span>
    <span class="token key atrule">name</span><span class="token punctuation">:</span> java<span class="token punctuation">-</span>web
  <span class="token comment"># 配置数据库</span>
  <span class="token key atrule">datasource</span><span class="token punctuation">:</span>
    <span class="token comment"># mysql 8 以上固定位置</span>
    <span class="token key atrule">driver-class-name</span><span class="token punctuation">:</span> com.mysql.cj.jdbc.Driver
    <span class="token comment"># 端口号后面即为数据库名称</span>
    <span class="token key atrule">url</span><span class="token punctuation">:</span> jdbc<span class="token punctuation">:</span>mysql<span class="token punctuation">:</span>//localhost<span class="token punctuation">:</span>3306/hewdatabase
    <span class="token key atrule">username</span><span class="token punctuation">:</span> root
    <span class="token key atrule">password</span><span class="token punctuation">:</span> <span class="token number">12345678</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3);function i(p,o){return s(),a("div",null,[e(`
 * @LastEditTime: 2023-09-07 23:17:18
`),c])}const r=n(l,[["render",i],["__file","application.html.vue"]]);export{r as default};
