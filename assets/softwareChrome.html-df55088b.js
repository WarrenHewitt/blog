import{_ as e,p as i,q as l,a1 as r}from"./framework-7e1a102e.js";const t={},a=r('<h1 id="chrome" tabindex="-1"><a class="header-anchor" href="#chrome" aria-hidden="true">#</a> Chrome</h1><ul><li>解决 当使用 file:// 访问时出现跨域问题</li></ul><p>在快捷方式的 目标(T) 地址后添加 <code>&quot;C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe&quot; --disable-web-security --user-data-dir=~/chromeTemp</code></p><ul><li>实验性功能： <code>chrome://flags/</code></li></ul><h2 id="插件" tabindex="-1"><a class="header-anchor" href="#插件" aria-hidden="true">#</a> 插件</h2><p>插件列表 <code>chrome://extensions/</code></p><h2 id="快捷键" tabindex="-1"><a class="header-anchor" href="#快捷键" aria-hidden="true">#</a> 快捷键</h2><ul><li><p>ctrl + shift + D 切换控制台显示位置</p></li><li><p>ctrl + [ 和 ctrl + ] 切换面板</p></li><li><p>f6 将焦点锁定到地址栏</p></li><li><p>ctrl + n 打开新窗口。</p></li><li><p>ctrl + t 打开新标签页</p></li><li><p>ctrl + 1 2 3 ... 跳转不同标签</p></li><li><p>alt + 左右箭头 返回上一页下一页</p></li><li><p>F9： 一步一步执行，遇到方法，进入到方法内部</p></li><li><p>F10：一步一步执行，遇到方法，一步执行完，无法看到方法的执行情况</p></li><li><p>F11：一步一步执行，遇到方法，进入到方法内部, 与 F9 的区别是，异步代码 会等待然后进入，比如 计时器延时执行，会等待时间后再继续进入执行</p></li><li><p>shift + F11: 从当前的方法退出，跳出当前方法</p></li></ul><h2 id="devtools" tabindex="-1"><a class="header-anchor" href="#devtools" aria-hidden="true">#</a> DevTools</h2><ul><li><p>Network: 查看gzip原始文件大小，将鼠标悬浮到 size 上</p></li><li><p>Performance: 解析 JS、计算样式、重绘等页面加载等</p></li><li><p>Memory: 页面 JS 对象和相关联的 DOM 节点的内存分布情况</p></li><li><p>Security: 检测当面页面的安全性</p></li><li><p>LightHouse：对页面的加载进行分析，然后给出性能的建议</p></li><li><p>类比 ：控制台 $ = document.querySelector $$ = document.querySelectorAll</p></li></ul><h2 id="lighthouse" tabindex="-1"><a class="header-anchor" href="#lighthouse" aria-hidden="true">#</a> lightHouse</h2><h3 id="可选择分类" tabindex="-1"><a class="header-anchor" href="#可选择分类" aria-hidden="true">#</a> 可选择分类</h3><p>Performance 页面的性能 首次内容绘制 （First Contentful Paint） 3s内 1.8s内为优 首次有效绘制 （First Meaningful Paint） 首次 CPU 空闲 （First CPU Idle） 可交互时间 （Time to Interactive） 速度指标 （Speed Index） 输入延迟估值 （Estimated Input Latency）</p><p>Accessibility 可访问性 监测页面的可访问性与优化建议，无障碍设计，所创建的网站对所有用户都可用/可访问，不管用户的生理/身体能力如何、不管用户是以何种方式访问网站</p><p>Best Practice 最佳实践 页面是否符合最佳实践，实践性检测，如网页安全性，如是否开启 HTTPS、网页存在的漏洞等</p><p>SEO 搜索引擎优化</p><p>PWA（ Progressive Web App） 验证 PWA 的各个方面的性能情况</p>',17),o=[a];function c(p,h){return i(),l("div",null,o)}const d=e(t,[["render",c],["__file","softwareChrome.html.vue"]]);export{d as default};