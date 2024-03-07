import{_ as e,p as a,q as n,Q as s,a1 as r}from"./framework-7e1a102e.js";const t={},p=r(`<p>参考项目 https://github.com/WarrenHewitt/webpack-pure</p><h2 id="error" tabindex="-1"><a class="header-anchor" href="#error" aria-hidden="true">#</a> error</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> config <span class="token operator">=</span> <span class="token punctuation">{</span>
   <span class="token literal-property property">devServer</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">client</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token comment">// 解决 WebSocket connection to ‘ws://x.x.x.x:8080/ws‘ failed  注意有可能是本地网络设置限速 3G 这些</span>
            <span class="token literal-property property">webSocketURL</span><span class="token operator">:</span> <span class="token string">&#39;ws://0.0.0.0:8080/ws&#39;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="包" tabindex="-1"><a class="header-anchor" href="#包" aria-hidden="true">#</a> 包</h2><ul><li>5 及以上版本 需要安装 <code>node-polyfill-webpack-plugin</code> 才能使用 node的核心模块 比如：path 等</li></ul><p>http://www.febeacon.com/webpack-plugins-docs-cn/routes/friendly-errors-webpack-plugin.html<br> 开发启动服务成功后的提示</p><p>打包后的文件说明 app.js 入口js 基本就是入口 app.vue 首屏要显示的内容 vendor.js 所有第三方模块(node_modules下的包)（如果使用了懒加载，第三方包就会打到对应的独立包中去，vendor包就小了） manifest.js webpackJsonp的定义及异步加载相关（一般优化时不用管）</p><p>首屏会加载的内容，一般是登录页，会加载 app.js vendor.js manifest.js</p><h2 id="打包" tabindex="-1"><a class="header-anchor" href="#打包" aria-hidden="true">#</a> 打包</h2><h3 id="基于-webpack-vue-cli" tabindex="-1"><a class="header-anchor" href="#基于-webpack-vue-cli" aria-hidden="true">#</a> 基于 webpack （vue-cli）</h3>`,10);function o(c,i){return a(),n("div",null,[s(`
 * @Author: warren
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-11-03 09:28:15
`),p])}const d=e(t,[["render",o],["__file","webpack.html.vue"]]);export{d as default};
