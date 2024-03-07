import{_ as t,M as d,p as c,q as l,Q as o,R as n,N as s,V as a,t as i,a1 as p}from"./framework-7e1a102e.js";const r={},u={class:"table-of-contents"},v=p(`<p>[toc]</p><h1 id="位运算" tabindex="-1"><a class="header-anchor" href="#位运算" aria-hidden="true">#</a> 位运算</h1><p>比特位Bit(b),</p><p>字节Byte(B), 千字节Kilobytes(KB), 兆字节 Megabytes(MB), 吉字节Gigabyte(GB), 太字节terabyte(TB)</p><p>utf-8(utf-8就是Unicode最重要的实现方式之一)中</p><p>一个英文字母占一个字节</p><p>一个中文字母占三个字节</p><ul><li><p>1字节(Byte) = 8位(bit)二进制(0000 0000)；1字节=1B， 1KB = 1024Byte = 1024*8 bit</p></li><li><p>负数以补码的形式存储</p></li><li><p><code>0x</code> 表示整型数值 16进制 <code>0x1a === 16</code></p></li><li><p><code>\\x</code> 字符型常量 16进制 <code>\\x3f === ?</code> <code>/\\x3f/.test(&#39;?&#39;)</code> 返回true ?的ASCII为63</p></li><li><p><code>\\0</code> 字符型常量 8进制 <code>/\\077/.test(&#39;?&#39;)</code> 返回true</p></li></ul><h2 id="原码-反码-补码" tabindex="-1"><a class="header-anchor" href="#原码-反码-补码" aria-hidden="true">#</a> 原码 反码 补码</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>用8位二进制表示，最高位就是符号位所以表示的范围就为：[1111 1111, 0111 1111],即[-127, 127]

正数为0, 负数为1

原码：符号位加上值的绝对值 

反码：正数的反码是其本身； 负数的反码是在其原码的基础上, 符号位不变，其余各位取反

补码：正数的补码就是其本身；负数的补码是在其原码的基础上, 符号位不变, 其余各位取反, 最后+1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="按位非运算-与" tabindex="-1"><a class="header-anchor" href="#按位非运算-与" aria-hidden="true">#</a> ~ (按位非运算) 与 ~~</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token operator">~</span>x  <span class="token comment">// 等同于 -(x+1)</span>
<span class="token operator">~</span><span class="token operator">~</span>x <span class="token comment">// 等同于 -(-(x+1)+1)</span>
<span class="token comment">// 应用： 判断条件结果相同; 后者结果为0 表示没有匹配到,有匹配值返回负数，负数也是true</span>
<span class="token keyword">if</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> 
<span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">~</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>  
<span class="token comment">// 向下取整 </span>
<span class="token operator">~</span><span class="token operator">~</span><span class="token number">1.23</span> <span class="token comment">// 1  比 parseInt 效率相对较高</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="逻辑位运算" tabindex="-1"><a class="header-anchor" href="#逻辑位运算" aria-hidden="true">#</a> 逻辑位运算：</h2><p>&amp;(与) 同为1 则为1 否则为0 <code>5&amp;1 === 101&amp;001 =&gt; 1</code> |(或) 有一个为 1 则为1 ^(异或) 两个位相同为0，相异为1 <code>if(true^false)</code> 判定为true ~(非) 取反</p><p>都不支持浮点数计算 所以可以取整 <code>(12.33 | 0)</code> 返回 12</p><p>示例：0与1互换 <code>const fn = (n) =&gt; (n^1)</code></p><p>八进制 3 位 <code>（37.416）8 =（11111.10000111）2</code></p><p><code>0x16</code> -&gt; <code>0001 0110</code> -&gt; 22(十进制) -&gt; ; <code>f</code> 表示 <code>1111</code></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>2|_57           1
  2|_28         0
    2|_14       0
      2|_7      1
        2|_3    1
          1    
逆序排列
=&gt; 111 001

小数 乘2取整，顺序排列
0.8125
     2
1.6250  取 1
 .6250
     2
1.2500  取 1
   .25
     2
   0.5  取 0
   0.5
     2
   1.0  取 1 

=&gt; 1011
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="移位运算符" tabindex="-1"><a class="header-anchor" href="#移位运算符" aria-hidden="true">#</a> 移位运算符</h2><p>左移：<code>&lt;&lt;</code> 正负数符号位不参与移动 低位补零（没有无符号左移，因为多余了，符号位都被移除了） 右移：<code>&gt;&gt;</code> 正负数符号位不参与移动 高位补符号位 无符号右移：<code>&gt;&gt;&gt;</code> 正负数符号位当作数来看待 进行移动 高位补0</p><p><code>x &gt;&gt;&gt; 0</code> 目的</p><ol><li>将不是number类型的数据转换为number</li><li>将number转换为无符号的32bit数据，也就是Uint32类型。这些与移位的位数无关，移位0位主要就是用了js的内部特性做了前两种转换。</li><li>本质上就是保证x有意义（为数字类型），且为正整数，在有效的数组范围内（0 ～ 0xFFFFFFFF），且在无意义的情况下缺省值为0</li></ol><p>求 <code>2^n</code> 值： <code>2^3 = 1&lt;&lt;3 = 8</code></p><p>求一个数的 <code>1/2</code>：<code>8/2 = 8&gt;&gt;1 = 4</code> 前提是2的倍数</p><p>3 的二进制是 <code>00011</code> 第一位符号位 外加4位</p><p>-5 表示为二进制 <code>11011</code> 0101 -&gt; 1011</p>`,27);function m(b,k){const e=d("router-link");return c(),l("div",null,[o(`
 * @Author: warren
 * @Date: 2022-07-21 09:34:56
 * @LastEditors: warren
 * @LastEditTime: 2023-09-19 22:08:21
`),n("nav",u,[n("ul",null,[n("li",null,[s(e,{to:"#原码-反码-补码"},{default:a(()=>[i("原码 反码 补码")]),_:1})]),n("li",null,[s(e,{to:"#按位非运算-与"},{default:a(()=>[i("~ (按位非运算) 与 ~~")]),_:1})]),n("li",null,[s(e,{to:"#逻辑位运算"},{default:a(()=>[i("逻辑位运算：")]),_:1})]),n("li",null,[s(e,{to:"#移位运算符"},{default:a(()=>[i("移位运算符")]),_:1})])])]),v])}const x=t(r,[["render",m],["__file","bitOperation.html.vue"]]);export{x as default};
