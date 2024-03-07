import{_ as e,M as t,p,q as o,Q as l,R as n,t as i,N as r,a1 as s}from"./framework-7e1a102e.js";const c={},u=s('<h1 id="eslint-相关的配置说明" tabindex="-1"><a class="header-anchor" href="#eslint-相关的配置说明" aria-hidden="true">#</a> eslint 相关的配置说明</h1><ul><li>不校验某个文件，文件顶部加 <code>&lt;!-- eslint-disable --&gt;</code>; 不校验当前行 <code>// eslint-disable-line</code></li><li>ts 文件中 <code>// @ts-ignore</code></li></ul><h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2>',3),d={href:"https://eslint.org/docs/latest/user-guide/getting-started",target:"_blank",rel:"noopener noreferrer"},k=s(`<ol><li><code>npm init @eslint/config</code> 已经有配置文件可以直接安装 <code>yarn add eslint</code> 这里配置的结果是校验 vue3 的语法</li></ol><p>选择了 enforce code style 会多装几个包，处理代码格式 选择 airbnd 会校验更严格 <code>eslint-config-standard | eslint-config-airbnb-base eslint-plugin-import eslint-plugin-n eslint-plugin-promise</code> 同时会多出一个配置 <code>extends: [&#39;airbnb-base&#39;|standard]</code> 初始化的 vue3+vite 项目装 airbnb eslint 不生效（待验证什么原因）</p><p>如果要降级 vue2 语法校验，可以将 <code>.eslintrc.js</code> 中的 <code>extends</code> 下的 <code>plugin:vue/vue3-essential</code> 改为 <code>plugin:vue/recommended</code> 参考: https://eslint.vuejs.org/user-guide/</p><p>要为特定类型的文件指定处理器，请使用 overrides 键和 processor https://eslint.bootcss.com/docs/user-guide/configuring</p><h2 id="安装-vscode-插件" tabindex="-1"><a class="header-anchor" href="#安装-vscode-插件" aria-hidden="true">#</a> 安装 vscode 插件</h2><ul><li><p>【ESLint】 插件配置 https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint#settings-options 创建 <code>.eslintrc.js</code></p></li><li><p>【EditorConfig for VS Code】: 该插件与 eslint 可以做部分配合工作 设置代码规范 配置 <code>.editorconfig</code> 文件</p></li></ul><div class="language-conf line-numbers-mode" data-ext="conf"><pre class="language-conf"><code># 设为true时，才会停止查找.editorconfig文件
root = true

[*]
charset = utf-8

[*.{js,cjs,vue,json}]
indent_style = space
indent_size = 4
trim_trailing_whitespace = true
end_of_line = crlf
insert_final_newline = true

# indent_style    设置缩进风格(tab是硬缩进，space为软缩进)
# indent_size     用一个整数定义的列数来设置缩进的宽度，如果indent_style为tab，则此属性默认为tab_width
# tab_width       用一个整数来设置tab缩进的列数。默认是indent_size
# end_of_line     设置换行符，值为lf、cr和crlf
# charset         设置编码，值为latin1、utf-8、utf-8-bom、utf-16be和utf-16le，不建议使用utf-8-bom
# trim_trailing_whitespace  设为true表示会去除换行行首的任意空白字符。
# insert_final_newline      设为true表示使文件以一个空白行结尾
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="vscode-插件和-npm-包差异" tabindex="-1"><a class="header-anchor" href="#vscode-插件和-npm-包差异" aria-hidden="true">#</a> vscode 插件和 npm 包差异</h1><p>vscode 安装的 eslint 和 prettier 插件，如果项目中有配置文件，会读取配置文件，然后检查代码格式化文件</p><p>npm 安装的包，只有运行命令行的时候检查代码 在命令行给出提示，如果只安装了 npm 包，vscode 是不会有提示的</p><p>忽略的文件 <code>.eslintignore</code> 参考 <code>.gitignore</code></p><ul><li><code>.eslintrc.js</code> 文件 或其它的配置文件</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">env</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">node</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token comment">// 使用 require 和 module.exports 不会报错</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token comment">/*
            &#39;off&#39;：0  &#39;warn&#39;：1 &#39;error&#39;：2
        */</span>
        <span class="token comment">// ts any 的使用 Unexpected any. Specify a different type</span>
        <span class="token string-property property">&#39;@typescript-eslint/no-explicit-any&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;off&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token comment">// 允许使用console</span>
        <span class="token string-property property">&#39;no-console&#39;</span><span class="token operator">:</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NODE_ENV</span> <span class="token operator">===</span> <span class="token string">&#39;production&#39;</span> <span class="token operator">?</span> <span class="token string">&#39;error&#39;</span> <span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>
        <span class="token string-property property">&#39;no-debugger&#39;</span><span class="token operator">:</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NODE_ENV</span> <span class="token operator">===</span> <span class="token string">&#39;production&#39;</span> <span class="token operator">?</span> <span class="token string">&#39;error&#39;</span> <span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">indent</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>
            <span class="token number">4</span> <span class="token comment">// 结合 editorconfig</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token comment">// https://eslint.org/docs/latest/rules/comma-dangle</span>
        <span class="token comment">// 当最后一个元素或属性与结尾的 ]或 } 在不同行时，需要使用逗号，当最后一个元素或属性与结尾的 ]或 } 在同一行时，不允许使用逗号。</span>
        <span class="token string-property property">&#39;comma-dangle&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;always-multiline&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token string-property property">&#39;no-tabs&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span> <span class="token comment">// Unexpected tab character</span>
        <span class="token comment">/* 官方文档说不推荐，目前还能用 20231228 */</span>
        <span class="token string-property property">&#39;max-len&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">code</span><span class="token operator">:</span> <span class="token number">160</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token comment">/* 最大行数 */</span>
        <span class="token string-property property">&#39;max-lines&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">max</span><span class="token operator">:</span> <span class="token number">600</span><span class="token punctuation">,</span> <span class="token literal-property property">skipBlankLines</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token literal-property property">skipComments</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token comment">// 即使没有 babelrc 配置文件，也使用 babel-eslint 来解析</span>
        <span class="token literal-property property">requireConfigFile</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token literal-property property">quotes</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;single&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// 单引号</span>
        <span class="token literal-property property">semi</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;never&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// 分号</span>
        <span class="token string-property property">&#39;quote-props&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">&#39;as-needed&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// 对象属性，根据需要添加引号 如 &#39;zz-xxx&#39; zzXxx</span>
        <span class="token comment">// 关闭校验 Promise.reject() 传入的是 error https://eslint.org/docs/latest/rules/prefer-promise-reject-errors</span>
        <span class="token string-property property">&#39;prefer-promise-reject-errors&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;off&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>

        <span class="token doc-comment comment">/**
         * eslint 针对vue的插件*( eslint-plugin-vue ) 可以配置一些校验规则 https://eslint.vuejs.org/
         */</span>
        <span class="token comment">// 配置 Parsing error: x-invalid-end-tag  其它相关的查阅 https://eslint.vuejs.org/rules/no-parsing-error.html</span>
        <span class="token string-property property">&#39;vue/no-parsing-error&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
            <span class="token string-property property">&#39;x-invalid-namespace&#39;</span><span class="token operator">:</span> <span class="token boolean">false</span>
        <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token comment">// 当报错 Component name should always be multi-word 时设置</span>
        <span class="token string-property property">&#39;vue/multi-word-component-names&#39;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token string-property property">&#39;vue/max-attributes-per-line&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
            <span class="token string-property property">&#39;singleline&#39;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token string-property property">&#39;max&#39;</span><span class="token operator">:</span> <span class="token number">12</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token string-property property">&#39;multiline&#39;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token string-property property">&#39;max&#39;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// 属性换行配置</span>
        <span class="token comment">// html 缩进 这里是4个空格</span>
        <span class="token string-property property">&#39;vue/html-indent&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">baseIndent</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token comment">// html 文件组后一行报错；实际官方用途 令 &lt;template&gt; 内也支持 ESLint 的注释指令。</span>
        <span class="token string-property property">&#39;vue/comment-directive&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>
        <span class="token comment">/* 属性是否用 - 连接, 可以加 ignore  https://eslint.vuejs.org/rules/attribute-hyphenation.html */</span>
        <span class="token string-property property">&quot;vue/attribute-hyphenation&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;error&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;never&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
            <span class="token string-property property">&quot;ignore&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
        <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token comment">/* 定义 vue 文件中 template scritpt style 模块的顺序 */</span>
        <span class="token string-property property">&quot;vue/block-order&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;error&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
            <span class="token string-property property">&quot;order&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;template&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;script&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;style&quot;</span><span class="token punctuation">]</span>
        <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token comment">/* 组件名称必须是 多个单词 */</span>
        <span class="token string-property property">&#39;vue/multi-word-component-names&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">ignores</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>

        <span class="token string-property property">&#39;prettier/prettier&#39;</span><span class="token operator">:</span> <span class="token number">2</span> <span class="token comment">// 将 prettier 的报错信息提示改为 error 级别</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// 允许一些全局的变量，如在html中引入的高德地图全局变量</span>
    <span class="token literal-property property">globals</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">AMap</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token literal-property property">Vue</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token literal-property property">VueRouter</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token constant">ELEMENT</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token literal-property property">AMapUI</span><span class="token operator">:</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="prettier" tabindex="-1"><a class="header-anchor" href="#prettier" aria-hidden="true">#</a> prettier</h1><p>由于最新官网推荐 用命令来格式化所有文件 所以暂时不推荐用 https://github.com/vuejs/eslint-config-prettier 【20231221】</p><ul><li><p>vscode 需要装插件 <code>Prettier- Code forematter</code></p></li><li><p>eslint 更注重于语法，prettier 更关注于格式</p></li><li><p>Prettier 是一个代码格式化工具，可以格式化代码，但不具备代码检查功能</p></li><li><p>prettier3.7 以上会优先读取项目根目录下的 <code>.editorconfig or prettier config</code> 如果有，不会使用 vscode setting 中的设置</p></li><li><p>如果项目中有 .prettierrc 文件 VSCode 的 prettier 插件的配置将失效</p></li></ul><h3 id="配置" tabindex="-1"><a class="header-anchor" href="#配置" aria-hidden="true">#</a> 配置</h3><p><code>.prettierrc.json</code> https://www.prettier.cn/docs/options.html</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token comment">/* https://www.prettier.cn/docs/options.html#arrow-function-parentheses */</span>
  <span class="token comment">/* 默认 80 单行长度 */</span>
  <span class="token property">&quot;printWidth&quot;</span><span class="token operator">:</span> <span class="token number">110</span><span class="token punctuation">,</span>
  <span class="token comment">/* 默认 always (x) =&gt; x */</span>
  <span class="token property">&quot;arrowParens&quot;</span><span class="token operator">:</span> <span class="token string">&quot;always&quot;</span><span class="token punctuation">,</span>
  <span class="token comment">/* 默认 fasle  html 标签 首标签的结尾 &gt; 不用换行 */</span>
  <span class="token property">&quot;bracketSameLine&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token comment">/* 默认 true  { name: &#39;hew&#39; } 对象花括号内部前后添加空格 */</span>
  <span class="token property">&quot;bracketSpacing&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token comment">/* 默认 lf 换行符  lf crlf cr auto */</span>
  <span class="token property">&quot;endOfLine&quot;</span><span class="token operator">:</span> <span class="token string">&quot;lf&quot;</span><span class="token punctuation">,</span>
  <span class="token comment">/* 默认 false JSX 中用 单引号 */</span>
  <span class="token property">&quot;jsxSingleQuote&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token comment">/* 默认 as-needed 对象字段是否用 引号，默认是该用的时候就用 */</span>
  <span class="token property">&quot;quoteProps&quot;</span><span class="token operator">:</span> <span class="token string">&quot;as-needed&quot;</span><span class="token punctuation">,</span>
  <span class="token comment">/* 默认 true 行尾是否需要分号 */</span>
  <span class="token property">&quot;semi&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token comment">/* 默认 false 一个属性必须单独占一行 */</span>
  <span class="token property">&quot;singleAttributePerLine&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token comment">/* 默认 false 是否使用单引号 */</span>
  <span class="token property">&quot;singleQuote&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token comment">/* 默认 false  关闭 tab 缩进 */</span>
  <span class="token property">&quot;useTabs&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token comment">/* 默认 2 使用2个space缩进 */</span>
  <span class="token property">&quot;tabWidth&quot;</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
  <span class="token comment">/* 默认 all 结尾逗号 es5 表示有效的 逗号*/</span>
  <span class="token property">&quot;trailingComma&quot;</span><span class="token operator">:</span> <span class="token string">&quot;all&quot;</span><span class="token punctuation">,</span>
  <span class="token comment">/* 默认 false  vue 文件中 是否缩进 style 和 script */</span>
  <span class="token property">&quot;vueIndentScriptAndStyle&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token comment">/* 默认 false  jsx 标签的 &gt; 是否需要换行 */</span>
  <span class="token property">&quot;jsxBracketSameLine&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token comment">/* 默认 false 不用在顶部加注释即可格式化 @prettier 或者 @format */</span>
  <span class="token property">&quot;requirePragma&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token comment">/* 默认 false 当文件被格式化后，在顶部生成 @format 标记 */</span>
  <span class="token property">&quot;insertPragma&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token comment">/* 默认 css HTML文件的全局空白区域，默认是按照 css 属性识别即可 */</span>
  <span class="token property">&quot;htmlWhitespaceSensitivity&quot;</span><span class="token operator">:</span> <span class="token string">&quot;css&quot;</span><span class="token punctuation">,</span>

  <span class="token comment">/* 默认 -1 格式化后 光标移动到哪里 */</span>
  <span class="token property">&quot;cursorOffset&quot;</span><span class="token operator">:</span> <span class="token number">-1</span><span class="token punctuation">,</span>
  <span class="token comment">/* 默认 auto 是否对嵌入的代码格式化 */</span>
  <span class="token property">&quot;embeddedLanguageFormatting&quot;</span><span class="token operator">:</span> <span class="token string">&quot;auto&quot;</span><span class="token punctuation">,</span>
  <span class="token comment">/* 默认 ‘’ 指定用什么解析器 一般不用于配置文件 */</span>
  <span class="token property">&quot;filepath&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
  <span class="token comment">/* 默认 会自动识别文件 然后解析 所以不用修改， 常规的语言都基本支持 */</span>
  <span class="token property">&quot;parser&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
  <span class="token comment">/* 默认 preserve 段落文本 是否换行，默认是不处理 */</span>
  <span class="token property">&quot;proseWrap&quot;</span><span class="token operator">:</span> <span class="token string">&quot;preserve&quot;</span><span class="token punctuation">,</span>
  <span class="token comment">/* 每个文件的格式化范围 */</span>
  <span class="token property">&quot;rangeStart&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token comment">/* 每个文件的格式化范围 */</span>
  <span class="token property">&quot;rangeEnd&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="prettier-和-eslint-结合使用" tabindex="-1"><a class="header-anchor" href="#prettier-和-eslint-结合使用" aria-hidden="true">#</a> Prettier 和 Eslint 结合使用</h2><p>根据脚手架搭建时，选择两者初始化安装</p><p>编辑器 安装对应的插件</p>`,22);function v(m,b){const a=t("ExternalLinkIcon");return p(),o("div",null,[l(`
 * @LastEditTime: 2024-02-01 12:18:17
`),u,n("p",null,[n("a",d,[i("地址"),r(a)])]),k])}const y=e(c,[["render",v],["__file","eslintPrettier.html.vue"]]);export{y as default};
