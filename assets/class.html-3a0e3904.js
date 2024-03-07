import{_ as n,p as s,q as a,a1 as e}from"./framework-7e1a102e.js";const t={},p=e(`<h2 id="class-类" tabindex="-1"><a class="header-anchor" href="#class-类" aria-hidden="true">#</a> class 类</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Test</span> <span class="token punctuation">{</span>
    #name<span class="token punctuation">;</span> <span class="token comment">// 私有属性 es2019</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">x<span class="token punctuation">,</span> n</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 私有属性</span>
        <span class="token keyword">let</span> _name <span class="token operator">=</span> <span class="token string">&#39;hew&#39;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>#name <span class="token operator">=</span> n
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function-variable function">setName</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            _name <span class="token operator">=</span> name<span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function-variable function">getName</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> _name<span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">;</span>

        <span class="token comment">/* 对应es5 的构造函数 */</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token number">12222</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>x <span class="token operator">=</span> x <span class="token operator">||</span> <span class="token string">&#39;original x&#39;</span>

        <span class="token comment">/* 这里类似使用原来的构造函数添加 prototype */</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>__proto__<span class="token punctuation">.</span>m <span class="token operator">=</span> <span class="token number">23333</span> 
    <span class="token punctuation">}</span>

    <span class="token comment">/* 类的所有方法都是定义在类的prototype上 */</span>
    <span class="token function">getX</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>#name<span class="token punctuation">)</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>x
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">new</span> <span class="token class-name">Test</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getX</span><span class="token punctuation">(</span><span class="token punctuation">)</span>   <span class="token comment">// &#39;original x&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>在 class 中用 = 声明变量属于 Field declarations ，实际将被挂载到 实例属性上读取优于原型链</li></ul><h3 id="静态属性和方法" tabindex="-1"><a class="header-anchor" href="#静态属性和方法" aria-hidden="true">#</a> 静态属性和方法</h3><ul><li>静态属性： 在属性前加 static 或是 ClassName.propertyName = &#39;xx&#39; 方式设置</li><li>在方法前加 static</li><li>只能通过类来调用 不能被子类继承（静态方法不行，静态属性可以）,静态方法中的this指向类而非实例</li></ul><h3 id="继承" tabindex="-1"><a class="header-anchor" href="#继承" aria-hidden="true">#</a> 继承</h3><p>super ：表示父类的构造函数，用来新建父类的this对象</p><p>super(参数) 这里的参数是传给父类的构造函数</p><p>子类必须在 constructor 方法中调用super方法，否则新建实例时会报错。这是因为子类没有自己的this对象，而是继承父类的this对象，然后对其进行加工。如果不调用super方法，子类就得不到this对象。constructor 中this指向实例</p><p>ES6 的继承机制，先创造父类的实例对象this（所以必须先调用super方法），然后再用子类的构造函数修改this</p><h3 id="单向链表" tabindex="-1"><a class="header-anchor" href="#单向链表" aria-hidden="true">#</a> 单向链表</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Node</span> <span class="token punctuation">{</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>value <span class="token operator">=</span> value
        <span class="token keyword">this</span><span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token keyword">null</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">ListNode</span> <span class="token punctuation">{</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>length <span class="token operator">=</span> <span class="token number">0</span>
        <span class="token comment">/* 头指针 */</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>head <span class="token operator">=</span> <span class="token keyword">null</span>
    <span class="token punctuation">}</span>

    <span class="token function">append</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> node <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Node</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>head<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">let</span> endHead <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>head
            <span class="token comment">/* 找到最后一个 node */</span>
            <span class="token keyword">while</span><span class="token punctuation">(</span>endHead<span class="token punctuation">.</span>next<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                endHead <span class="token operator">=</span> endHead<span class="token punctuation">.</span>next
            <span class="token punctuation">}</span>
            endHead<span class="token punctuation">.</span>next <span class="token operator">=</span> node
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>head <span class="token operator">=</span> node
        <span class="token punctuation">}</span>

        <span class="token keyword">this</span><span class="token punctuation">.</span>length<span class="token operator">++</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,12),o=[p];function c(i,l){return s(),a("div",null,o)}const d=n(t,[["render",c],["__file","class.html.vue"]]);export{d as default};
