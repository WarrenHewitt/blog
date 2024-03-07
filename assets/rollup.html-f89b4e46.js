import{_ as n,p as s,q as a,a1 as e}from"./framework-7e1a102e.js";const i={},l=e(`<h2 id="rollup" tabindex="-1"><a class="header-anchor" href="#rollup" aria-hidden="true">#</a> rollup</h2><p>打包工具</p><p>安装： 最好是局部安装 <code>yarn add rollup -D</code></p><h3 id="打包" tabindex="-1"><a class="header-anchor" href="#打包" aria-hidden="true">#</a> 打包</h3><p>rollup main.js --file bundle.js --format iife 直接将 main.js 打包成 iife 格式的文件</p><p>rollup --config rollup.config.dev.js 指定不同的配置文件</p><p>如果使用配置文件 必须加 -c 或 --config 后面的文件名称不加就默认使用 rollup.config.js</p><h3 id="配置" tabindex="-1"><a class="header-anchor" href="#配置" aria-hidden="true">#</a> 配置</h3><p><code>rollup.config.js</code></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token comment">// amd – 异步模块定义，用于像RequireJS这样的模块加载器</span>
    <span class="token comment">// cjs – CommonJS，适用于 Node 和 Browserify/Webpack</span>
    <span class="token comment">// esm – 将软件包保存为 ES 模块文件，在现代浏览器中可以通过 &lt;script type=module&gt; 标签引入</span>
    <span class="token comment">// iife – 一个自动执行的功能，适合作为&lt;script&gt;标签。（如果要为应用程序创建一个捆绑包，您可能想要使用它，因为它会使文件大小变小。）</span>
    <span class="token comment">// umd – 通用模块定义，以amd，cjs 和 iife 为一体</span>
    <span class="token comment">// system - SystemJS 加载器格式</span>
    <span class="token punctuation">{</span>
        <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">file</span><span class="token operator">:</span> <span class="token string">&#39;bundle.js&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">format</span><span class="token operator">:</span> <span class="token string">&#39;iife&#39;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10),p=[l];function t(o,c){return s(),a("div",null,p)}const d=n(i,[["render",t],["__file","rollup.html.vue"]]);export{d as default};
