import{_ as p,M as t,p as e,q as o,R as n,t as s,N as c,a1 as i}from"./framework-7e1a102e.js";const l={},u=i(`<h1 id="最新版微信分享api-移动web端" tabindex="-1"><a class="header-anchor" href="#最新版微信分享api-移动web端" aria-hidden="true">#</a> 最新版微信分享API(移动web端)</h1><blockquote><p>create-at 2019-02-16</p></blockquote><p>引入微信JS-SDK http://res.wx.qq.com/open/js/jweixin-1.4.0.js (当前最新版本)</p><p>js 相关代码 (移动端实测有效)</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">weChatShare</span><span class="token punctuation">(</span><span class="token parameter">title<span class="token punctuation">,</span>desc</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> link <span class="token operator">=</span> window<span class="token punctuation">.</span>location<span class="token punctuation">.</span>href<span class="token punctuation">;</span> <span class="token comment">// 这里的链接最好使用当前页，用其它链接可能签名验证会出错</span>
    <span class="token keyword">var</span> serverUrl <span class="token operator">=</span> <span class="token function">encodeURIComponent</span><span class="token punctuation">(</span>link<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">var</span> imgUrl <span class="token operator">=</span> <span class="token string">&#39;分享显示的小图&#39;</span><span class="token punctuation">;</span> <span class="token comment">//80*80 实测可以使用其它比列，最好使用小尺寸正方形,域名也要在安全域名之下</span>

    <span class="token comment">// 数据请求，根据项目需求更改</span>
    <span class="token keyword">function</span> <span class="token function">ajaxFn</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">var</span> xhr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">XMLHttpRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

        xhr<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token string">&#39;get&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;这是请求配置项的接口?url=&#39;</span> <span class="token operator">+</span> serverUrl<span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span>
        xhr<span class="token punctuation">.</span><span class="token function-variable function">onreadystatechange</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>xhr<span class="token punctuation">.</span>readyState <span class="token operator">==</span> <span class="token number">4</span> <span class="token operator">&amp;&amp;</span> xhr<span class="token punctuation">.</span>status <span class="token operator">==</span> <span class="token number">200</span> <span class="token operator">||</span> xhr<span class="token punctuation">.</span>status <span class="token operator">==</span> <span class="token number">304</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token function">wxConfig</span><span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>xhr<span class="token punctuation">.</span>responseText<span class="token punctuation">)</span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        xhr<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">function</span> <span class="token function">wxConfig</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        wx<span class="token punctuation">.</span><span class="token function">config</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            <span class="token comment">// 是否开启调试（会返回一些错误原因）</span>
            <span class="token literal-property property">debug</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
            <span class="token comment">// 公众号的唯一标识</span>
            <span class="token literal-property property">appId</span><span class="token operator">:</span> res<span class="token punctuation">.</span>appId<span class="token punctuation">,</span>
            <span class="token comment">// 签名的时间戳</span>
            <span class="token literal-property property">timestamp</span><span class="token operator">:</span> res<span class="token punctuation">.</span>timestamp<span class="token punctuation">,</span>
            <span class="token comment">// 签名的随机串</span>
            <span class="token literal-property property">nonceStr</span><span class="token operator">:</span> res<span class="token punctuation">.</span>nonceStr<span class="token punctuation">,</span>
            <span class="token comment">// 签名</span>
            <span class="token literal-property property">signature</span><span class="token operator">:</span> res<span class="token punctuation">.</span>signature<span class="token punctuation">,</span>
            <span class="token comment">// 需要调用的JS接口</span>
            <span class="token literal-property property">jsApiList</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token string">&#39;updateAppMessageShareData&#39;</span><span class="token punctuation">,</span>
                <span class="token string">&#39;updateTimelineShareData&#39;</span><span class="token punctuation">,</span>
                <span class="token string">&#39;onMenuShareAppMessage&#39;</span><span class="token punctuation">,</span>
                <span class="token string">&#39;onMenuShareTimeline&#39;</span>
            <span class="token punctuation">]</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// config 验证后会执行ready方法</span>
        wx<span class="token punctuation">.</span><span class="token function">ready</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">var</span> shareConfig <span class="token operator">=</span> <span class="token punctuation">{</span>
                <span class="token literal-property property">title</span><span class="token operator">:</span> title<span class="token punctuation">,</span>
                <span class="token literal-property property">desc</span><span class="token operator">:</span> desc<span class="token punctuation">,</span>
                <span class="token literal-property property">link</span><span class="token operator">:</span> link<span class="token punctuation">,</span>
                <span class="token literal-property property">imgUrl</span><span class="token operator">:</span> imgUrl
            <span class="token punctuation">}</span><span class="token punctuation">;</span>

            <span class="token comment">// 目前新版方法存在问题，所以如果有老方法，优先选择老方法</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span>wx<span class="token punctuation">.</span>onMenuShareAppMessage<span class="token punctuation">)</span><span class="token punctuation">{</span>
                wx<span class="token punctuation">.</span><span class="token function">onMenuShareAppMessage</span><span class="token punctuation">(</span>shareConfig<span class="token punctuation">)</span><span class="token punctuation">;</span>
                wx<span class="token punctuation">.</span><span class="token function">onMenuShareTimeline</span><span class="token punctuation">(</span>shareConfig<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                <span class="token comment">// 自定义“分享给朋友”及“分享到QQ”按钮的分享内容</span>
                wx<span class="token punctuation">.</span><span class="token function">updateAppMessageShareData</span><span class="token punctuation">(</span>shareConfig<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token comment">// 朋友圈</span>
                wx<span class="token punctuation">.</span><span class="token function">updateTimelineShareData</span><span class="token punctuation">(</span>shareConfig<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        wx<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// config信息验证失败</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token function">ajaxFn</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token function">weChatShare</span><span class="token punctuation">(</span><span class="token string">&#39;tit&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;des&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>本篇文章只是做了方法整合，详见 https://mp.weixin.qq.com/wiki?t=resource/res_main&amp;id=mp1445241432</p>`,6),r={href:"https://github.com/WarrenHewitt/blog/issues",target:"_blank",rel:"noopener noreferrer"};function k(d,v){const a=t("ExternalLinkIcon");return e(),o("div",null,[u,n("blockquote",null,[n("p",null,[s("欢迎交流 "),n("a",r,[s("Github"),c(a)])])])])}const b=p(l,[["render",k],["__file","weChatShare.html.vue"]]);export{b as default};
