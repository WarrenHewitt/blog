import{_ as n,p as a,q as s,Q as e,a1 as t}from"./framework-7e1a102e.js";const c={},i=t(`<p>-----未完成------</p><h1 id="vue-和-react-的-diff-算法" tabindex="-1"><a class="header-anchor" href="#vue-和-react-的-diff-算法" aria-hidden="true">#</a> vue 和 react 的 diff 算法</h1><p>本质是找出两个对象之间的差异，目的是尽可能复用节点</p><h2 id="vue-diff" tabindex="-1"><a class="header-anchor" href="#vue-diff" aria-hidden="true">#</a> vue diff</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">diff</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">diffAttr</span><span class="token punctuation">(</span>oldNode<span class="token punctuation">.</span>attr<span class="token punctuation">,</span> newNode<span class="token punctuation">.</span>attr<span class="token punctuation">)</span>
    <span class="token function">diffChildren</span><span class="token punctuation">(</span>oldNode<span class="token punctuation">.</span>children<span class="token punctuation">,</span> newNode<span class="token punctuation">.</span>children<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">patchVNode</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5);function p(o,u){return a(),s("div",null,[e(`
 * @LastEditTime: 2022-12-12 16:54:42
`),i])}const l=n(c,[["render",p],["__file","diff.html.vue"]]);export{l as default};
