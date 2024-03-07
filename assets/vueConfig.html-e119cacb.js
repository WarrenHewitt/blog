import{_ as n,p as s,q as a,a1 as e}from"./framework-7e1a102e.js";const p={},t=e(`<h1 id="vue-配置文件说明" tabindex="-1"><a class="header-anchor" href="#vue-配置文件说明" aria-hidden="true">#</a> vue 配置文件说明</h1><h2 id="vue-cli" tabindex="-1"><a class="header-anchor" href="#vue-cli" aria-hidden="true">#</a> vue-cli</h2><ul><li><p>assets 目录一般主要放样式代码 会被 webpack 编译</p></li><li><p>最好用相对路径</p></li><li><p>在样式文件中引入图片，注意路径应该按照，引入样式的那个.vue 文件为相对路径</p></li><li><p>&quot;lint&quot;: &quot;vue-cli-service lint&quot; ： 执行该命令，eslint 校验并修复文件中的错误</p></li><li><p>在 js 中动态控制图片加载用 <code>require(&#39;地址&#39;)</code> 获取图片后赋值给 src</p></li><li><p>CSS Pre-processors：选择 CSS 预处理类型：sass 或 less</p></li><li><p>Linter / Formatter：选择 eslint 标准，以及是否在保存时格式化代码</p></li><li><p>图片资源放到 assets，不要放到 public 中否则打包出来的图片会是两份</p></li><li><p>其它的 js 资源可以放到 public 中</p></li><li><p><code>vue inspect &gt; output.js</code> 输出当前 vue-cli 默认的 webpack 配置</p></li><li><p>在开发模式时，环境变量 p<wbr>rocess.env.NODE_ENV 为 development；打包时为 production</p></li><li><p>生产环境部署：https://cn.vuejs.org/v2/guide/deployment.html</p></li><li><p>环境变量和模式 (webpack-pure 和 node-koa 项目中有相关实例内容)</p><ul><li>链接https://cli.vuejs.org/zh/guide/mode-and-env.html#%E6%A8%A1%E5%BC%8F</li><li>可以在命令行传参</li><li>有固定的参数</li></ul></li><li><p>TypeScript 配置</p><ul><li>Use class-style component syntax: 是否使用 使用 类 风格的组件语法, 建议不使用</li><li>Use Babel alongside TypeScript for auto-detected polyfills? ：是否使用 babel 做转义（建议是使用 20200924）</li></ul></li></ul><hr><h2 id="环境变量" tabindex="-1"><a class="header-anchor" href="#环境变量" aria-hidden="true">#</a> 环境变量</h2><p>具体的参考： https://cli.vuejs.org/zh/guide/mode-and-env.html#%E6%A8%A1%E5%BC%8F</p><p>模式 mode，默认有 3 种</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>development 模式用于 vue-cli-service serve
test 模式用于 vue-cli-service test:unit
production 模式用于 vue-cli-service build 和 vue-cli-service test:e2e
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以修改默认</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>vue-cli-service serve --mode someMode
vue-cli-service build --mode someMode
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>修改后 <code>必须</code> 要有对应的 <code>环境变量文件</code>，且文件中要修改 NODE_ENV 才能拿到修改后的 mode，否者拿到的就是默认的</p><p><code>p<wbr>rocess.env.xxx</code> 获取</p><p>文件中配置</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>.env                <span class="token comment"># 在所有的环境中被载入</span>
.env.local          <span class="token comment"># 在所有的环境中被载入，但会被 git 忽略</span>
.env.<span class="token punctuation">[</span>someMode<span class="token punctuation">]</span>         <span class="token comment"># 只在指定的模式中被载入  这里的 someMode 和修改时的 someMode 对应</span>
.env.<span class="token punctuation">[</span>someMode<span class="token punctuation">]</span>.local   <span class="token comment"># 只在指定的模式中被载入，但会被 git 忽略</span>

<span class="token comment"># 只允许配置 NODE_ENV ，BASE_URL 和以 VUE_APP 开头的变量</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="githooks" tabindex="-1"><a class="header-anchor" href="#githooks" aria-hidden="true">#</a> GitHooks</h3><p>当安装了 @vue/cli-service 就默认安装了 yorkie （yorkie is a fork of husky https://cli.vuejs.org/zh/guide/cli-service.html#git-hook）</p><p>husky 和 yorkie 包的安装 会对 .git/hooks 里的钩子进行了更改</p><p>代码在 commit 时会去检查在 package.json 中,是否有配置 gitHooks 如果有就进行检测，没有就直接跳过（默认是直接跳过）</p><p>使用方法，<code>package.json</code> 中添加</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;gitHooks&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;pre-commit&quot;</span><span class="token operator">:</span> <span class="token string">&quot;lint-staged&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;lint-staged&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;*.{js,vue}&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vue-cli-service lint&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>@vue/cli-plugin-eslint</code> 安装时 会注入 <code>vue-cli-service lint</code> 命令</p><p>lint-staged 的作用是对当前提交的内容做处理</p><p><code>&quot;vue-cli-service lint --no-eslintrc -c .eslintrcCommit.js&quot;</code> 利用修改默认配置文件，使用指定配置文件，在提交时做校验(与开发时的 lint 不同在于，不允许提交有 console.log 的代码)</p><p>一般是设置了在保存文件时，就进行 eslint 语法校验，这里的 githooks 是在 commit 时，再进行一次 eslint 语法校验（因为用的是 vue-cli-service lint）</p><p>代码检测与规范参考： https://juejin.im/post/6844904013368934407#heading-22</p><ul><li>vue-cli-service build [options] [entry|pattern] --report 和 --report-json 会根据构建统计生成报告</li></ul><h3 id="脚手架打包出来的文字图标不显示" tabindex="-1"><a class="header-anchor" href="#脚手架打包出来的文字图标不显示" aria-hidden="true">#</a> 脚手架打包出来的文字图标不显示</h3><p>修改 webpack.base.conf.js 的</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">{</span>
    <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.(woff2?|eot|ttf|otf)(\\?.*)?$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
    <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&#39;url-loader&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">limit</span><span class="token operator">:</span> <span class="token number">100000</span><span class="token punctuation">,</span> <span class="token comment">// 这里的值改大一点</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> utils<span class="token punctuation">.</span><span class="token function">assetsPath</span><span class="token punctuation">(</span><span class="token string">&#39;fonts/[name].[hash:7].[ext]&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="vue-config-js" tabindex="-1"><a class="header-anchor" href="#vue-config-js" aria-hidden="true">#</a> vue.config.js</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// const BundleAnalyzerPlugin = require(&#39;webpack-bundle-analyzer&#39;).BundleAnalyzerPlugin</span>
<span class="token keyword">const</span> SpeedMeasurePlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;speed-measure-webpack-plugin&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 编译打包速度测量</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@des</span> vue-cli-3 中已安装 webpack 只是webpack被隐藏
 */</span>
<span class="token keyword">const</span> webpack <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;webpack&#39;</span><span class="token punctuation">)</span>

<span class="token doc-comment comment">/**
 * 这里可以接收从 package.json 命令传递的参数和命令行直接传递的参数
 * &quot;scripts&quot;: <span class="token punctuation">{</span>
        &quot;serve&quot;: &quot;vue-cli-service serve par1&quot;,
    <span class="token punctuation">}</span>,
    或者
    yarn serve par1
 */</span>
<span class="token comment">// console.log(&#39;argv: &#39;, process.argv) // 会返回包含值为 par1 的参数数组</span>

<span class="token keyword">const</span> cusPath <span class="token operator">=</span> process<span class="token punctuation">.</span>argv<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span> <span class="token operator">?</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">./</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>process<span class="token punctuation">.</span>argv<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token string">&#39;--&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">/</span><span class="token template-punctuation string">\`</span></span> <span class="token operator">:</span> <span class="token string">&#39;./&#39;</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * <span class="token keyword">@des</span> 和webpack的一致
     * 1. 这里用./目的是为了让打包后的静态文件可以直接运行
     * 2. 只有加了 publicPath BASE_URL 才有值
    */</span>
    <span class="token literal-property property">publicPath</span><span class="token operator">:</span> cusPath<span class="token punctuation">,</span>

    <span class="token literal-property property">open</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>  <span class="token comment">// 启动服务后是否自动打开浏览器</span>

    <span class="token comment">// pages: {</span>
    <span class="token comment">//     index: {</span>
    <span class="token comment">//         /* 配置时， entry 是必填的,并且会和 chain中配置的 html-webpack-plugin 有冲突 */</span>
    <span class="token comment">//         entry: &#39;./src/main.js&#39;,</span>
    <span class="token comment">//         title: &#39;vue-page&#39;</span>
    <span class="token comment">//     }</span>
    <span class="token comment">// },</span>

    <span class="token comment">/* 生产环境打包时,不生成 map 文件 */</span>
    <span class="token literal-property property">productionSourceMap</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>

    <span class="token doc-comment comment">/**
     * 默认生成的静态资源文件名包含 hash 以便更好的控制缓存
     * 如果html引入的资源不是动态加入的，是用的固定名称，那这里就要设置false，或者重置输出文件的名称配置
     */</span>
    <span class="token literal-property property">filenameHashing</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>

    <span class="token comment">// parallel: Default: require(&#39;os&#39;).cpus().length &gt; 1 // CPU 有多于一个内核时自动启用</span>
    <span class="token comment">// DllPlugin webpack 的一种提升构建速度方式</span>

    <span class="token literal-property property">devServer</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">compress</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token literal-property property">port</span><span class="token operator">:</span> <span class="token number">7878</span><span class="token punctuation">,</span>

        <span class="token comment">// publicPath: &#39;./&#39;,</span>

        <span class="token literal-property property">proxy</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token string-property property">&#39;/api&#39;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token literal-property property">target</span><span class="token operator">:</span> <span class="token string">&#39;http://localhost:2500&#39;</span><span class="token punctuation">,</span>
                <span class="token literal-property property">changeOrigin</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
                <span class="token comment">/* 如果这个 &#39;api&#39; 公共前缀不是后端需要的，用以下方法去除 */</span>
                <span class="token literal-property property">pathRewrite</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token string-property property">&#39;^/api&#39;</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span> <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token comment">/* 和 configureWebpack 比 chainWebpack中的config信息比较全 可以打印出来比较 */</span>
    <span class="token function-variable function">chainWebpack</span><span class="token operator">:</span> <span class="token parameter">config</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token doc-comment comment">/**
         * <span class="token keyword">@des</span> 方式1：链式方式，设置后启动服务就会打开包分析页面
         */</span>
        <span class="token comment">// config</span>
        <span class="token comment">//     .plugin(&#39;webpack-bundle-analyzer&#39;)</span>
        <span class="token comment">//     .use(require(&#39;webpack-bundle-analyzer&#39;).BundleAnalyzerPlugin)</span>

        config
            <span class="token comment">/* 这里的 html-webpack-plugin  就用html表示 */</span>
            <span class="token punctuation">.</span><span class="token function">plugin</span><span class="token punctuation">(</span><span class="token string">&#39;html&#39;</span><span class="token punctuation">)</span>
            <span class="token punctuation">.</span><span class="token function">tap</span><span class="token punctuation">(</span><span class="token parameter">args</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
                <span class="token comment">// 可以用 console 将 args 打印出来</span>
                <span class="token comment">// console.log(args)</span>
                <span class="token comment">/* 这里默认是去取的 package.json 的name */</span>
                args<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>title <span class="token operator">=</span> <span class="token string">&#39;vue-admin-chain&#39;</span>
                <span class="token keyword">return</span> args
            <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token doc-comment comment">/**
     * <span class="token keyword">@des</span>
     * 1. 第一个参数会收到已经解析好的配置
     * 2. 可以直接修改配置，或者返回一个将会被合并的对象
     */</span>
    <span class="token function-variable function">configureWebpack</span><span class="token operator">:</span> <span class="token parameter">config</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token comment">/* 重新定义输出的chunkfile名称 这里的name如果没有设置，那name=id*/</span>
                <span class="token literal-property property">chunkFilename</span><span class="token operator">:</span> <span class="token string">&#39;js/cus-[id]-[name].[chunkhash].js&#39;</span>
            <span class="token punctuation">}</span>
            <span class="token comment">/* 参见 webpack-pure/README.md */</span>
            <span class="token literal-property property">externals</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token literal-property property">NProgress</span><span class="token operator">:</span> <span class="token string">&#39;NProgress&#39;</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token doc-comment comment">/**
             * <span class="token keyword">@description</span> 通知资源是否超出限制了
             */</span>
            <span class="token literal-property property">performance</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token comment">// 可设置的值有 &#39;warning&#39;: &#39;error&#39; | &#39;warning&#39; boolean: false 是否要给出提示 默认是会输出提示</span>
                <span class="token comment">// hints: true,</span>
                <span class="token comment">/* 打包后输出的资源大小超过多少给出提示， 默认 250k */</span>
                <span class="token comment">// maxAssetSize: 400000</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>

        <span class="token doc-comment comment">/**
         * <span class="token keyword">@des</span> 方式2：配置webpackbundleAnalyze
         * 区分环境执行 这里是当运行打包时，即开启分析
         * 这里如果修改mode可能导致配置与production不一致，无法启动分析服务
         */</span>
        <span class="token keyword">let</span> cn <span class="token operator">=</span> <span class="token string">&#39;&#39;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NODE_ENV</span> <span class="token operator">===</span> <span class="token string">&#39;production&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// data.plugins.push(new BundleAnalyzerPlugin())</span>
            cn <span class="token operator">=</span> <span class="token string">&#39;product hewitt&#39;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            cn <span class="token operator">=</span> <span class="token string">&#39;develop hewitt&#39;</span>
        <span class="token punctuation">}</span>
        <span class="token doc-comment comment">/**
         * <span class="token keyword">@des</span> 方式3： vue-cli-service build --report
         * 生成 report.html 双击浏览器打开
         */</span>
        <span class="token comment">/* 创建全局常量，参考 webpack-pure/config */</span>
        data<span class="token punctuation">.</span>plugins<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">webpack<span class="token punctuation">.</span>DefinePlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            <span class="token constant">CUSTOM_NAME</span><span class="token operator">:</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>cn<span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

        <span class="token comment">/* 编译打包速度测量 */</span>
        data<span class="token punctuation">.</span>plugins<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">SpeedMeasurePlugin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

        <span class="token keyword">return</span> data
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token doc-comment comment">/**
     * <span class="token keyword">@description</span> 是否每次保存时 lint 代码
     */</span>
    <span class="token comment">// default 输出错误，导致编译失败</span>
    <span class="token comment">// true 或 &#39;warning&#39; lint 错误输出为编译警告 不会导致编译失败</span>
    <span class="token comment">// error 警告、错误 输出，导致编译失败</span>
    <span class="token comment">// p<wbr>rocess.env.NODE_ENV !== &#39;production&#39; 生产环境(打包时) 设置为false 即不会开启校验</span>
    <span class="token comment">// vue3 可用  默认是关闭</span>
    <span class="token literal-property property">lintOnSave</span><span class="token operator">:</span> <span class="token string">&#39;default&#39;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,31),i=[t];function l(o,c){return s(),a("div",null,i)}const u=n(p,[["render",l],["__file","vueConfig.html.vue"]]);export{u as default};
