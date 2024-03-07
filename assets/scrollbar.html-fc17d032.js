import{_ as t,M as p,p as e,q as c,R as n,t as s,N as o,a1 as l}from"./framework-7e1a102e.js";const i={},u=n("h1",{id:"scrollbar",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#scrollbar","aria-hidden":"true"},"#"),s(" scrollbar")],-1),r={href:"https://codepen.io/Hewitt/pen/dradRr",target:"_blank",rel:"noopener noreferrer"},k=l(`<p>最简示例</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">::-webkit-scrollbar</span> <span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 5px<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 5px<span class="token punctuation">;</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> #F1F1F1<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">::-webkit-scrollbar-thumb:vertical,::-webkit-scrollbar-thumb:horizontal</span> <span class="token punctuation">{</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> #C1C1C1<span class="token punctuation">;</span>
    <span class="token property">border</span><span class="token punctuation">:</span>1px solid #C1C1C1<span class="token punctuation">;</span>
    <span class="token property">border-radius</span><span class="token punctuation">:</span>5px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>一个可直接使用的示例</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">::-webkit-scrollbar</span> <span class="token punctuation">{</span>
    <span class="token comment">/* Y轴方向滚动条的宽度 */</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 4px<span class="token punctuation">;</span>
    <span class="token comment">/* X轴方向滚动条的高度 */</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 4px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* 滑动条前后部分的样式（默认是箭头），可设置背景图片 */</span>
<span class="token selector">::-webkit-scrollbar-button:vertical:increment</span> <span class="token punctuation">{</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 0px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">::-webkit-scrollbar-button:vertical:decrement</span> <span class="token punctuation">{</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 0px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">::-webkit-scrollbar-button:horizontal:increment</span> <span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 0px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">::-webkit-scrollbar-button:horizontal:decrement</span> <span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 0px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* 滚动槽的颜色v */</span>
<span class="token selector">::-webkit-scrollbar-track-piece</span> <span class="token punctuation">{</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> #e2e2e2<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* 滑块的颜色   */</span>
<span class="token selector">::-webkit-scrollbar-thumb:vertical</span> <span class="token punctuation">{</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> #adadad<span class="token punctuation">;</span>
    <span class="token property">border</span><span class="token punctuation">:</span> 1px solid #adadad<span class="token punctuation">;</span>
    <span class="token property">border-radius</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">::-webkit-scrollbar-thumb:horizontal</span> <span class="token punctuation">{</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> #adadad<span class="token punctuation">;</span>
    <span class="token property">border</span><span class="token punctuation">:</span> 1px solid #adadad<span class="token punctuation">;</span>
    <span class="token property">border-radius</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
    <span class="token selector">h3</span><span class="token punctuation">{</span>
        <span class="token property">padding</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
        <span class="token property">color</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span>
        <span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token function">rgb</span><span class="token punctuation">(</span>5<span class="token punctuation">,</span> 196<span class="token punctuation">,</span> 148<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">h4</span><span class="token punctuation">{</span>
        <span class="token property">padding</span><span class="token punctuation">:</span> 5px<span class="token punctuation">;</span>
        <span class="token property">color</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span>
        <span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token function">rgb</span><span class="token punctuation">(</span>209<span class="token punctuation">,</span> 165<span class="token punctuation">,</span> 22<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">.div</span><span class="token punctuation">{</span>
        <span class="token property">width</span><span class="token punctuation">:</span> 500px<span class="token punctuation">;</span>
        <span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
        <span class="token property">overflow-y</span><span class="token punctuation">:</span> scroll<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">.div div</span><span class="token punctuation">{</span>
        <span class="token property">width</span><span class="token punctuation">:</span> 600px<span class="token punctuation">;</span>
        <span class="token property">height</span><span class="token punctuation">:</span> 400px<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">.ie_div</span><span class="token punctuation">{</span>
        <span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token function">rgb</span><span class="token punctuation">(</span>34<span class="token punctuation">,</span> 137<span class="token punctuation">,</span> 255<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">/* 滚动条凸出部分的颜色 */</span>
        <span class="token property">scrollbar-face-color</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span>
        <span class="token comment">/* 滚动条空白部分的颜色 */</span>
        <span class="token property">scrollbar-highlight-color</span><span class="token punctuation">:</span> yellow<span class="token punctuation">;</span>
        <span class="token comment">/* 立体滚动条阴影的颜色 */</span>
        <span class="token property">scrollbar-shadow-color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
        <span class="token comment">/* 滚动条亮边的颜色 */</span>
        <span class="token property">scrollbar-3dlight-color</span><span class="token punctuation">:</span> green<span class="token punctuation">;</span>
        <span class="token comment">/* 上下按钮上三角箭头的颜色 */</span>
        <span class="token property">scrollbar-arrow-color</span><span class="token punctuation">:</span><span class="token function">rgb</span><span class="token punctuation">(</span>125<span class="token punctuation">,</span> 9<span class="token punctuation">,</span> 192<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">/* 滚动条的背景颜色 */</span>
        <span class="token property">scrollbar-track-color</span><span class="token punctuation">:</span> <span class="token function">rgb</span><span class="token punctuation">(</span>7<span class="token punctuation">,</span> 214<span class="token punctuation">,</span> 169<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">/* 滚动条强阴影的颜色 */</span>
        <span class="token property">scrollbar-darkshadow-color</span><span class="token punctuation">:</span> <span class="token function">rgb</span><span class="token punctuation">(</span>7<span class="token punctuation">,</span> 214<span class="token punctuation">,</span> 35<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">/* 滚动条的基本颜色 */</span>
        <span class="token property">scrollbar-base-color</span><span class="token punctuation">:</span> <span class="token function">rgb</span><span class="token punctuation">(</span>187<span class="token punctuation">,</span> 88<span class="token punctuation">,</span> 49<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">.webkit_div</span><span class="token punctuation">{</span>
        <span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token function">rgb</span><span class="token punctuation">(</span>46<span class="token punctuation">,</span> 245<span class="token punctuation">,</span> 245<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">.webkit_div::-webkit-scrollbar</span> <span class="token punctuation">{</span>  
        <span class="token comment">/* // Y轴方向滚动条的宽度 */</span>
        <span class="token property">width</span><span class="token punctuation">:</span> 14px<span class="token punctuation">;</span> 
        <span class="token comment">/* // X轴方向滚动条的高度 */</span>
        <span class="token property">height</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
        <span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token function">rgb</span><span class="token punctuation">(</span>194<span class="token punctuation">,</span> 194<span class="token punctuation">,</span> 194<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">/* 滑动条前后部分的样式（默认是箭头），可设置背景图片 */</span>
    <span class="token selector">.webkit_div::-webkit-scrollbar-button:vertical:increment</span>  <span class="token punctuation">{</span>  
        <span class="token property">background-color</span><span class="token punctuation">:</span>red<span class="token punctuation">;</span>  
        <span class="token property">height</span><span class="token punctuation">:</span>15px<span class="token punctuation">;</span>  
    <span class="token punctuation">}</span>
    <span class="token selector">.webkit_div::-webkit-scrollbar-button:horizontal:decrement</span>  <span class="token punctuation">{</span>  
        <span class="token property">background-color</span><span class="token punctuation">:</span>red<span class="token punctuation">;</span>  
        <span class="token property">height</span><span class="token punctuation">:</span>15px<span class="token punctuation">;</span>  
    <span class="token punctuation">}</span>
    <span class="token comment">/* 滚动槽的颜色v */</span>
    <span class="token selector">.webkit_div::-webkit-scrollbar-track-piece</span> <span class="token punctuation">{</span>  
        <span class="token property">background-color</span><span class="token punctuation">:</span>green<span class="token punctuation">;</span>  
    <span class="token punctuation">}</span> 
    <span class="token comment">/* 滑块的颜色   */</span>
    <span class="token selector">.webkit_div::-webkit-scrollbar-thumb:vertical</span> <span class="token punctuation">{</span>  
        <span class="token property">height</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span>  
        <span class="token property">background-color</span><span class="token punctuation">:</span> #9cdbff<span class="token punctuation">;</span>  
        <span class="token property">border</span><span class="token punctuation">:</span>1px solid #7bcfff<span class="token punctuation">;</span>  
        <span class="token property">border-radius</span><span class="token punctuation">:</span>10px<span class="token punctuation">;</span>  
    <span class="token punctuation">}</span> 
    <span class="token selector">.webkit_div::-webkit-scrollbar-thumb:horizontal</span> <span class="token punctuation">{</span>  
        <span class="token property">height</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span>  
        <span class="token property">background-color</span><span class="token punctuation">:</span> #9cdbff<span class="token punctuation">;</span>  
        <span class="token property">border</span><span class="token punctuation">:</span>1px solid #7bcfff<span class="token punctuation">;</span>  
        <span class="token property">border-radius</span><span class="token punctuation">:</span>10px<span class="token punctuation">;</span>  
    <span class="token punctuation">}</span> 
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span><span class="token punctuation">&gt;</span></span>自定义滑动条 请打开对应浏览器查看效果（Edge 和 Firefox 需要插件 本示例未实现） 参考（https://webkit.org/blog/363/styling-scrollbars/）<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h4</span><span class="token punctuation">&gt;</span></span>老版本ie,非Edge，并且已被废弃<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h4</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>div ie_div<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h4</span><span class="token punctuation">&gt;</span></span>webkit内核<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h4</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>div webkit_div<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5);function d(v,b){const a=p("ExternalLinkIcon");return e(),c("div",null,[u,n("p",null,[n("a",r,[s("codepen demo"),o(a)])]),k])}const g=t(i,[["render",d],["__file","scrollbar.html.vue"]]);export{g as default};
