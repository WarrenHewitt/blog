import{_ as n,M as r,p as d,q as s,R as l,N as a,V as e,t,a1 as o}from"./framework-7e1a102e.js";const p={},c={class:"table-of-contents"},h=o(`<p>[toc]</p><h2 id="windows下的相关操作" tabindex="-1"><a class="header-anchor" href="#windows下的相关操作" aria-hidden="true">#</a> windows下的相关操作</h2><h3 id="win11-修改右键" tabindex="-1"><a class="header-anchor" href="#win11-修改右键" aria-hidden="true">#</a> win11 修改右键</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 管理员权限打开命令窗口，恢复win10右键：</span>
reg.exe <span class="token function">add</span> <span class="token string">&quot;HKCU\\Software\\Classes\\CLSID\\{86ca1aa0-34aa-4e8b-a509-50c905bae2a2}\\InprocServer32&quot;</span> /f /ve 
<span class="token comment"># 管理员权限打开命令窗口，恢复win11右键：</span>
reg.exe delete <span class="token string">&quot;HKCU\\Software\\Classes\\CLSID\\{86ca1aa0-34aa-4e8b-a509-50c905bae2a2}\\InprocServer32&quot;</span> /va /f 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol><li>hosts文件所在位置：<code>C:\\Windows\\System32\\drivers\\etc</code></li></ol><ul><li><p>查看是否固态硬盘： 右键任意盘 -&gt; 属性 -&gt; 工具 -&gt; 优化</p></li><li><p>power shell 无法执行 vue 等命令，输入 set-ExecutionPolicy RemoteSigned， 选择 A</p></li></ul><h3 id="快捷键" tabindex="-1"><a class="header-anchor" href="#快捷键" aria-hidden="true">#</a> 快捷键</h3><ul><li><p>win + s ：搜索 （calculator 计算器）</p></li><li><p>win + e ：打开‘此电脑’或‘快速访问’（切换方式 win + e -&gt; &#39;查看&#39; -&gt; &#39;选项&#39; -&gt; &#39;常规&#39; (修改第一项即可)）</p></li><li><p>Ctrl + t ： 打开新的标签页，并跳转到该标签页</p></li><li><p>ctrl + alt + 上下左右 旋转屏幕</p></li><li><p>win + 上下左右 放大缩小居左居右窗口</p></li><li><p>alt + space 激活后 按m 放开 再按上下左右 移动窗口，enter 确认放在当前位置，按esc返回初始位置</p></li><li><p>alt + f2 打开新的窗口 (不是所有的都可以，git bash可以)</p></li><li><p>ctrl + t ： 打开新的标签页，并跳转到该标签页</p></li><li><p>鼠标点中窗口 摇晃 最小化除了当前窗口外的所有窗口</p></li></ul><h3 id="win-r-可使用的命令" tabindex="-1"><a class="header-anchor" href="#win-r-可使用的命令" aria-hidden="true">#</a> win + r ：可使用的命令</h3><ul><li><p>control.exe(简写输入control即可) 控制面板</p></li><li><p>taskmgr 任务管理器</p><ul><li>在启动选项卡中可以禁止或开启开机启动项</li></ul></li><li><p>notepad 记事本</p></li><li><p>cmd 命令窗口</p></li><li><p>regedit 打开注册表</p></li><li><p>shell:startup 打开放置开机启动项的文件夹（如开机执行脚本，批处理等）（把应用的快捷方式复制到这里即可）</p></li><li><p>msconfig : 打开 &quot;系统设置&quot;</p></li><li><p>mspaint 打开画板</p></li><li><p>dxdiag 查看电脑硬件信息</p></li></ul><h3 id="修改账户名称" tabindex="-1"><a class="header-anchor" href="#修改账户名称" aria-hidden="true">#</a> 修改账户名称</h3><p>方式一：</p><ol><li>进入控制面板</li><li>进入用户账户</li><li>再次选择用户账户</li><li>选择更改账户名称</li></ol><p>方式二：</p><ol><li>打开计算机管理（右键此电脑，win + s 搜索）</li><li>本地用户组</li><li>用户</li><li>右键用户，重命名</li></ol><h3 id="截屏" tabindex="-1"><a class="header-anchor" href="#截屏" aria-hidden="true">#</a> 截屏</h3><ul><li><p>win + shift + s 可选，不可编辑</p></li><li><p>alt + printscreen 只截取当前最上方激活的窗口</p></li><li><p>win + printscreen 所有界面</p></li><li><p>win + w 功能最多的截图方式</p></li></ul><h3 id="打开-系统属性" tabindex="-1"><a class="header-anchor" href="#打开-系统属性" aria-hidden="true">#</a> 打开 &quot;系统属性&quot;</h3><ol><li><p>此电脑(右键) -&gt; 高级系统设置</p></li><li><p>win + r -&gt; 运行 <code>sysdm.cpl</code></p></li></ol><h3 id="添加-环境变量" tabindex="-1"><a class="header-anchor" href="#添加-环境变量" aria-hidden="true">#</a> 添加 &quot;环境变量&quot;</h3><ul><li><p>系统变量：对所有用户有效</p></li><li><p>用户变量：对当前用户有效</p></li><li><p>进入 -&gt; 系统属性 -&gt; 高级 -&gt; 环境变量 -&gt; Path -&gt; 编辑 -&gt; 新建</p></li></ul><h3 id="添加和删除开机密码" tabindex="-1"><a class="header-anchor" href="#添加和删除开机密码" aria-hidden="true">#</a> 添加和删除开机密码</h3><p>按win键 -&gt; 右键用户 -&gt; 点击 &quot;更改用户设置&quot; -&gt; 登录选项</p><ul><li>添加：直接添加即可</li><li>删除：输入原密码，不输入新密码，点击完成即可</li></ul><h3 id="调整鼠标灵敏度" tabindex="-1"><a class="header-anchor" href="#调整鼠标灵敏度" aria-hidden="true">#</a> 调整鼠标灵敏度</h3><p>进入控制面板 -&gt; 外观和个性化 -&gt; 更改鼠标指针</p><h3 id="卸载" tabindex="-1"><a class="header-anchor" href="#卸载" aria-hidden="true">#</a> 卸载</h3><ul><li>在控制面板卸载中卸载</li><li>以上方法找不到，可在注册表中ctrl + f 查找(比较麻烦)</li><li>用360</li></ul><h3 id="分屏操作" tabindex="-1"><a class="header-anchor" href="#分屏操作" aria-hidden="true">#</a> 分屏操作</h3><ul><li><p>选中软件 win + 左右箭头</p></li><li><p>在上面基础上，上下箭头 四分屏</p></li><li><p>win + ctrl + d 新建桌面窗口</p></li><li><p>win + ctrl + 左右箭头 切换窗口上下箭头最大最小化</p></li></ul><h3 id="切换半角全角输入法" tabindex="-1"><a class="header-anchor" href="#切换半角全角输入法" aria-hidden="true">#</a> 切换半角全角输入法</h3><p>当切换到英文输入法时，输出的字母或字符还是有问题 注意中文输入法</p><ul><li>shift + 空格</li></ul><h3 id="关闭vpn软件导致无法连接正常网络" tabindex="-1"><a class="header-anchor" href="#关闭vpn软件导致无法连接正常网络" aria-hidden="true">#</a> 关闭vpn软件导致无法连接正常网络</h3><ol><li>打开控制面板</li><li>打开网络和internet</li><li>打开网络和共享中心</li><li>打开internet选项</li><li>选择连接</li><li>点击局域网设置</li><li>勾选自动检测设置，和使用自动配置脚本</li></ol><h2 id="mac" tabindex="-1"><a class="header-anchor" href="#mac" aria-hidden="true">#</a> Mac</h2><p>访达 -&gt; 服务 -&gt; 服务偏好 -&gt; 快捷键 -&gt; 勾选新建位于文件夹位置的终端； 右键点击文件夹选择打开终端</p><p>系统偏好 -&gt; 电池</p>`,38);function u(f,w){const i=r("router-link");return d(),s("div",null,[l("nav",c,[l("ul",null,[l("li",null,[a(i,{to:"#windows下的相关操作"},{default:e(()=>[t("windows下的相关操作")]),_:1}),l("ul",null,[l("li",null,[a(i,{to:"#win11-修改右键"},{default:e(()=>[t("win11 修改右键")]),_:1})]),l("li",null,[a(i,{to:"#快捷键"},{default:e(()=>[t("快捷键")]),_:1})]),l("li",null,[a(i,{to:"#win-r-可使用的命令"},{default:e(()=>[t("win + r ：可使用的命令")]),_:1})]),l("li",null,[a(i,{to:"#修改账户名称"},{default:e(()=>[t("修改账户名称")]),_:1})]),l("li",null,[a(i,{to:"#截屏"},{default:e(()=>[t("截屏")]),_:1})]),l("li",null,[a(i,{to:"#打开-系统属性"},{default:e(()=>[t('打开 "系统属性"')]),_:1})]),l("li",null,[a(i,{to:"#添加-环境变量"},{default:e(()=>[t('添加 "环境变量"')]),_:1})]),l("li",null,[a(i,{to:"#添加和删除开机密码"},{default:e(()=>[t("添加和删除开机密码")]),_:1})]),l("li",null,[a(i,{to:"#调整鼠标灵敏度"},{default:e(()=>[t("调整鼠标灵敏度")]),_:1})]),l("li",null,[a(i,{to:"#卸载"},{default:e(()=>[t("卸载")]),_:1})]),l("li",null,[a(i,{to:"#分屏操作"},{default:e(()=>[t("分屏操作")]),_:1})]),l("li",null,[a(i,{to:"#切换半角全角输入法"},{default:e(()=>[t("切换半角全角输入法")]),_:1})]),l("li",null,[a(i,{to:"#关闭vpn软件导致无法连接正常网络"},{default:e(()=>[t("关闭vpn软件导致无法连接正常网络")]),_:1})])])]),l("li",null,[a(i,{to:"#mac"},{default:e(()=>[t("Mac")]),_:1})])])]),h])}const _=n(p,[["render",u],["__file","windowsLinuxMac.html.vue"]]);export{_ as default};
