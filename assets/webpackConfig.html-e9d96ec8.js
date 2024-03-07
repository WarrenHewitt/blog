import{_ as n,p as s,q as a,a1 as e}from"./framework-7e1a102e.js";const t={},p=e(`<h1 id="配置" tabindex="-1"><a class="header-anchor" href="#配置" aria-hidden="true">#</a> 配置</h1><p>参考项目 https://github.com/WarrenHewitt/webpack-pure/blob/master/config/webpack.config.js</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;path&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> webpack <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;webpack&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> htmlWebpackPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;html-webpack-plugin&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> BundleAnalyzerPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;webpack-bundle-analyzer&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>BundleAnalyzerPlugin<span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@des</span> 其它说明查阅 README
 */</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@des</span> 返回一个函数，参考：https://webpack.js.org/configuration/configuration-types/#exporting-a-function
 * 启动：webpack-dev-server --config ./config/webpack.config.js --env.currentEnv=devvv
 * 1. env：启动webpack时传入的参数；如上启动，返回 <span class="token punctuation">{</span> currentEnv: devvv <span class="token punctuation">}</span>
 * 2. argv：启动webpack时通过命令行传入的参数；如上启动，返回值如下：
 * <span class="token punctuation">{</span> 
        &quot;_&quot;: [],&quot;cache&quot;: null,&quot;bail&quot;: null, &quot;profile&quot;: null, &quot;serveIndex&quot;: true, &quot;serve-index&quot;: true, &quot;inline&quot;: true, 
        &quot;color&quot;: <span class="token punctuation">{</span> &quot;level&quot;: 2,&quot;hasBasic&quot;: true, &quot;has256&quot;: true, &quot;has16m&quot;: false <span class="token punctuation">}</span>, 
        &quot;colors&quot;: <span class="token punctuation">{</span> &quot;level&quot;: 2, &quot;hasBasic&quot;: true, &quot;has256&quot;: true, &quot;has16m&quot;: false <span class="token punctuation">}</span>, &quot;info&quot;: true, 
        &quot;config&quot;: &quot;./config/webpack.config.js&quot;, &quot;env&quot;: <span class="token punctuation">{</span> &quot;currentEnv&quot;: &quot;devvv&quot; <span class="token punctuation">}</span>, 
        &quot;client-log-level&quot;: &quot;info&quot;, &quot;clientLogLevel&quot;: &quot;info&quot;, &quot;host&quot;: &quot;localhost&quot;, 
        &quot;$0&quot;: &quot;node_modules\\\\webpack-dev-server\\\\bin\\\\webpack-dev-server.js&quot; 
    <span class="token punctuation">}</span>
 */</span>
module<span class="token punctuation">.</span><span class="token function-variable function">exports</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">env<span class="token punctuation">,</span> argv</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
        <span class="token doc-comment comment">/**
         * <span class="token keyword">@des</span> 入口文件
         */</span>
        <span class="token comment">// entry: path.resolve(__dirname, &#39;../src&#39;, &#39;index.js&#39;),</span>
        <span class="token literal-property property">entry</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;../src&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;photo.js&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token comment">/* 这里的name就是 上面 entry 的文件名 */</span>
            <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&#39;[name]bundle-[hash].js&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">chunkFilename</span><span class="token operator">:</span> <span class="token string">&#39;[name][id].[chunkhash].js&#39;</span><span class="token punctuation">,</span>
            <span class="token comment">// 这里一般是输出的懒加载的模块js；</span>
            <span class="token comment">// 如果在懒加载时配置了webpackChunkName /* webpackChunkName: &quot;someName&quot; */；那这里的 name = someName</span>
            <span class="token comment">//path: path.resolve(__dirname, &#39;dist/assets&#39;),</span>
            <span class="token literal-property property">path</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;../dist&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>

        <span class="token doc-comment comment">/** 
         * 1. 当模式设置为 production 时会自动压缩和混淆, development不会
         * 2. 还有一种使用方式为在命令中： webpack --mode=development
         * 3. 设置不同模式时，会更改对应的 p<wbr>rocess.env.NODE_ENV 的值
         */</span>
        <span class="token literal-property property">mode</span><span class="token operator">:</span> <span class="token string">&#39;development&#39;</span><span class="token punctuation">,</span>

        <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token doc-comment comment">/**
             * <span class="token keyword">@des</span>  需要自动把打包的文件引入到 html 文件中 要用以下插件
             */</span>
            <span class="token keyword">new</span> <span class="token class-name">htmlWebpackPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
                <span class="token doc-comment comment">/** 模板地址 */</span>
                <span class="token comment">// template: path.join(__dirname, &#39;../public&#39;, &#39;index.html&#39;),</span>
                <span class="token literal-property property">template</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;../public&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;photo.html&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                <span class="token doc-comment comment">/**
                 * <span class="token keyword">@desc</span> 在html模板中调用参数 &lt;%= htmlWebpackPlugin.options.title %&gt;
                 */</span>
                <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;title from hwp param&#39;</span><span class="token punctuation">,</span>
                <span class="token literal-property property">currentEnv</span><span class="token operator">:</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NODE_ENV</span> <span class="token operator">===</span> <span class="token string">&#39;development&#39;</span> <span class="token operator">?</span> env<span class="token punctuation">.</span>currentEnv <span class="token operator">:</span> <span class="token string">&#39;&#39;</span>
            <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token doc-comment comment">/**
             * <span class="token keyword">@des</span> 分析打包结果
             */</span>
            <span class="token keyword">new</span> <span class="token class-name">BundleAnalyzerPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
                <span class="token literal-property property">analyzerPort</span><span class="token operator">:</span> <span class="token number">8801</span><span class="token punctuation">,</span>
                <span class="token doc-comment comment">/** <span class="token keyword">@des</span> server(运行server时就执行) disabled(一般采取这种方式，运行单独命令读取stats.json才启动分析服务)  */</span>
                <span class="token literal-property property">analyzerMode</span><span class="token operator">:</span> <span class="token string">&#39;disabled&#39;</span><span class="token punctuation">,</span>
                <span class="token literal-property property">generateStatsFile</span><span class="token operator">:</span> <span class="token boolean">true</span>
            <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token doc-comment comment">/**
             * <span class="token keyword">@des</span> 创建全局常量
             */</span>
            <span class="token keyword">new</span> <span class="token class-name">webpack<span class="token punctuation">.</span>DefinePlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
                <span class="token constant">AUTHER</span><span class="token operator">:</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span><span class="token string">&#39;hewitt&#39;</span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>

            <span class="token comment">// new webpack.HotModuleReplacementPlugin()</span>

            <span class="token doc-comment comment">/** gzip 参考 https://webpack.docschina.org/plugins/compression-webpack-plugin/ */</span>
            <span class="token comment">// new CompressionPlugin(),</span>

            <span class="token doc-comment comment">/** 把css样式从js文件中提取到单独的css文件中（style-loader是将样式直接插入到html） */</span>
            <span class="token comment">// new MiniCssExtractPlugin({</span>
            <span class="token comment">//     filename: devMode ? &#39;[name].css&#39; : &#39;[name].[hash].css&#39;,</span>
            <span class="token comment">//     chunkFilename: devMode ? &#39;[id].css&#39; : &#39;[id].[hash].css&#39;,</span>
            <span class="token comment">// })</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>

        <span class="token doc-comment comment">/**
         * <span class="token keyword">@des</span> 生成标记源码位置的 .map 文件，方便开发时调试 ,none表示不生成.map
         */</span>
        <span class="token literal-property property">devtool</span><span class="token operator">:</span> <span class="token string">&#39;inline-source-map&#39;</span><span class="token punctuation">,</span>


        <span class="token doc-comment comment">/**
         * <span class="token keyword">@des</span> webpack-dev-server 相关配置
         */</span>
        <span class="token comment">// devServer: {</span>
        <span class="token comment">//     port: 8800,</span>
        <span class="token comment">//     /** 此项目中用于在地址栏直接输入地址跳转 */</span>
        <span class="token comment">//     historyApiFallback: true,</span>
        <span class="token comment">//     hotOnly: true,</span>
        <span class="token comment">//     hot:true</span>
        <span class="token comment">//     //contentBase: path.join(__dirname, &quot;bundle&quot;),</span>
        <span class="token doc-comment comment">/** 开启 gzip 压缩 */</span>
        <span class="token comment">//     compress: true</span>
        <span class="token doc-comment comment">/** 不输出打包信息 */</span>
        <span class="token comment">//     quiet: true</span>
        <span class="token comment">// },</span>

        <span class="token doc-comment comment">/**
         * <span class="token keyword">@dss</span> resolve 配置webpack如何寻找模块对应的文件
         * 参考 https://segmentfault.com/a/1190000013176083?utm_source=tag-newest
         */</span>
        <span class="token literal-property property">resolve</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">alias</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token literal-property property">componets</span><span class="token operator">:</span> <span class="token string">&#39;./src/components/&#39;</span> <span class="token comment">// 把 &quot;导入&quot; 语句里的components关键字替换成./src/components</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token comment">// 引用文件时没有加后缀，会自动带上后缀去尝试访问文件是否存在,尝试过程中用到的后缀列表默认 .js .json 如果都找不到 就会报错</span>
            <span class="token literal-property property">extensions</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;.ts&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;.js&#39;</span><span class="token punctuation">]</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>

        <span class="token doc-comment comment">/**
         * <span class="token keyword">@des</span> 不监听某些文件
         */</span>
        <span class="token literal-property property">watchOptions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">ignored</span><span class="token operator">:</span> <span class="token string">&#39; /node_modules/&#39;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>

        <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token comment">// rules: [</span>
            <span class="token comment">//     {</span>
            <span class="token comment">//         test: /\\.js$/,</span>
            <span class="token comment">//         include: path.resolve(__dirname, &quot;src/&quot;),</span>
            <span class="token comment">//         exclude: path.resolve(__dirname, &quot;node_modules&quot;),</span>
            <span class="token comment">//         use: [{</span>
            <span class="token comment">//             loader: &quot;babel-loader&quot;,</span>
            <span class="token comment">//             options: {</span>
            <span class="token comment">//                 presets: [&quot;env&quot;, &quot;react&quot;, &quot;stage-1&quot;],// stage-1 包含了stage-2和stage-3  当然0包含了1，2，3</span>
            <span class="token comment">//                 plugins: [[&#39;import&#39;, { libraryName: &#39;antd&#39;, style: &#39;css&#39; }]]</span>
            <span class="token comment">//             }</span>
            <span class="token comment">//         }]</span>
            <span class="token comment">//     }, </span>
            <span class="token doc-comment comment">/** 参考 webpack sass-loader */</span>
            <span class="token comment">//   {</span>
            <span class="token comment">//     test: /\\.s[ac]ss$/i,</span>
            <span class="token comment">//     include: &#39;&#39;</span>
            <span class="token comment">//     use: [</span>
                    <span class="token comment">// loader: devMode ? &#39;style-loader&#39;: MiniCssExtractPlugin.loader</span>
            <span class="token comment">//       /** 调用打包到js中的css时，创建 style 标签插入 html，不是创建文件然后引入 */</span>
            <span class="token comment">//       &#39;style-loader&#39;,</span>
            <span class="token comment">//       /** 在js代码中使用import和require来导入css文件，如果css文件中包含@import和url()这两个语句就需要css-loader来处理 */</span>
            <span class="token comment">//       &#39;css-loader&#39;,</span>
                    <span class="token comment">// {</span>
                        <span class="token comment">// compiles Sass to CSS</span>
                    <span class="token comment">//     loader: &#39;sass-loader&#39;,</span>
                    <span class="token comment">//     options: {</span>
                    <span class="token comment">//         // Prefer \`dart-sass\`</span>
                    <span class="token comment">//         implementation: require(&#39;sass&#39;),</span>
                    <span class="token comment">//     },</span>
                    <span class="token comment">// },</span>
            <span class="token comment">//     ],</span>
            <span class="token comment">//   }</span>
            <span class="token comment">// ]</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),o=[p];function l(c,i){return s(),a("div",null,o)}const r=n(t,[["render",l],["__file","webpackConfig.html.vue"]]);export{r as default};
